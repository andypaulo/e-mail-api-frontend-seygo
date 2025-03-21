import { useState } from "react";

export default function FormRotina() {
  const [mode, setMode] = useState("")
  
  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 mt-[5px]">
        <input
          type="text"
          className="border border-[#D9D9D9] p-1.5 rounded-md focus:outline-none focus:ring-1 text-[15px] focus:ring-[#a8a3a3] w-full"
          placeholder="Texto/Nome Rotina"
        ></input>
        <select className="mt-1 p-1.5 border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] text-[15px] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]">
          Nomes e Tipo Template
          <option>HTML</option>
          <option>Text</option>
        </select>
      </div>
      <div className="mt-2 text-[12px]">
        <h3 className="font-semibold text-[18px]">Horários</h3>

        <div className="mt-3">
          <p className="inline font-semibold">Repetição: </p>
          <select className="border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]">
            <option>diariamente</option>
            <option>semanalmente</option>
            <option>mensalmente</option>
          </select>
        </div>

        <div className="mt-4">
          <p className="inline  font-semibold ">Repete em: </p>
          <input
            type="checkbox"
            value="Domingo"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">D </label>
          <input
            type="checkbox"
            value="Segunda"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">S </label>
          <input
            type="checkbox"
            value="Terca"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">T </label>
          <input
            type="checkbox"
            value="Quarta"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">Q </label>
          <input
            type="checkbox"
            value="Quinta"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">Q </label>
          <input
            type="checkbox"
            value="Sexta"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">S </label>
          <input
            type="checkbox"
            value="Sabado"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">S </label>
        </div>

        <div className="mt-4">
          <p className="font-semibold inline">Repete a cada: </p>
          <select className="border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]">
            <option>1</option>
          </select>
          <span>semanas</span>
        </div>
        <div className="mt-4">
          <p className="font-semibold inline">Começa em: </p>
          <input
            type="date"
            className="border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
          ></input>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Termina em: </p>
          <input
            type="checkbox"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>
          <label className="font-medium ">Nunca</label> <br />
          <input
            type="checkbox"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>
          <label className="font-medium">
            Depois de
            <select className="border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]">
              <option>1</option>
            </select>
            Ocorrências
          </label>
        </div>
      </div>
      <div>
        <div className="flex items-center mt-4">
          <p className="text-sm font-medium">Status</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-[#D9D9D9] rounded-full peer-checked:after:translate-x-5 peer-checked:bg-[#93ff85] after:absolute after:top-0.5 after:left-[2px] after:bg-[#ffffff] after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
      </div>
    </form>
  );
}
