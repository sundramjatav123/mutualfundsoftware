"use client";

import { useState } from "react";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import TextareaField from "../ui/TextareaField";
import Button from "../ui/Button";
import { validateForm } from "@/utils/validateForm";
import { FiArrowRight } from "react-icons/fi";

const formFields = [
    {
        type: "input",
        label: "Username",
        name: "name",
        inputType: "text",
        placeholder: "Enter your name",
    },
    {
        type: "input",
        label: "Email Address",
        name: "email",
        inputType: "email",
        placeholder: "Enter your email",
    },
    {
        type: "input",
        label: "Phone Number",
        name: "mobile",
        inputType: "tel",
        placeholder: "Enter your phone number",
    },
    {
        type: "select",
        label: "Select Service",
        name: "service",
        placeholder: "Choose Service",
        options: [
            "Wealth Elite",
            "Robo App",
            "Financial Website",
            "Business Booster",
            "Advisory X App",
            "Digital Marketing Services",
        ],
    },
    {
        type: "textarea",
        label: "Message",
        name: "message",
        placeholder: "Tell us about your requirements...",
    },
];

export default function ContactForm({ title }) {

    const initialState = formFields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "mobile") {

            const numericValue = value.replace(/\D/g, "");

            if (numericValue.length > 10) return;

            setFormData({
                ...formData,
                [name]: numericValue,
            });

            return;
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        console.log(formData);
        alert("Form Submitted Successfully");
        setFormData(initialState);
    };

    return (
        <div className="w-full h-full">

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 p-4 md:p-6 rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)]" >
                <div>
                    <h4>{title}</h4>
                    <p>No obligations. Get your personalised investment roadmap.</p>
                </div>
                {formFields.map((field, i) => {
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

                    if (field.type === "select") {
                        return (
                            <SelectField
                                key={i}
                                label={field.label}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                options={field.options}
                                placeholder={field.placeholder}
                                error={errors[field.name]}
                            />
                        );
                    }

                    if (field.type === "textarea") {
                        return (
                            <TextareaField
                                key={i}
                                label={field.label}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                error={errors[field.name]}
                            />
                        );
                    }

                    return null;
                })}
                <Button Icon={FiArrowRight} text="Book A Free Demo" />
            </form>
        </div>
    );
}