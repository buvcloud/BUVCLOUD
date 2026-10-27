
"use client";

import { useState } from "react";
import Link from "next/link";
import "./signup.css";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [terms, setTerms] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSignup(e) {
    e.preventDefault();
    setMessage("");
    setSuccess(false);

    // Check all required fields
    if (
      !name.trim() ||
      !email.trim() ||
      !company.trim() ||
      !password ||
      !confirmPassword
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Correct email validation regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Password must contain at least 8 characters
    if (password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    // Check password confirmation
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Terms acceptance is required
    if (!terms) {
      setMessage("Please accept the Terms & Conditions.");
      return;
    }

    // UI validation only; backend is not connected
    setSuccess(true);
    setMessage(
      "Form validated successfully! Backend connection is required to create your account."
    );
  }

  return (
    <main className="signup-page">
      {/* Left branding section */}
      <section className="signup-brand">
        <Link href="/" className="signup-logo">
          <img
            src="/buvcloud-logo.png"
            alt="BUVCloud"
            className="signup-logo-image"
          />
          <span>BUVCloud</span>
        </Link>

        <p className="signup-caption">
          CLOUD SECURITY &amp; INTELLIGENCE
        </p>

        <div className="signup-brand-message">
          <span className="signup-tag">START SECURE</span>

          <h1>
            Secure your cloud.
            <br />
            <span>Start with confidence.</span>
          </h1>

          <p>
            Bring your cloud security and risk insights together
            in one intelligent workspace.
          </p>

          <div className="signup-points">
            <p>✓ Cloud security visibility</p>
            <p>✓ Risk-focused insights</p>
            <p>✓ Smarter cloud decisions</p>
          </div>
        </div>

        <p className="signup-brand-footer">
          © 2026 BUVCloud. All rights reserved.
        </p>
      </section>

      {/* Right account creation section */}
      <section className="signup-form-section">
        <div className="signup-card">
          {/* Mobile logo: visible only on smaller screens */}
          <Link href="/" className="signup-mobile-logo">
            <img
              src="/buvcloud-logo.png"
              alt="BUVCloud"
              className="signup-logo-image"
            />
            <span>BUVCloud</span>
          </Link>

          <div className="signup-heading">
            <span className="signup-eyebrow">
              YOUR CLOUD. YOUR CONTROL.
            </span>

            <h2>Create your account</h2>
            <p>Get started with your BUVCloud workspace.</p>
          </div>

          <form onSubmit={handleSignup}>
            <div className="signup-group">
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>

            <div className="signup-group">
              <label htmlFor="signupEmail">Work email</label>
              <input
                id="signupEmail"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="signup-group">
              <label htmlFor="company">Company name</label>
              <input
                id="company"
                type="text"
                placeholder="Enter your company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                autoComplete="organization"
              />
            </div>

            <div className="signup-group">
              <label htmlFor="signupPassword">Password</label>

              <div className="signup-password-input">
                <input
                  id="signupPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="signup-show-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="signup-group">
              <label htmlFor="confirmPassword">
                Confirm password
              </label>

              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>

            <label className="signup-terms">
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
              />
              <span>
                I agree to the Terms &amp; Conditions and Privacy Policy.
              </span>
            </label>

            {message && (
              <p
                className={`signup-message ${
                  success ? "signup-success" : ""
                }`}
                role="status"
              >
                {message}
              </p>
            )}

            <button type="submit" className="signup-submit">
              Create account <span>→</span>
            </button>
          </form>

          <p className="signup-login-prompt">
            Already have an account?{" "}
            <Link href="/login">Sign in</Link>
          </p>

          <div className="signup-security-note">
            <span>◈</span>
            Secure access to your cloud workspace
          </div>
        </div>
      </section>
    </main>
  );
}
