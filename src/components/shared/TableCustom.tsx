import React, { useEffect, useState } from "react";
import {
  fetchTableData,
  applyFilters,
  paginateData,
  TableData,
} from "../../services/tableService";

interface Column {
  header: string;
  body: string;
}

interface TableCustomProps {
  columns: Column[];
  renderCell: (item: any, column: string | number | symbol) => React.ReactNode;
  fetchEndpoint: string;
  numberRolls: number;
}

const TableCustom: React.FC<TableCustomProps> = ({
  columns,
  renderCell,
  fetchEndpoint,
  numberRolls,
}) => {
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    fetchTableData(fetchEndpoint)
      .then((result: TableData) => {
        setData(result.items);
      })
      .catch((error) => console.error("Erro ao buscar os dados:", error));
  }, [fetchEndpoint]);

  const filteredData = applyFilters(data, filters);
  const { paginatedData, totalPages } = paginateData(
    filteredData,
    currentPage,
    numberRolls,
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  console.log(paginatedData)

  return (
    <div className="p-4 bg-[#EDF1F5] w-[100%] rounded-lg">
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white divide-y divide-gray-100">
          <thead className="bg-slate-200">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-left text-sm font-normal text-gray-900"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-slate-50 divide-y divide-gray-100">
            {paginatedData.map((item: any, rowIndex: number) => (
              <tr key={rowIndex} className="hover:bg-slate-100">
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-3 whitespace-nowrap text-sm text-gray-700"
                  >
                    {renderCell(item, col.body)}
                  </td>
                ))}
              </tr>
            ))}
            {paginatedData.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-4 py-4 text-center text-sm text-gray-500"
                >
                  Nenhum registro encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-center space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-50 disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="text-sm text-gray-600">
          Página <span className="font-medium">{currentPage}</span> de{" "}
          <span className="font-medium">{totalPages}</span>
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-50 disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default TableCustom;
