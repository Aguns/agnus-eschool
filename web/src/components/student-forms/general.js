import React, { useState } from "react";
import Validation from "../forms/validation-product";
import Alert from "../alerts";

const StudentGeneral = ({ message = null }) => {
  const [data, onSubmit] = useState(null);

  let items = [
    {
      label: "Nome",
      error: { required: "Please enter the Name" },
      name: "name",
      type: "text",
      placeholder: "Enter the Name",
    },
    {
      label: "Apelido",
      error: { required: "Por favor Introduza o Apelido " },
      name: "surname",
      type: "text",
      placeholder: "Introduza o Apelido",
    },
    {
      label: "Alcunha",
      name: "nickname",
      type: "text",
      placeholder: "Introduza o Alcunha",
    },
    {
      label: "Data de Nascimento",
      error: { required: "Por favor Introduza a  Data de Nascimento" },
      name: "birthdate",
      type: "date",
      placeholder: "Introduza a  Data de Nascimento...",
    },
    {
      label: "Naturalidade",
      error: { required: "Por favor Introduza a Naturalidade" },
      name: "country",
      type: "text",
      placeholder: "Introduza a Naturalidade...",
    },
    {
      label: "Lingua Falada",
      name: "language",
      type: "text",
      placeholder: "Introduza a NaturaLingua Faladalidade...",
    },
    {
      label: "Sexo",
      name: "gender",
      type: "radio",
      placeholder: "Introduza o Sexo...",
      options: [
        { value: "male", name: "male", label: "Masculino" },
        { value: "feminine", name: "feminine", label: "Feminino" },
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        {data && message && (
          <div className="w-full mb-4">
            <Alert
              color="bg-transparent border-green-500 text-green-500"
              borderLeft
              raised
            >
              {message}
            </Alert>
          </div>
        )}
        <Validation items={items} onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default StudentGeneral;
