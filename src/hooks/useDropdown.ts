import { useState, useEffect } from 'react';
import { IDropdownApiResponse, IDropdownResponse } from '../types/responseTypes';
import { get } from '../api/api';

const useDropdown = (url: string) => {
  const [data, setData] = useState<IDropdownResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get<IDropdownApiResponse>(url);
        setData(response.data.data);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useDropdown;

