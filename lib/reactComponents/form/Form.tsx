import React from "react";

export interface FormProps {
  name: string;
  email: string;
  password: string;
}

/**
 *
 * @returns React Form
 */
export function Form(props: FormProps) {
  console.log(props);

  return (
    <>
      <h1>React Form</h1>
    </>
  );
}
