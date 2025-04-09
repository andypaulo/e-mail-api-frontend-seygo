import React, { useState } from "react";

interface SMTPFormData {
  connection_name: string;
  host: string;
  port: number;
  secure: boolean;
  tls_enabled: boolean;
  reject_unauthorized: boolean;
  from_address: string;
  from_name: string;
  status: boolean;
}

interface SMTPConnectionFormProps {
  onSubmit?: (data: SMTPFormData) => void;
  onCancel: () => void;
  initialData?: Partial<SMTPFormData>;
}

const SMTPConnectionForm: React.FC<SMTPConnectionFormProps> = ({
  onSubmit,
  onCancel,
  initialData = {},
}) => {
  const [formData, setFormData] = useState<SMTPFormData>({
    connection_name: initialData.connection_name || "",
    host: initialData.host || "",
    port: initialData.port || 587,
    secure: initialData.secure ?? false,
    tls_enabled: initialData.tls_enabled ?? false,
    reject_unauthorized: initialData.reject_unauthorized ?? false,
    from_address: initialData.from_address || "",
    from_name: initialData.from_name || "",
    status: initialData.status ?? false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  {
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
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
            placeholder="email@teste.com"
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
            placeholder="Fulano da Silva"
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

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="w-25 h-10c border rounded-md bg-white text-[#ED6F2A] hover:text-[#9E4616]  "
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-25 h-10 bg-[#46B7BA] text-white rounded-md hover:bg-[#107E81]"
        >
          Salvar
        </button>
      </div>
    </form>
  );
};

export default SMTPConnectionForm;
