export interface TableData {
  items: any[];
}

export const fetchTableData = async (endpoint: string): Promise<TableData> => {
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data;
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
