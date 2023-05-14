import * as yup from "yup";

export const stepperValidationSchema = yup.object({
  name: yup.string().required("Field is required"),
  url: yup.string().required("Field is required"),
  category: yup.string().required("Field is required"),
  goal: yup.string().required("Field is required"),
  numberOfWorkers: yup.number().required("Field is required"),
  launch: yup.string().required("Field is required"),
  email: yup.string().email("Enter valid email").required("Field is required"),
});
