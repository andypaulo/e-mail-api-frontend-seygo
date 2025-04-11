import React, { useEffect, useState } from "react";
import {fetchTableData} from "../../services/tableService";

interface Column {
  header: string;
  body: string;
}

interface TableCustomProps {
  columns: Column[];
  renderCell: (item: any, column: string | number | symbol) => React.ReactNode;
  fetchEndpoint: string;
  initialItemsPerPage: number;
  filters?: { [key: string]: any };
}

const TableCustom: React.FC<TableCustomProps> = ({
  columns,
  renderCell,
  fetchEndpoint,
  initialItemsPerPage,
  filters = {}
}) => {
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(initialItemsPerPage);
  const [totalItems, setTotalItems] =  useState<number>(0);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
    const fetchData = async () => {
      try {
        console.log("Enviando filtros:", filters);
        console.log(`Fetching page ${currentPage} with ${itemsPerPage} items`);
        const result = await fetchTableData(fetchEndpoint, currentPage, itemsPerPage, filters);
        console.log(`Received ${result.data.length} items for page ${currentPage}`);
        console.log(`Total items: ${result.total}`);
        setData(result.data);
        setTotalItems(result.total);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      } 
    };
    useEffect(() => {
    fetchData();
  }, [fetchEndpoint, currentPage, itemsPerPage, JSON.stringify(filters)]);
  
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = Number(e.target.value);
    setItemsPerPage(newLimit);
    setCurrentPage(1); 
  };
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  return (
    <div className="p-4 bg-[#EDF1F5] w-[100%] rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Itens por página:</span>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border rounded p-1 text-sm"
          >
            {[10, 20, 50, 100].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
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
            {data.map((item: any, rowIndex: number) => (
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
            {data.length === 0 && (
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
