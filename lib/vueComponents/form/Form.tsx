import React from "react";

export interface FormProps {
  name: string;
  email: string;
  password: string;
  vue?: boolean;
}

/**
 *
 * @returns Vue Form
 */
export function Form(props: FormProps) {
  console.log(props);

  return (
    <>
      <h1>Vue Form</h1>
    </>
  );
}
