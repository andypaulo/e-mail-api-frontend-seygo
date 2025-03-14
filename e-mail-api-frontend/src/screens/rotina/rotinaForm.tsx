import './App.css'
import {MagnifyingGlass, PlusCircle } from "@phosphor-icons/react";

function rotinaForm() {

  return (
    
  <div className="font-[Poppins]  p-4 bg-gray-100 min-h-screen">
  <h2 className="text-xl font-semibold mb-4">Minhas Rotinas</h2>

    <div className='flex items-end gap-6 border border-gray-300 p-6 w-full'>

    <div className="flex flex-col">
      <label className='text-gray-500 text-sm'>Nome Rotina</label>
      <input type="text" className='border border-gray-300 p-1 rounded-md'></input>
    </div>

    <div className="flex flex-col">
      <label className='text-gray-500 text-sm'>Nome Template</label>
      <input className='border border-gray-300 p-1 rounded-md'></input>
    </div>

    <div className="flex flex-col">
      <label className='text-gray-500 text-sm'>Tipo Template</label>
      <input className='border border-gray-300 p-1 rounded-md'></input>
    </div>

    <div className="flex flex-col">
      <label className='text-gray-500 text-sm'>Status</label>
      <select className='w-full border border-gray-300 p-1 rounded-md text-gray-500' > 
        <option  value="#" disabled hidden>Selecione</option>
        <option  value="Ativo">Ativo</option>
        <option  value="Inativo">Inativo</option>
      </select>
    </div>
      


 <button className="bg-orange-500 text-white px-4 py-2 rounded-sm flex items-center gap-2 cursor-pointer"><MagnifyingGlass size={20} weight="bold" /> Pesquisar</button>
    <button className="bg-cyan-500 text-white px-4 py-2 rounded-sm flex items-center gap-2 cursor-pointer"><PlusCircle size={20} weight="bold"/>Novo Template</button>
    </div>
  </div>
  )
}

export default rotinaForm
