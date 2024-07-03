const formConfig = [
  {
    type: "text",
    name: "username",
    label: "Username",
    placeholder: "Enter your username",
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
  {
    type: "dropdown",
    name: "gender",
    label: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
  },
  {
    type: "radio",
    name: "subscription",
    label: "Subscription",
    options: [
      { value: "basic", label: "Basic" },
      { value: "premium", label: "Premium" },
    ],
  },
];

export default formConfig;
