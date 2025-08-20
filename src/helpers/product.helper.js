import { DEFAULT_LANGUAGE } from "../constants";

export const getMainImage = (product) =>
  product?.masterData.current.masterVariant.images[0]?.url;

export const getProductInfo = (product) => ({
  id: product?.id,
  name: product?.masterData.current.name[DEFAULT_LANGUAGE],
  description: product?.masterData.current.description?.[DEFAULT_LANGUAGE],
  price:
    product?.masterData.current.masterVariant.prices[0].value.centAmount / 100,
  sku: product?.masterData.current.masterVariant.sku,
  imageUrl: getMainImage(product),
  quantity: product?.quantity,
});
