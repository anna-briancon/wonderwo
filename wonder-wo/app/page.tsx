"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password: "demo" }),
      headers: { "Content-Type": "application/json" },
    });
    setName(""); setEmail("");
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users in Wonder Wo</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="border p-2"/>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="border p-2"/>
        <button className="bg-blue-500 text-white p-2 rounded">Add user</button>
      </form>
      <ul>
        {users.map((u:any)=> (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}
