// import { validateProps } from "../../common/types";

// export default function validate(values: validateProps) {
//   let errors = {} as validateProps;

//   if (!values.name) {
//     errors.name = "Name is required";
//   }
//   if (!values.email) {
//     errors.email = "Email address is required";
//   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//     errors.email = "Email address is invalid";
//   }
//   if (!values.message) {
//     errors.message = "Message is required";
//   }
//   return errors;
// }

import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.company) {
    errors.company = "Company name is required";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(values.phone)) {
    errors.phone = "Phone number must be 10 digits";
  }

  if (!values.message) {
    errors.message = "Message is required";
  }

  return errors;
}
