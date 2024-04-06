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
export const getPopularProducts = async () => {
  try {
    const response = await apiService("product/getPopularProducts", "GET",);
    return response;
  } catch (error) {
    throw error;
  }
};