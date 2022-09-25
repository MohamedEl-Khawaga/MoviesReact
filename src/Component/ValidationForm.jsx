// import React from "react";
// import { useState } from "react";
// import Joi from "joi";
// import user from "./Register";

// export default function ValidationForm() {
//   const [valid, setvalid] = useState({});
//   function validatForm() {
//     const schema = Joi.object({
//       first_name: Joi.string().alphanum().min(3).max(30).required(),
//       last_name: Joi.string().alphanum().min(3).max(30).required(),
//       age: Joi.number().min(18).max(80).required(),
//       email: Joi.string().email({
//         minDomainSegments: 2,
//         tlds: { allow: ["com", "net"] },
//       }),
//       password: Joi.string().pattern(new RegExp("^[A-Z][a-z]{3-20}$")),
//       repeat_password: Joi.ref("password"),
//     });
//     return schema.validate(user)
//   }

//   return (
//     <>
//       <div className="bg-danger rounded-1 p-1"></div>
//     </>
//   );
// }
