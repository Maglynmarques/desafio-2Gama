import React from "react";
import { Scope } from "@unform/core";
import { Form } from "@unform/web";
import Input from "./components/Input";
import "./styles.css";

export default function App() {
  function handleSubmit(data, { reset }) {
    console.log(data);

    reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <img
        src="https://storage.googleapis.com/golden-wind/unform/unform.svg"
        height="150"
        width="175"
        alt="Unform"
      />

      <Input name="name" label="Full name" />
      <Input name="email" label="E-mail" type="email" />

      <Scope path="address">
        <Input name="street" label="Street name" />
        <Input name="zipcode" label="ZIP code" />
      </Scope>

      <button type="submit">Save</button>
    </Form>
  );
}
