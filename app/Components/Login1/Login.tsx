"use client"

import React, { useState, FormEvent } from "react";
import Input from "../Input";

interface InputConfig {
  type: string;
  name: string;
  placeholder: string;
}

interface LoginProps {
  inputs: InputConfig[];
  onLogin: (userData: {
    username: string;
    email: string;
    password: string;
  }) => void;
}

const Login1 = (props: LoginProps): JSX.Element => {
  const [isValid, setIsValid] = useState(false);

  const showData = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("data :: ", data);

    isValid
      ? props.onLogin({
          username: data.get("username") as string,
          email: data.get("email") as string,
          password: data.get("password") as string,
        })
      : console.log("Invalid Data");
  };

  const { inputs } = props;

  return (
    <>
      <form onSubmit={showData}>
        {inputs.map((input, index) => (
          <Input key={index} type={input.type} name={input.name} onValidate={(v: any) => setIsValid(v)} />
        ))}
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Login1;
