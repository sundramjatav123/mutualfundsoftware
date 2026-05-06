"use client";

import { useState } from "react";
import { useEffect } from "react";
import Button from "@/app/components/ui/Button";
import InputField from "@/app/components/ui/InputField";
import TextareaField from "@/app/components/ui/TextareaField";

import {
  FiEdit2,
  FiTrash2,
  FiX,
} from "react-icons/fi";


const blogFields = [
  {
    label: "Blog Title",
    name: "title",
    type: "input",
    inputType: "text",
    placeholder: "Enter blog title",
  },

  {
    label: "Category",
    name: "category",
    type: "input",
    inputType: "text",
    placeholder: "Enter category",
  },

  {
    label: "Description",
    name: "description",
    type: "textarea",
    placeholder: "Enter blog description",
  },
];

export default function Page() {

  const [blogs, setBlogs] = useState([]);

  const [openModal, setOpenModal] =
    useState(false);

  const [deleteModal, setDeleteModal] =
    useState(false);

  const [editId, setEditId] =
    useState(null);

  const [selectedBlog, setSelectedBlog] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: "",
      category: "",
      description: "",
    });


  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "/api/admin/blogs"
      );
      const data =
        await response.json();
      if (response.ok) {
        setBlogs(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogs();
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
      title: "",
      category: "",
      description: "",
    });

    setOpenModal(true);

  };

  const handleAddBlog = async () => {

    try {

      const url = editId
        ? `/api/admin/blogs/${editId}`
        : "/api/admin/blogs";

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

      await fetchBlogs();
      setFormData({
        title: "",
        category: "",
        description: "",
      });

      setEditId(null);
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (blog) => {

    setEditId(blog._id);

    setFormData({
      title: blog.title,
      category: blog.category,
      description:
        blog.description,
    });

    setOpenModal(true);

  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `/api/admin/blogs/${selectedBlog._id}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }
      await fetchBlogs();
      setDeleteModal(false);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div>
          <h5 className="font-semibold">
            Manage Blogs
          </h5>
          <p className="opacity-70 text-sm">
            Create, edit and manage
            all blogs
          </p>
        </div>
        <Button
          onClick={handleOpenAdd}
          text="Add Blog"
        />

      </div>

      <div className="overflow-hidden rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="border-b border-[var(--rv-border)] bg-[var(--rv-primary-light)]">
              <tr>
                <th className="text-left p-5 font-medium">
                  Title
                </th>
                <th className="text-left p-5 font-medium">
                  Category
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

              {blogs.length > 0 ? (
                blogs.map((blog, i) => (
                  <tr
                    key={i}
                    className="border-t border-[var(--rv-border)]"
                  >
                    <td className="p-5 font-medium">
                      {blog.title}
                    </td>
                    <td className="p-5">
                      <span className="px-3 py-1 rounded-full bg-[var(--rv-primary-light)] text-[var(--rv-primary)] text-sm">
                        {blog.category}
                      </span>
                    </td>
                    <td className="p-5 opacity-70 line-clamp-2">
                      {blog.description}
                    </td>
                    <td className="p-5">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() =>
                            handleEdit(blog)
                          }
                          className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center"
                        >
                          <FiEdit2 />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedBlog(
                              blog
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
                    colSpan={4}
                    className="p-10 text-center opacity-60"
                  >
                    No blogs found
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
                    ? "Edit Blog"
                    : "Add Blog"}
                </h3>
                <p className="opacity-70 text-sm">
                  Manage blog information
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
              {blogFields.map(
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
                  handleAddBlog
                }
                text={
                  editId
                    ? "Update Blog"
                    : "Add Blog"
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
                Delete Blog?
              </h3>
              <p className="opacity-70">
                Are you sure you want
                to delete this blog?
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