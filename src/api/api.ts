import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { API_CONFIG } from '../config/auth.ts';

const api: AxiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
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

export { api, get };
