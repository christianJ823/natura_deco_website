import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getHeaders } from "../config/commercetoolsClient";
import { CT_BASE_URL } from "../constants";
import { allProducts } from "../mocks/products";

export const useFetchProducts = ({ isUsingLocalData }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      if (isUsingLocalData) {
        setProducts(allProducts.results);
        return;
      }

      const headers = await getHeaders();
      const response = await axios.get(`${CT_BASE_URL}/products`, { headers });
      setProducts(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [isUsingLocalData]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error };
};
