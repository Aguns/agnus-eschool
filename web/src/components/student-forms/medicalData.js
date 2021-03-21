import React, { useState } from "react";
import Validation from "../forms/validation-product";
import Alert from "../alerts";

const StudentMedicalData = ({ message = null }) => {
  const [data, onSubmit] = useState(null);

  let items = [
    {
      label: "Tem alergias?",
      error: { required: "Porfavor Introduza se tem ou não alergias" },
      name: "allergies",
      type: "radio",
      placeholder: "Tem alergias?",
      options: [
        { value: "yes", name: "yes", label: "Sim" },
        { value: "no", name: "no", label: "Não" },
      ],
    },
    {
      label: "Se sim, Especifique",
      name: "allergies_details",
      type: "textarea",
      placeholder: "Detalhes da alergia",
    },
    {
      label: "Asma",
      name: "asthma",
      type: "radio",
      placeholder: "Tem asma?",
      options: [
        { value: "yes", name: "yes", label: "Sim" },
        { value: "no", name: "no", label: "Não" },
      ],
    },
    {
      label: "Observações",
      name: "comments",
      type: "textarea",
      placeholder: "Tem Objservações?",
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

export default StudentMedicalData;
