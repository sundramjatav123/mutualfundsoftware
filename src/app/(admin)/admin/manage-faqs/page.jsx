"use client";

import { useEffect, useState } from "react";

import Button from "@/app/components/ui/Button";
import InputField from "@/app/components/ui/InputField";
import TextareaField from "@/app/components/ui/TextareaField";

import {
  FiEdit2,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import { showAlert } from "@/utils/swalConfig";
import TextEditor from "@/app/components/ui/TextEditor";

const faqFields = [
  {
    label: "Question",
    name: "question",
    type: "input",
    inputType: "text",
    placeholder: "Enter question",
  },

  {
    label: "Answer",
    name: "answer",
    type: "textarea",
    placeholder: "Enter answer",
  },
];

export default function Page() {

  const [faqs, setFaqs] =
    useState([]);

  const [openModal, setOpenModal] =
    useState(false);

  const [deleteModal, setDeleteModal] =
    useState(false);

  const [editId, setEditId] =
    useState(null);

  const [selectedFaq, setSelectedFaq] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      question: "",
      answer: "",
    });

  const fetchFaqs = async () => {
    try {
      const response = await fetch(
        "/api/admin/faqs"
      );
      const data =
        await response.json();
      if (response.ok) {
        setFaqs(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };


  const handleOpenAdd = () => {
    setEditId(null);
    setFormData({
      question: "",
      answer: "",
    });
    setOpenModal(true);
  };

  const handleSubmit = async () => {
    try {

      setLoading(true);

      const url = editId
        ? `/api/admin/faqs/${editId}`
        : "/api/admin/faqs";

      const method = editId
        ? "PUT"
        : "POST";

      const response = await fetch(
        url,
        {
          method,

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

      await fetchFaqs();
      setFormData({
        question: "",
        answer: "",
      });

      setEditId(null);
      setOpenModal(false);
      showAlert({
        icon: "success",
        title: "Success",
        text: editId
          ? "FAQ updated successfully"
          : "FAQ added successfully",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  const handleEdit = (faq) => {
    setEditId(faq._id);
    setFormData({
      question:
        faq.question,
      answer:
        faq.answer,
    });
    setOpenModal(true);
  };


  const handleDelete = async () => {
    try {
      await fetch(
        `/api/admin/faqs/${selectedFaq._id}`,
        {
          method: "DELETE",
        }
      );
      await fetchFaqs();
      setDeleteModal(false);
      showAlert({
        icon: "success",
        title: "Deleted",
        text:
          "FAQ deleted successfully",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div>
          <h5 className="font-semibold">
            Manage FAQs
          </h5>
          <p className="opacity-70 text-sm">
            Create, edit and manage
            FAQs
          </p>
        </div>
        <Button
          onClick={handleOpenAdd}
          text="Add FAQ"
        />
      </div>

      <div className="overflow-hidden rounded-xl border border-[var(--rv-border)] bg-[var(--rv-card)]">
        <div className="overflow-x-auto whitespace-nowrap">
          <table className="w-full">
            <thead className="border-b border-[var(--rv-border)] bg-[var(--rv-primary-light)]">
              <tr>
                <th className="text-left p-4 font-medium">
                  Question
                </th>
                <th className="text-left p-4 font-medium">
                  Answer
                </th>
                <th className="text-right p-4 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {faqs.length > 0 ? (
                faqs.map((faq, i) => (
                  <tr
                    key={i}
                    className="border-t border-[var(--rv-border)]">
                    <td className="p-5 font-medium max-w-sm">
                      <div className="w-60">
                        {faq.question}
                      </div>
                    </td>
                    <td className="p-5 opacity-70">
                      <div
                      className="max-w-3xl break-words"
                        dangerouslySetInnerHTML={{
                          __html: faq.answer,
                        }}
                      />

                    </td>
                    <td className="p-5">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() =>
                            handleEdit(faq)
                          }
                          className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center"
                        >
                          <FiEdit2 />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedFaq(
                              faq
                            );
                            setDeleteModal(
                              true
                            );
                          }}
                          className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                          <FiTrash2 />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan={3}
                    className="p-10 text-center opacity-60"
                  >

                    No FAQs Found

                  </td>

                </tr>

              )}

            </tbody>

          </table>
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)] p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-semibold">
                  {editId
                    ? "Edit FAQ"
                    : "Add FAQ"}

                </h5>
                <p className="opacity-70 text-sm">
                  Manage FAQ information
                </p>
              </div>
              <button
                onClick={() =>
                  setOpenModal(false)
                }
                className="w-10 h-10 rounded-xl bg-[var(--rv-primary-light)] text-[var(--rv-red)] flex items-center justify-center"
              >
                <FiX />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {faqFields.map(
                (field, i) => {
                  if (
                    field.type ===
                    "input"
                  ) {

                    return (
                      <InputField
                        key={i}
                        label={
                          field.label
                        }
                        type={
                          field.inputType
                        }
                        name={
                          field.name
                        }
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
                  if (
                    field.type ===
                    "textarea"
                  ) {

                    return (
                      <TextEditor
                        key={i}
                        label={field.label}
                        value={
                          formData[field.name]
                        }
                        onChange={(value) =>
                          setFormData({
                            ...formData,
                            [field.name]: value,
                          })
                        }
                      />
                    );

                  }
                  return null;
                }
              )}
            </div>

            <div className="flex items-center justify-end gap-3">
              <Button
                onClick={() =>
                  setOpenModal(false)
                }
                text="Cancel"
                variant="outline"
              />
              <Button
                onClick={
                  handleSubmit
                }
                disabled={loading}
                loading={loading}
                text={
                  editId
                    ? "Update FAQ"
                    : "Add FAQ"
                }
              />
            </div>
          </div>
        </div>
      )}

      {deleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)] p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold">
                Delete FAQ?
              </h5>
              <p className="opacity-70">
                Are you sure you want
                to delete this FAQ?
              </p>
            </div>
            <div className="flex items-center justify-end gap-3">
              <Button
                onClick={() =>
                  setDeleteModal(false)
                }
                text="Cancel"
                variant="outline"
              />
              <Button
                onClick={
                  handleDelete
                }
                text="Yes Delete"
                className="bg-red-500 hover:bg-red-600 text-white"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}