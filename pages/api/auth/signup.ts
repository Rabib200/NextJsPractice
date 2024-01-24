import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, password, phone, city } = req.body;
  const errors: string[] = [];
  if (req.method === "POST") {
    const validatorSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "First name is invalid",
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "last name is invalid",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "email is invalid",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "password is invalid",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "phone is invalid",
      },
      // {
      //   valid: validator.isCity(city),
      //   errorMessage: "city is invalid",
      // },
    ];

    validatorSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });
    if (errors.length) {
      return res.status(400).json({ Hello: "Post...." });
    }
  }
  return res.status(200).json({ Hello: "Get..." });
}
