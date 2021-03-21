import React, { useState } from "react";
import Validation from "../forms/validation-product";
import Alert from "../alerts";

const StudentSpecialCare = ({ message = null }) => {
  const [data, onSubmit] = useState(null);

  let items = [
    {
      label: "Cuidados Fisicos?",
      error: { required: "Porfavor Introduza se tem algum cuidado fisico" },
      name: "physicalcare",
      type: "radio",
      placeholder: "Tem Cuidados Fisicos??",
      options: [
        { value: "yes", name: "yes", label: "Sim" },
        { value: "no", name: "no", label: "Não" },
      ],
    },
    {
      label: "Se sim, Especifique",
      name: "physicalcare_details",
      type: "textarea",
      placeholder: "Detalhes da Cuidados Fisicos",
    },
    {
      label: "Cuidados Comportamentais",
      name: "behavioralcare",
      type: "radio",
      placeholder: "Tem Cuidados Comportamentais?",
      options: [
        { value: "yes", name: "yes", label: "Sim" },
        { value: "no", name: "no", label: "Não" },
      ],
    },
    {
      label: "Se sim, Especifique",
      name: "behavioralcare_details",
      type: "textarea",
      placeholder: "Detalhes da Cuidados Comportamentais",
    },
    {
      label: "Necessidades Educativas",
      name: "educationalneeds",
      type: "radio",
      placeholder: "Tem Necessidades Educativas?",
      options: [
        { value: "yes", name: "yes", label: "Sim" },
        { value: "no", name: "no", label: "Não" },
      ],
    },
    {
      label: "Se sim, Especifique",
      name: "educationalneeds_details",
      type: "textarea",
      placeholder: "Detalhes da Cuidados Comportamentais",
    },

    {
      label: "Observações",
      name: "comments",
      type: "textarea",
      placeholder: "Tem Observações?",
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

export default StudentSpecialCare;
