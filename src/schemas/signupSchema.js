import * as Yup from 'yup'

export const signupSchema = Yup.object({
  username: Yup.string()
  .matches(/^[a-zA-Z]{5,12}$/, "Invalid username")
  .required("Username is required"),

  nickname: Yup.string()
  .min(3, ({path, value}) => `${path} is required more than 3 characters now has ${value.length}`)
  .max(10, ({path, value}) => `${path} is required less than 10 characters now has ${value.length}`)
  .required("Nickname is required"),

  password: Yup.string()
  // .min(6, ({path, value}) => `${path} is required 6 characters now has ${value.length}`)
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/, "Invalid password")
  .required("Please type your password"),

  confirmPassword: Yup.string()
  .oneOf([Yup.ref("password")], "Password does not match")
  .required("Please confirm your password"),

  age: Yup.number()
  .transform((value, originalValue) => originalValue === "" ? undefined : value)
  .typeError("Number only").min(13).required("Age is required"),

  phoneNumber: Yup.string().matches(/^\d{10}$/, "Need at least 10 numbers"),

  terms: Yup.boolean().oneOf([true], "Please accepted our terms")
})