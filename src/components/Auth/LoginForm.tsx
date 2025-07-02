import { useState } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@example.com" && password === "password123") {
      localStorage.setItem("loggedIn", "true");
      router.push("/configure");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="bg-[#f8f5f2] p-8 rounded-xl shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4 text-[#252422]">Login</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full border p-2 mb-4 rounded text-[#403d39]"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 mb-4 rounded text-[#403d39]"
      />

      <div className="mb-4">
        <button
          onClick={handleLogin}
          className="bg-[#b5651d] text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
