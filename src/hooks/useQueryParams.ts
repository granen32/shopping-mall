import { useLocation, useNavigate } from "react-router-dom";

function useQueryParams() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const getQueryParam = (key: string, defaultValue: string = "") => {
    const value = searchParams.get(key);
    return value !== null ? value : defaultValue;
  };

  const setQueryParams = (params: Record<string, string | undefined>) => {
    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (value !== undefined && value !== null) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });
    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  return { searchParams, getQueryParam, setQueryParams };
}

export default useQueryParams;
