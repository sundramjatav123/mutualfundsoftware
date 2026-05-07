// utils/validateForm.js

export const validateForm = (data) => {

  const errors = {};

  // NAME
  if (!data.name?.trim()) {

    errors.name = "Name is required";

  }

  // EMAIL
  if (!data.email?.trim()) {

    errors.email = "Email is required";

  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {

    errors.email = "Invalid email format";

  }

  // MOBILE
  if (!data.mobile?.trim()) {

    errors.mobile = "Mobile number is required";

  } else if (!/^[6-9]\d{9}$/.test(data.mobile)) {

    errors.mobile =
      "Enter valid 10-digit mobile number";

  }

  // SERVICE
  if (!data.service?.trim()) {

    errors.service =
      "Please select a service";

  }

  // MESSAGE
  if (!data.message?.trim()) {

    errors.message = "Message is required";

  }

  return errors;

};