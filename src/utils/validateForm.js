export const validateForm = (data) => {
  const errors = {};
  if (!data.name) {
    errors.name = "Name is required";
  }
  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Invalid email format";
  }
  if (!data.mobile) {
    errors.mobile = "Mobile number is required";
  } else if (!/^[6-9]\d{9}$/.test(data.mobile)) {
    errors.mobile = "Enter valid 10-digit mobile number";
  }
  return errors;
};