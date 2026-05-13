"use client";

import { useEffect, useState } from "react";

import Button from "@/app/components/ui/Button";
import InputField from "@/app/components/ui/InputField";
import TextEditor from "@/app/components/ui/TextEditor";
import FileUpload from "@/app/components/ui/FileUpload";

import {
  FiEdit2,
  FiTrash2,
  FiX,
} from "react-icons/fi";

import { showAlert } from "@/utils/swalConfig";

const testimonialFields = [
  {
    label: "Name",
    name: "name",
    type: "input",
    inputType: "text",
    placeholder: "Enter client name",
  },

  {
    label: "Title",
    name: "title",
    type: "input",
    inputType: "text",
    placeholder: "Enter title",
  },

  {
    label: "Designation",
    name: "designation",
    type: "input",
    inputType: "text",
    placeholder:
      "Enter designation",
  },

  {
    label: "City",
    name: "city",
    type: "input",
    inputType: "text",
    placeholder: "Enter city",
  },

  {
    label: "Upload Image",
    name: "image",
    type: "file",
  },

  {
    label: "Description",
    name: "description",
    type: "textarea",
  },
];

export default function Page() {

  const [testimonials, setTestimonials] =
    useState([]);

  const [openModal, setOpenModal] =
    useState(false);

  const [deleteModal, setDeleteModal] =
    useState(false);

  const [editId, setEditId] =
    useState(null);

  const [
    selectedTestimonial,
    setSelectedTestimonial,
  ] = useState(null);

  const [formData, setFormData] =
    useState({
      name: "",
      title: "",
      designation: "",
      city: "",
      description: "",
      image: null,
    });

  const fetchTestimonials =
    async () => {
      try {

        const response =
          await fetch(
            "/api/admin/testimonials"
          );

        const data =
          await response.json();

        if (response.ok) {
          setTestimonials(data.data);
        }

      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchTestimonials();
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
      name: "",
      title: "",
      designation: "",
      city: "",
      description: "",
      image: null,
    });

    setOpenModal(true);

  };

  const handleAddTestimonial =
    async () => {

      try {

        const url = editId
          ? `/api/admin/testimonials/${editId}`
          : "/api/admin/testimonials";

        const method = editId
          ? "PUT"
          : "POST";

        const testimonialData =
          new FormData();

        testimonialData.append(
          "name",
          formData.name
        );

        testimonialData.append(
          "title",
          formData.title
        );

        testimonialData.append(
          "designation",
          formData.designation
        );

        testimonialData.append(
          "city",
          formData.city
        );

        testimonialData.append(
          "description",
          formData.description
        );

        if (formData.image) {

          testimonialData.append(
            "image",
            formData.image
          );

        }

        const response =
          await fetch(url, {
            method,
            body: testimonialData,
          });

        const data =
          await response.json();

        if (!response.ok) {

          showAlert({
            icon: "error",
            title: "Failed",
            text:
              data.message,
          });

          return;
        }

        await fetchTestimonials();

        setFormData({
          name: "",
          title: "",
          designation: "",
          city: "",
          description: "",
          image: null,
        });

        setEditId(null);

        setOpenModal(false);

        showAlert({
          icon: "success",
          title: "Success",
          text: editId
            ? "Testimonial updated successfully"
            : "Testimonial added successfully",
        });

      } catch (error) {

        console.log(error);

      }
    };

  const handleEdit = (
    testimonial
  ) => {

    setEditId(testimonial._id);

    setFormData({
      name: testimonial.name,
      title: testimonial.title,
      designation:
        testimonial.designation,
      city: testimonial.city,
      description:
        testimonial.description,
      image: null,
    });

    setOpenModal(true);

  };

  const handleDelete =
    async () => {

      try {

        const response =
          await fetch(
            `/api/admin/testimonials/${selectedTestimonial._id}`,
            {
              method: "DELETE",
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
              "Delete failed",
          });

          return;
        }

        await fetchTestimonials();

        setDeleteModal(false);

        showAlert({
          icon: "success",
          title: "Deleted",
          text:
            "Testimonial deleted successfully",
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
            Manage Testimonials
          </h5>

          <p className="opacity-70 text-sm">
            Create, edit and manage
            testimonials
          </p>
        </div>

        <Button
          onClick={handleOpenAdd}
          text="Add Testimonial"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)]">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead className="border-b border-[var(--rv-border)] bg-[var(--rv-primary-light)]">

              <tr>

                <th className="text-left p-5 font-medium">
                  Image
                </th>

                <th className="text-left p-5 font-medium">
                  Name
                </th>

                <th className="text-left p-5 font-medium">
                  Designation
                </th>

                <th className="text-left p-5 font-medium">
                  City
                </th>

                <th className="text-left p-5 font-medium">
                  Description
                </th>

                <th className="text-right p-5 font-medium">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {testimonials.length >
              0 ? (

                testimonials.map(
                  (
                    testimonial,
                    i
                  ) => (

                    <tr
                      key={i}
                      className="border-t border-[var(--rv-border)]"
                    >

                      <td className="p-5">

                        <div className="w-16 h-16">

                          <img
                            src={
                              testimonial.image
                            }
                            alt={
                              testimonial.name
                            }
                            className="w-full h-full rounded-full object-cover border"
                          />

                        </div>

                      </td>

                      <td className="p-5">

                        <div className="flex flex-col">

                          <span className="font-medium">
                            {
                              testimonial.name
                            }
                          </span>

                          <span className="text-sm opacity-60">
                            {
                              testimonial.title
                            }
                          </span>

                        </div>

                      </td>

                      <td className="p-5 opacity-70">
                        {
                          testimonial.designation
                        }
                      </td>

                      <td className="p-5">

                        <span className="px-3 py-1 rounded-full bg-[var(--rv-primary-light)] text-[var(--rv-primary)] text-sm">
                          {
                            testimonial.city
                          }
                        </span>

                      </td>

                      <td className="p-5 opacity-70">

                        <div
                          className="w-80 line-clamp-2 break-words whitespace-normal [&_*]:m-0"
                          dangerouslySetInnerHTML={{
                            __html:
                              testimonial.description
                                ?.replace(
                                  /&nbsp;/g,
                                  " "
                                ),
                          }}
                        />

                      </td>

                      <td className="p-5">

                        <div className="flex items-center justify-end gap-3">

                          <button
                            onClick={() =>
                              handleEdit(
                                testimonial
                              )
                            }
                            className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center"
                          >
                            <FiEdit2 />
                          </button>

                          <button
                            onClick={() => {

                              setSelectedTestimonial(
                                testimonial
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
                  )
                )

              ) : (

                <tr>

                  <td
                    colSpan={6}
                    className="p-10 text-center opacity-60"
                  >
                    No testimonials found
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

                <h3 className="text-2xl font-semibold">

                  {editId
                    ? "Edit Testimonial"
                    : "Add Testimonial"}

                </h3>

                <p className="opacity-70 text-sm">
                  Manage testimonial information
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

              {testimonialFields.map(
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
                          formData.description
                        }
                        onChange={(value) =>
                          setFormData({
                            ...formData,
                            description:
                              value,
                          })
                        }
                      />
                    );

                  }

                  if (
                    field.type ===
                    "file"
                  ) {

                    return (
                      <FileUpload
                        key={i}
                        label={
                          field.label
                        }
                        name={
                          field.name
                        }
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            image:
                              e.target
                                .files[0],
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
                  handleAddTestimonial
                }
                text={
                  editId
                    ? "Update Testimonial"
                    : "Add Testimonial"
                }
              />

            </div>

          </div>

        </div>
      )}

      {deleteModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

          <div className="w-full max-w-md rounded-xl border border-[var(--rv-border)] bg-[var(--rv-card)] p-6 flex flex-col gap-5">

            <div className="flex flex-col gap-2">

              <h3 className="text-2xl font-semibold">
                Delete Testimonial?
              </h3>

              <p className="opacity-70">
                Are you sure you want
                to delete this testimonial?
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