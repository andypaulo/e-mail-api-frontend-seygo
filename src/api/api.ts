import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
  try {
    const response = await api.get<T>(url);
    return response;
  } catch (error: any) {
    throw handleError(error);
  }
};

const handleError = (error: AxiosError): string => {
  if (error.response) {
    return `Erro ${error.response.status}: ${error.response.data}`;
  }
  if (error.request) {
    return "Erro: Sem resposta do servidor";
  }

  return `Erro: ${error.message}`;
};

export { get };
