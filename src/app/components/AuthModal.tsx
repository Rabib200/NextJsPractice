"use client";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import AuthModalInputs from "./AuthModalInputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal(SignIn: { isSingnIn: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    city: "",
  });
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const renderContent = (signinContent: string, signupContent: string) => {
    return SignIn.isSingnIn ? signinContent : signupContent;
  };

  return (
    <div>
      {/* <button className="border p-1 px-4 rounded">Sign up</button> */}
      <button
        className={`${renderContent(
          "bg-blue-400 text-white",
          "text-black"
        )} border p-1 px-4 rounded mr-3`}
        onClick={handleOpen}
      >
        {renderContent("Sign In", "Sign Up")}
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="uppercase front-bold text-center pb-2 border-b mb-2">
            <p className="text-sm text-black">
              {renderContent("Sign In", "Create Account")}
            </p>
            <AuthModalInputs
              inputs={inputs}
              isSignup={SignIn.isSingnIn}
              handleChangeInput={handleChangeInput}
            />
            <button className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400">
              {renderContent("Sign In", "Create Account")}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
