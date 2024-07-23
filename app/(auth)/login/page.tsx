"use client";

import { createRef, FormEvent, useEffect, useState } from "react";
import Button from "../../components/Elements/Button";
import Input from "../../components/Elements/Input";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const usernameRef = createRef<HTMLInputElement>();
    useEffect(() => {
        localStorage.getItem("session-login") && router.push("/home");
        usernameRef.current?.focus();
    }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        let errorMessage = "";

        if (!username || !password) {
            errorMessage = "Username and password cannot be empty";
        } else if (username !== "admin" || password !== "admin") {
            errorMessage = "Wrong username or password";
        }

        if (errorMessage) {
            toast.error(errorMessage, {
                duration: 2000,
                position: "top-center",
            });
        } else {
            localStorage.setItem("session-login", "true");
            router.push("/");
        }
    };

    return (
        <div className="login-wrapper">
            <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
                <div className="form-content">
                    <h1 className="text-3xl font-bold mb-4">Sign In</h1>
                    <Input
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        ref={usernameRef}
                        label="Username"
                        name="username"
                        type="text"
                    />
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="************"
                        label="Password"
                        name="password"
                        type="password"
                    />
                    <Button width="full" style="tertiary" type="submit" label="Sign In" />

                    <div className="flex flex-col items-center gap-3 mt-4 text-sm">
                        <a className="text-third" href="#">
                            Forgot Password ?
                        </a>
                        <span>
                            Don’t have an account?{" "}
                            <a className="text-third" href="#">
                                Sign Up
                            </a>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
