import * as yup from "yup";

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$/;

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .matches(mailformat, { message: "Please enter a valid email address" })
    .required("Required"),
  password: yup
    .string()
    .min(6)
    .matches(passwordFormat, { message: "Please enter a valid password" })
    .required("Required"),
});
