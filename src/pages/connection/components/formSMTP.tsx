import React, { useState } from 'react';




const SMTPConnectionForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    connection_name: initialData.connection_name || '',
    host: initialData.host || '',
    port: initialData.port || 587,
    secure: initialData.secure || false,
    tls_enabled: initialData.tls_enabled || true,
    reject_unauthorized: initialData.reject_unauthorized || true,
    from_address: initialData.from_address || '',
    from_name: initialData.from_name || '',
    status: initialData.status || true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  {console.log(formData)}
  return (
    <form onSubmit={handleSubmit} >
            
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="connection_name">
          Nome da Conexão*
        </label>
        <input
          type="text"
          id="connection_name"
          name="connection_name"
          value={formData.connection_name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#D9D9D9] p-1.25 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="host">
            Host SMTP*
          </label>
          <input
            type="text"
            id="host"
            name="host"
            value={formData.host}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#D9D9D9] p-1.25 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
            required
            placeholder="smtp.exemplo.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="port">
            Porta*
          </label>
          <input
            type="number"
            id="port"
            name="port"
            value={formData.port}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#D9D9D9] p-1.25 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">
          Configurações de Segurança
          </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="secure"
              checked={formData.secure}
              onChange={handleChange}
              className="mr-2 h-4 w-4 appearance-none cursor-pointer border-2 border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
            />
            <span>Conexão Segura (SSL/TLS)</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="tls_enabled"
              checked={formData.tls_enabled}
              onChange={handleChange}
              className="mr-2 h-4 w-4 appearance-none cursor-pointer border-2 border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
            />
            <span>Habilitar TLS</span>
          </label>
          <label className="flex">
            <input
              type="checkbox"
              name="reject_unauthorized"
              checked={formData.reject_unauthorized}
              onChange={handleChange}
              className="mr-2 h-4 w-4 appearance-none cursor-pointer border-2 border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
            />
            <span>Rejeitar certificados não autorizados</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="from_address">
            Email Remetente*
          </label>
          <input
            type="email"
            id="from_address"
            name="from_address"
            value={formData.from_address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#D9D9D9] p-1.25 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="from_name">
            Nome Remetente
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#D9D9D9] p-1.25 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
          />
        </div>
      </div>

      <div className="mb-6 ">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="status"
            checked={formData.status}
            onChange={handleChange}
            className="mr-2 h-4 w-4 appearance-none cursor-pointer border-2 border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          />
          <span>Conexão Ativa</span>
        </label>
      </div>

    <div className='flex justify-end'>
      <button
        type="submit"
        className="w-50 bg-[#46B7BA] text-white py-2 px-4 rounded-md hover:bg-[#107E81] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#107E81] focus:ring-offset-2"
      >
        Salvar Configuração
      </button>
      </div>
    </form>
  );
};

export default SMTPConnectionForm;