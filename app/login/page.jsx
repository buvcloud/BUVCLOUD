
"use client";

import { useState } from "react";
import Link from "next/link";
import "./login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // Correct email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Demo validation only; backend authentication is not connected
    setError(
      "Login UI validated. Connect your authentication backend to sign in."
    );
  }

  return (
    <main className="login-page">
      {/* Left branding panel */}
      <section className="login-brand">
        <Link href="/" className="login-logo">
          <img
            src="/buvcloud-logo.png"
            alt="BUV Cloud"
            className="login-logo-image"
          />
          <span>BUV Cloud</span>
        </Link>

        <p className="brand-caption">
          CLOUD SECURITY &amp; INTELLIGENCE
        </p>

        <div className="brand-message">
          <span className="brand-tag">SECURE YOUR CLOUD</span>

          <h1>
            Welcome back.
            <br />
            <span>Trust Every Move.</span>
          </h1>

          <p>
            Discover risks, protect your cloud environment,
            and make smarter security decisions.
          </p>

          <div className="brand-points">
            <p>✓ Cloud security visibility</p>
            <p>✓ Risk-focused insights</p>
            <p>✓ Smarter cloud decisions</p>
          </div>
        </div>

        <p className="brand-footer">
          © 2026 BUV INNOTECH PRIVATE LIMITED. All rights reserved.
        </p>
      </section>

      {/* Right login panel */}
      <section className="login-form-section">
        <div className="login-card">
          {/* Mobile logo */}
          <Link href="/" className="mobile-logo">
            <img
              src="/buvcloud-logo.png"
              alt="BUV Cloud"
              className="login-logo-image"
            />
            <span>BUV Cloud</span>
          </Link>

          <div className="form-heading">
            <span className="form-eyebrow">
              YOUR CLOUD. YOUR CONTROL.
            </span>
            <h2>Sign in to your account</h2>
            <p>Enter your details to access your workspace.</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Work email</label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>
                <Link href="/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <div className="password-input">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <label className="remember-option">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>

            {error && (
              <p className="login-message" role="status">
                {error}
              </p>
            )}

            <button type="submit" className="login-submit">
              Sign in securely <span>→</span>
            </button>
          </form>

          <p className="signup-prompt">
            New to BUV Cloud?{" "}
            <Link href="/signup">Create an account</Link>
          </p>

          <div className="security-note">
            <span>◈</span>
            Secure access to your cloud workspace
          </div>
        </div>
      </section>
    </main>
  );
}
