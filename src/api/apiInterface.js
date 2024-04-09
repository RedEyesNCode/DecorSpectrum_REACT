// userApi.js
import apiService from "./apiService";

export const getAllBannersDashboard = async () => {
  try {
    const response = await apiService("product/getAllBanners", "GET",);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAllCategory = async () => {
  try {
    const response = await apiService("product/getAllCategory", "GET",);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAllSubcategories = async () => {
  try {
    const response = await apiService("product/getAllSubCategory", "GET",);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getProductsForCategory = async (addCategoryData) => {
  try {
    const response = await apiService("product/getProductsByCategory", "POST",addCategoryData);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getProductsBySubCategory = async (subCategoryData) => {
  try {
    const response = await apiService("product/getProductsBySubCategory", "POST",subCategoryData);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getPopularProducts = async () => {
  try {
    const response = await apiService("product/getPopularProducts", "GET",);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAllProductDetails = async () => {
  try {
    const response = await apiService("product/getAllProductsDetails", "GET",);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProductFullDetails = async (productDetailMap) => {
  try {
    const response = await apiService("product/getProductDetail", "POST",productDetailMap);
    return response;
  } catch (error) {
    throw error;
  }
};