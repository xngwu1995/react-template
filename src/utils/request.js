import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { handleUnauthorized } from './navigationService';

const domain = 'http://0.0.0.0:8000/';

export const axiosInstance = axios.create({
  baseURL: domain,
  timeout: 5000000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const refreshAccessToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refresh');
    const response = await axios.post(`${domain}/api/token/refresh/`, {
      refresh: refreshToken,
    });

    const { access } = response.data;
    await AsyncStorage.setItem('access', access); // Save the new access token
    return access;
  } catch (error) {
    Alert.alert('Error', 'Please login again');
    return null;
  }
};

axiosInstance.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('access');

  if (!config.url.endsWith('/api/accounts/login/') && !config.url.endsWith('/api/accounts/signup/')) {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    // Check if the status is 204 and return the response object itself or response.data for other cases
    return response.status === 204 ? response : response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the response is 401 and not a retry
    if (error.response && error.response.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true; // Mark this request as retried
      const newAccessToken = await refreshAccessToken();

      if (newAccessToken) {
        // Update the header with the new token and retry the request
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } else {
        handleUnauthorized(); // Handle case where token refresh also fails
        return Promise.reject(error);
      }
    }

    // Handle other errors
    Alert.alert('Error', `Error: ${error.message}`);
    return Promise.reject(error);
  },
);

export const get = (url) => axiosInstance.get(url);

export const post = (url, params) => axiosInstance.post(url, params);

export const put = (url, params) => axiosInstance.put(url, params);

export const del = (url, params) => axiosInstance.delete(url, params);
