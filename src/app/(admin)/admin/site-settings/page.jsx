"use client";

import { useEffect, useState } from "react";

import InputField from "@/app/components/ui/InputField";
import Button from "@/app/components/ui/Button";

import { showAlert } from "@/utils/swalConfig";
import TextEditor from "@/app/components/ui/TextEditor";

const settingsFields = [
  {
    label: "Website Name",
    name: "websiteName",
    type: "text",
    placeholder: "Enter website name",
  },
  {
    label: "Website Domain",
    name: "websiteDomain",
    type: "text",
    placeholder:
      "Enter website domain",
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "text",
    placeholder: "Enter phone number",
  },

  {
    label: "WhatsApp Number",
    name: "whatsapp",
    type: "text",
    placeholder: "Enter WhatsApp number",
  },

  {
    label: "Email Address",
    name: "email",
    type: "email",
    placeholder: "Enter email address",
  },

  {
    label: "Address",
    name: "address",
    type: "textarea",
    placeholder: "Enter full address",
  },
  {
    label: "Website Description",
    name: "description",
    type: "textarea",
    placeholder:
      "Enter website description",
  },
];

export default function AdminSettingsForm() {

  const initialState = settingsFields.reduce(
    (acc, field) => {
      acc[field.name] = "";
      return acc;
    },
    {}
  );

  const [formData, setFormData] =
    useState(initialState);

  const [loading, setLoading] =
    useState(false);

  const [fetching, setFetching] =
    useState(true);

  const fetchSettings = async () => {
    try {
      setFetching(true);
      const response = await fetch(
        "/api/admin/settings"
      );
      const data =
        await response.json();
      if (
        response.ok &&
        data.data
      ) {
        setFormData({
          websiteName:
            data.data.websiteName || "",
          phone:
            data.data.phone || "",
          whatsapp:
            data.data.whatsapp || "",
          email:
            data.data.email || "",
          address:
            data.data.address || "",
          websiteDomain:
            data.data.websiteDomain || "",

          description:
            data.data.description || "",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {

    fetchSettings();

  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        "/api/admin/settings",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            formData
          ),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {

        showAlert({
          icon: "error",
          title: "Failed",
          text:
            data.message ||
            "Something went wrong",
        });

        return;

      }
      setFormData(data.data);
      showAlert({
        icon: "success",
        title: "Success",
        text:
          "Settings updated successfully",
      });

    } catch (error) {

      showAlert({
        icon: "error",
        title: "Error",
        text: "Server error",
      });

    } finally {
      setLoading(false);
    }
  };

  if (fetching) {

    return (
      <div className="p-10 text-center opacity-70">
        Loading settings...
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-semibold">
          Website Settings
        </h3>
        <p className="opacity-70 mt-1">
          Manage website contact
          information
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)]"
      >
        {settingsFields.map(
          (field, i) => {
            if (
              field.type ===
              "textarea"
            ) {

              return (
                <div
                  key={i}
                  className="md:col-span-2"
                >

                  <TextEditor
                    label={field.label}
                    value={
                      formData[field.name]
                    }
                    onChange={(value) =>
                      setFormData({
                        ...formData,
                        [field.name]:
                          value,
                      })
                    }
                  />

                </div>
              );

            }

            return (
              <InputField
                key={i}
                label={field.label}
                type={field.type}
                name={field.name}
                value={
                  formData[
                  field.name
                  ]
                }
                onChange={
                  handleChange
                }
                placeholder={
                  field.placeholder
                }
              />
            );

          }
        )}
        <div className="md:col-span-2 flex justify-end">
          <Button
            type="submit"
            text={
              loading
                ? "Saving..."
                : "Save Settings"
            }
            loading={loading}
            disabled={loading}
            className="w-fit"
          />
        </div>
      </form>
    </section>
  );
}