"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);   // { name, email }
  const [ready, setReady] = useState(false); // wait for localStorage read

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("tl_user");
      if (stored) setUser(JSON.parse(stored));
    } catch {}
    setReady(true);
  }, []);

  // ── signup ──────────────────────────────────────────────────────────────
  // Returns null on success, or an error string
  function signup(name, email, password) {
    const accounts = getAccounts();
    const exists = accounts.find((a) => a.email.toLowerCase() === email.toLowerCase());
    if (exists) return "An account with this email already exists.";

    const newUser = { name, email, password };
    localStorage.setItem("tl_accounts", JSON.stringify([...accounts, newUser]));

    const session = { name, email };
    localStorage.setItem("tl_user", JSON.stringify(session));
    setUser(session);
    return null;
  }

  // ── login ────────────────────────────────────────────────────────────────
  // Returns null on success, or an error string
  function login(email, password) {
    const accounts = getAccounts();
    const account = accounts.find((a) => a.email.toLowerCase() === email.toLowerCase());
    if (!account) return "No account found with this email. Please sign up first.";
    if (account.password !== password) return "Incorrect password.";

    const session = { name: account.name, email: account.email };
    localStorage.setItem("tl_user", JSON.stringify(session));
    setUser(session);
    return null;
  }

  // ── logout ───────────────────────────────────────────────────────────────
  function logout() {
    localStorage.removeItem("tl_user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, ready, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function getAccounts() {
  try {
    const raw = localStorage.getItem("tl_accounts");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
