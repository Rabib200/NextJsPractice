import React from "react";

interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    city: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignup: boolean;
}

export default function AuthModalInputs({
  inputs,
  isSignup,
  handleChangeInput,
}: Props) {
  return (
    <>
      {isSignup ? null : (
        <div className="my-2 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleChangeInput}
          />
        </div>
      )}
      {isSignup ? null : (
        <div>
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Phone"
            value={inputs.phone}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="City"
            value={inputs.city}
            onChange={handleChangeInput}
          />
        </div>
      )}
      <div className="my-2 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInput}
        />
      </div>
    </>
  );
}
