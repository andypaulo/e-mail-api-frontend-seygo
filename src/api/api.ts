import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { API_CONFIG } from '../config/auth.ts';

const api: AxiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_CONFIG.TOKEN}`
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
