import { api } from '../api/api.ts';

export interface TableData<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages?: number;
}

export const fetchTableData = async <T> (
endpoint: string,
page: number = 1,
limit: number = 10,
filters?: { [key: string]: any}
): Promise<TableData<T>> => {
  try {
    console.log('Fetching table data with:', { page, limit, filters });
    const response = await api.get<TableData<T>>(endpoint, {
      params: {
        page,
        limit,
        ...filters
      }
    });
    console.log('Received data:', {
      dataLength: response.data.data.length,
      total: response.data.total,
      page,
      limit
    });

    const totalPages = Math.ceil(response.data.total / limit);
    return {
      ...response.data,
      totalPages
    }
  } catch (error: any) {
    console.error("Erro na requisição:", {
      endpoint,
      page,
      limit,
      error: error.message,
    });
    throw error;
  }
};

