import { api } from '../api/api.ts';

export interface TableData {
  data: any[];
  total: number;
  page: number;
  limit: number;
}

export const fetchTableData = async (
endpoint: string,
page: number = 1,
limit: number = 20
): Promise<{data: any[]; total: number}> => {
  try {
    const response = await api.get<TableData>(`${endpoint}?page=${page}&limit=${limit}`);
    return {
      data: response.data.data,
      total: response.data.total
    }
  } catch (error: any) {
    console.error("Erro ao buscar dados da tabela:", error);
    throw error;
  }
};

export const applyFilters = (data: any[], filters: { [key: string]: any }) => {
  try {
    return data.filter((item) =>
      Object.keys(filters).every((key) => {
        if (!filters[key]) return true;
        return String(item[key])
          .toLowerCase()
          .includes(String(filters[key]).toLowerCase());
      }),
    );
  } catch (err: any) {
    console.log(err);
  }
};

export const paginateData = (
  data: any[],
  currentPage: number,
  recordsPerPage: number,
) => {
  const totalPages = Math.ceil(data.length / recordsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage,
  );
  return { paginatedData, totalPages };
};
