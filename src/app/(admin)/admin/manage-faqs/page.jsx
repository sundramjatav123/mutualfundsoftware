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

  // FETCH FAQS
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

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  // OPEN ADD MODAL
  const handleOpenAdd = () => {

    setEditId(null);

    setFormData({
      question: "",
      answer: "",
    });

    setOpenModal(true);

  };

  // ADD / UPDATE FAQ
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

        alert(data.message);

        return;

      }

      await fetchFaqs();

      setFormData({
        question: "",
        answer: "",
      });

      setEditId(null);

      setOpenModal(false);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  // EDIT FAQ
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

  // DELETE FAQ
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

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <section className="flex flex-col gap-6">

      {/* HEADER */}
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

      {/* TABLE */}
      <div className="overflow-hidden rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)]">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px]">

            <thead className="border-b border-[var(--rv-border)] bg-[var(--rv-primary-light)]">

              <tr>

                <th className="text-left p-5 font-medium">
                  Question
                </th>

                <th className="text-left p-5 font-medium">
                  Answer
                </th>

                <th className="text-right p-5 font-medium">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {faqs.length > 0 ? (

                faqs.map((faq, i) => (

                  <tr
                    key={i}
                    className="border-t border-[var(--rv-border)]"
                  >

                    <td className="p-5 font-medium max-w-sm">
                      {faq.question}
                    </td>

                    <td className="p-5 opacity-70 max-w-lg">
                      {faq.answer}
                    </td>

                    <td className="p-5">

                      <div className="flex items-center justify-end gap-3">

                        {/* EDIT */}
                        <button
                          onClick={() =>
                            handleEdit(faq)
                          }
                          className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center"
                        >

                          <FiEdit2 />

                        </button>

                        {/* DELETE */}
                        <button
                          onClick={() => {

                            setSelectedFaq(
                              faq
                            );

                            setDeleteModal(
                              true
                            );

                          }}
                          className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center"
                        >

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

      {/* ADD / EDIT MODAL */}
      {openModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

          <div className="w-full max-w-2xl rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)] p-6 flex flex-col gap-5">

            {/* HEADER */}
            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-semibold">

                  {editId
                    ? "Edit FAQ"
                    : "Add FAQ"}

                </h3>

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

            {/* FORM */}
            <div className="grid grid-cols-1 gap-5">

              {faqFields.map(
                (field, i) => {

                  // INPUT
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

                  // TEXTAREA
                  if (
                    field.type ===
                    "textarea"
                  ) {

                    return (
                      <TextareaField
                        key={i}
                        label={
                          field.label
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

                  return null;

                }
              )}

            </div>

            {/* ACTIONS */}
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

      {/* DELETE MODAL */}
      {deleteModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

          <div className="w-full max-w-md rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)] p-6 flex flex-col gap-5">

            <div className="flex flex-col gap-2">

              <h3 className="text-2xl font-semibold">
                Delete FAQ?
              </h3>

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