import * as Yup from "yup";

export const Schema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  street: Yup.string().required("Required"),
  id: Yup.string(),
});
