import React, { useState } from "react";
import Validation from "../forms/validation-product";
import Alert from "../alerts";

const StudentParentData = ({ message = null }) => {
  const [data, onSubmit] = useState(null);

  let items = [
    {
      label: "Nome da Mãe",
      error: { required: "Porfavor introduza o nome da mãe" },
      name: "mothername",
      type: "text",
      placeholder: "Introduza o nome da mãe",
    },
    {
      label: "Contacto da Mãe",
      error: { required: "Por favor Introduza o Contacto da Mãe " },
      name: "mothercontact",
      type: "text",
      placeholder: "Introduza o Contacto da Mãe",
    },
    {
      label: "Email da Mãe",
      name: "motheremail",
      type: "email",
      placeholder: "Introduza o Email da Mãe",
    },
    {
      label: "Nome do Pai",
      error: { required: "Porfavor introduza o nome da Pai" },
      name: "fathername",
      type: "text",
      placeholder: "Introduza o nome da Pai",
    },
    {
      label: "Contacto da Pai",
      error: { required: "Por favor Introduza o Contacto da Mãe " },
      name: "fathercontact",
      type: "text",
      placeholder: "Introduza o Contacto da Mãe",
    },
    {
      label: "Email da Pai",
      name: "fatheremail",
      type: "email",
      placeholder: "Introduza o Email da Pai",
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

export default StudentParentData;
