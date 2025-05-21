import * as Yup from 'yup'

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Please input an email"),
  // password: Yup.string().min(6, "Password required at least 6 characters").required("Please input a password")
  password: Yup.string()
  .min(6, ({path, value}) => `${path} is required 6 characters now has ${value.length}`)
  .required("Please input a password"),
  day: Yup.number()
  .transform((value, originalValue) => originalValue === "" ? undefined : value)
  .typeError("Number only").min(1).max(31).required("Date is required"),
  age: Yup.number()
  .transform((value, originalValue) => originalValue === "" ? undefined : value)
  .typeError("Number only").min(10).required("Age is required")
})