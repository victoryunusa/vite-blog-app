export const validateValues = (values) => {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  //const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.title === "") {
    errors.title = "Title is required";
  }

  if (values.content === "") {
    errors.content = "Content is required";
  }

  if (values.name === "") {
    errors.name = "Author name is required";
  }

  if (values.email === "") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Enter a valid email";
  }

  return errors;
};
