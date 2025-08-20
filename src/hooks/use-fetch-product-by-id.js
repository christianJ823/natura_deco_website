import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getHeaders } from "../config/commercetoolsClient";
import { CT_BASE_URL } from "../constants";
import { allProducts } from "../mocks/products";

export const useFetchProductById = ({ productId, isUsingLocalData = true }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProduct = useCallback(async () => {
    if (!productId) return;

    setLoading(true);
    try {
      if (isUsingLocalData) {
        const foundProduct = allProducts.results.find(
          (p) => p.id === productId
        );
        setProduct(foundProduct || null);
        return;
      }

      const headers = await getHeaders();
      const response = await axios.get(`${CT_BASE_URL}/products/${productId}`, {
        headers,
      });
      setProduct(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [productId, isUsingLocalData]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return { product, loading, error };
};
