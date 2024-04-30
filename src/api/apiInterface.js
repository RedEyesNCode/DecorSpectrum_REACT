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

export const registerUser = async (registerUserData) => {
  try {
    const response = await apiService("user/signupUser", "POST",registerUserData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (loginUserData) => {
  try {
    const response = await apiService("user/loginUser", "POST",loginUserData);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getCart = async (getCartData) => {
  try {
    const response = await apiService("cart/user", "POST",getCartData);
    return response;
  } catch (error) {
    throw error;
  }
};
export const addToCart = async (addToCartData) => {
  try {
    const response = await apiService("cart/add-to-cart", "POST",addToCartData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateCartItem = async (updateCartItemData) => {
  try {
    const response = await apiService("cart/update-cart-item", "POST",updateCartItemData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteCartItem = async (deleteCartItemData) => {
  try {
    const response = await apiService("cart/delete-cart-item", "POST",deleteCartItemData);
    return response;
  } catch (error) {
    throw error;
  }
};