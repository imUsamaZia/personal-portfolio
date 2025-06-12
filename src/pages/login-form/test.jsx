import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// login form
const index = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const route = useRouter()
    const signupHandle = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "/api/login",
                { email, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            alert("accounted created");
            console.log("response", res.data);
            route.push('/portfolio-page')
        } catch (error) {
            alert(
                error.response?.data?.message ||
                "login faild"
            );
            console.log("error baby", error);
        }
    };
    return (
        <div className="w-full flex items-center justify-center h-screen flex-col gap-2">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form
                onSubmit={signupHandle}
                className="w-full flex p-5 items-center justify-center flex-col max-w-[340px] gap-3 bg-slate-400 rounded-lg shadow-lg"
            >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full outline-none px-2 py-2 border bg-purple-700"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full outline-none px-2 py-2 border bg-purple-700"
                />
                <div className="flex items-center justify-center gap-3 flex-row w-full">
                    <button
                        type="submit"
                        className="px-3 py-2 w-auto outline-none bg-blue-700 text-white rounded-md"
                    >
                        Login
                    </button>
                    <Link href="/signup-form" className="px-3 py-2 w-auto outline-none bg-yellow-300 text-white rounded-md">Sign Up</Link>
                </div>

            </form>
        </div>
    );
};

export default index;

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// sign up form
const index = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const route = useRouter()
    const signupHandle = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "/api/signup",
                { email, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            alert("accounted created");
            console.log("response", res.data);
            route.push('/login-form')
        } catch (error) {
            alert(
                error.response?.data?.message ||
                "  through an error if there is any problem"
            );
            console.log("error baby", error);
        }
    };
    return (
        <div className="w-full flex items-center justify-center h-screen flex-col gap-2">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form
                onSubmit={signupHandle}
                className="w-full flex p-5 items-center justify-center flex-col max-w-[340px] gap-3 bg-slate-400 rounded-lg shadow-lg"
            >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full outline-none px-2 py-2 border bg-purple-700"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full outline-none px-2 py-2 border bg-purple-700"
                />
                <button
                    type="submit"
                    className="px-3 py-2 w-auto outline-none bg-blue-700 text-white rounded-md"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default index;

