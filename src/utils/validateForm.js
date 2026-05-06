// utils/validateForm.js

export const validateForm = (data) => {
  const errors = {};

  if (!data.name?.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email?.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.password?.trim()) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!data.mobile?.trim()) {
    errors.mobile = "Mobile number is required";
  } else if (!/^[6-9]\d{9}$/.test(data.mobile)) {
    errors.mobile = "Enter valid 10-digit mobile number";
  }

  if (!data.service?.trim()) {
    errors.service = "Please select a service";
  }

  if (!data.message?.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
  return errors;
};