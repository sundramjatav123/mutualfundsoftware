"use client";

import Swal from "sweetalert2";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import InputField from "@/app/components/ui/InputField";
import Button from "@/app/components/ui/Button";
import { validateLogin } from "@/utils/validateLogin";
import { showAlert } from "@/utils/swalConfig";

const loginFields = [
    {
        type: "input",
        label: "Email Address",
        name: "email",
        inputType: "email",
        placeholder: "Enter your email",
    },
    {
        type: "password",
        label: "Password",
        name: "password",
        placeholder: "Enter your password",
    },
];

export default function LoginForm() {
    const router = useRouter();
    const initialState = loginFields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
    }, {});
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateLogin(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            setLoading(true);
            setErrors({});
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) {

                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: data.message || "Something went wrong",
                });
                return;
            }

            showAlert({
                icon: "success",
                title: "Login Successful",
                text: "Welcome back",
            });
            setTimeout(() => {
                window.location.href = "/admin";
            }, 1000);
        } catch (error) {

            showAlert({
                icon: "error",
                title: "Error",
                text: "Something went wrong",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="px-4">
            <div className="w-full max-w-md mx-auto main-section">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 p-5 md:p-8 rounded-xl border border-[var(--rv-border)] bg-[var(--rv-card)]"
                >
                    <div className="flex flex-col gap-2 text-center">
                        <h5 className="font-semibold">
                            Welcome Back
                        </h5>
                        <p className="opacity-70">
                            Login to access your dashboard
                        </p>
                    </div>

                    {loginFields.map((field, i) => {
                        if (field.type === "input") {
                            return (
                                <InputField
                                    key={i}
                                    label={field.label}
                                    type={field.inputType}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    error={errors[field.name]}
                                />
                            );

                        }

                        if (field.type === "password") {
                            return (
                                <div
                                    key={i}
                                    className="flex flex-col gap-1 w-full"
                                >
                                    <label className="font-medium">
                                        {field.label}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder}
                                            className={`w-full p-3 rounded-md border bg-transparent focus:outline-none ${errors[field.name]
                                                ? "border-[var(--rv-red)]"
                                                : "border-[var(--rv-border)]"
                                                }`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-lg opacity-70"
                                        >
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </button>
                                    </div>

                                    {errors[field.name] && (
                                        <span className="text-xs text-[var(--rv-red)]">
                                            {errors[field.name]}
                                        </span>
                                    )}
                                </div>
                            );
                        }
                        return null;
                    })}

                    <Button
                        type="submit"
                        text={loading ? "Please Wait..." : "Login"}
                        loading={loading}
                        disabled={loading}
                    />

                </form>
            </div>
        </section>
    );
}