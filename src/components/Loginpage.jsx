import { useState } from "react";

// Live Backend URL
const API_URL = "https://shop-backend-vjqf.vercel.app";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password,
          }),
        }
      );

      // Response ko pehle text mein read karo
      const responseText = await response.text();

      // JSON mein convert karo
      let data;

      try {
        data = JSON.parse(responseText);
      } catch {
        throw new Error(
          "Backend se valid JSON response nahi aa raha. Vercel API routing check karo."
        );
      }

      // Login error check
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Token check
      if (!data.token) {
        throw new Error("Login successful response mein token nahi mila.");
      }

      // Token save karo
      localStorage.setItem("adminToken", data.token);

      // Dashboard open karo
      onLogin();

    } catch (err) {
      console.error("Login Error:", err);

      setError(
        err.message === "Failed to fetch"
          ? "Backend se connection nahi ho raha. Internet, CORS aur backend URL check karo."
          : err.message
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <div style={styles.brand}>
          <div style={styles.logo}>A</div>
          <span style={styles.brandName}>Admin Panel</span>
        </div>

        <div style={styles.header}>
          <h1 style={styles.heading}>Welcome back</h1>

          <p style={styles.subtitle}>
            Please enter your details to sign in.
          </p>
        </div>

        <form onSubmit={handleLogin} style={styles.form}>

          <div style={styles.field}>
            <label htmlFor="email" style={styles.label}>
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              style={styles.input}
            />
          </div>

          {error && (
            <div role="alert" style={styles.error}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : {}),
            }}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

        </form>

        <div style={styles.bottom}>
          <span style={styles.securityIcon}>●</span>
          Secure administrator access
        </div>

      </div>

      <p style={styles.copyright}>
        © {new Date().getFullYear()} Admin Panel. All rights reserved.
      </p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "32px 20px",
    boxSizing: "border-box",
    background: "#f8fafc",
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "410px",
    padding: "36px",
    boxSizing: "border-box",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    boxShadow: "0 4px 24px rgba(15, 23, 42, 0.04)",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "38px",
  },

  logo: {
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    background: "#2563eb",
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: "700",
  },

  brandName: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#111827",
    letterSpacing: "-0.4px",
  },

  header: {
    marginBottom: "28px",
  },

  heading: {
    margin: "0 0 9px",
    color: "#111827",
    fontSize: "27px",
    fontWeight: "700",
    letterSpacing: "-0.8px",
  },

  subtitle: {
    margin: 0,
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: 1.6,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "21px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  label: {
    color: "#374151",
    fontSize: "13px",
    fontWeight: "600",
  },

  input: {
    width: "100%",
    height: "46px",
    padding: "0 13px",
    boxSizing: "border-box",
    border: "1px solid #d1d5db",
    borderRadius: "7px",
    outline: "none",
    background: "#ffffff",
    color: "#111827",
    fontSize: "14px",
    transition: "border-color 0.2s, box-shadow 0.2s",
  },

  error: {
    padding: "11px 12px",
    border: "1px solid #fecaca",
    borderRadius: "7px",
    background: "#fef2f2",
    color: "#b91c1c",
    fontSize: "13px",
    lineHeight: 1.5,
  },

  button: {
    width: "100%",
    height: "46px",
    marginTop: "2px",
    border: "1px solid #2563eb",
    borderRadius: "7px",
    background: "#2563eb",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.2s, border-color 0.2s",
  },

  buttonDisabled: {
    opacity: 0.65,
    cursor: "not-allowed",
  },

  bottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginTop: "27px",
    paddingTop: "20px",
    borderTop: "1px solid #f1f5f9",
    color: "#9ca3af",
    fontSize: "11px",
  },

  securityIcon: {
    color: "#16a34a",
    fontSize: "9px",
  },

  copyright: {
    margin: "22px 0 0",
    color: "#9ca3af",
    fontSize: "12px",
    textAlign: "center",
  },
};

export default LoginPage;