import React from "react";
import StudentGeneral from "../../components/student-forms/general";
import StudentParentData from "../../components/student-forms/parentData";
import StudentMedicalData from "../../components/student-forms/medicalData";
import StudentSpecialCare from "../../components/student-forms/specialCare";
import SectionTitle from "../../components/section-title";
import Widget from "../../components/widget";
export default function ProductCreate() {
  return (
    <>
      <SectionTitle title="Alunos" subtitle="Criação de Novo Aluno" />

      <Widget title="Aluno" description={<span>Dados Gerais</span>}>
        <div className="w-full flex">
          <div className="w-full lg:w-1/2">
            <StudentGeneral />
          </div>
        </div>
      </Widget>

      <Widget title="Aluno" description={<span>Dados dos Pais</span>}>
        <div className="w-full flex">
          <div className="w-full lg:w-1/2">
            <StudentParentData />
          </div>
        </div>
      </Widget>

      <Widget title="Aluno" description={<span>Detalhes Medicos</span>}>
        <div className="w-full flex">
          <div className="w-full lg:w-1/2">
            <StudentMedicalData />
          </div>
        </div>
      </Widget>

      <Widget title="Aluno" description={<span>Cuidados Especiais</span>}>
        <div className="w-full flex">
          <div className="w-full lg:w-1/2">
            <StudentSpecialCare />
          </div>
        </div>
      </Widget>

      {/* <div>
        <h2>Irmao na Escola</h2>
        <label for="fname">Crianca 1:</label>
        <input type="text" id="fname" name="fname" />

        <label for="lname">Data de Nascimento da Crianca 1:</label>
        <input type="text" id="lname" name="lname" />

        <label for="lname">Ano Escolar da Criança 1:</label>
        <input type="text" id="lname" name="lname" />

        <label for="fname">Crianca 2:</label>
        <input type="text" id="fname" name="fname" />

        <label for="lname">Data de Nascimento da Crianca 2:</label>
        <input type="text" id="lname" name="lname" />

        <label for="lname">Ano Escolar da Criança 2:</label>
        <input type="text" id="lname" name="lname" />

        <label for="fname">Crianca 3:</label>
        <input type="text" id="fname" name="fname" />

        <label for="lname">Data de Nascimento da Crianca 3:</label>
        <input type="text" id="lname" name="lname" />

        <label for="lname">Ano Escolar da Crianca 3:</label>
        <input type="text" id="lname" name="lname" />

        <label for="fname">Crianca 4:</label>
        <input type="text" id="fname" name="fname" />

        <label for="lname">Data de Nascimento da Crianca 4:</label>
        <input type="text" id="lname" name="lname" />

        <label for="lname">Ano Escolar da Crianca 4:</label>
        <input type="text" id="lname" name="lname" />
      </div> */}
    </>
  );
}
