import axios, { AxiosResponse, InternalAxiosRequestConfig  } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://api.startupmaate.com'; 

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  
  const token = await AsyncStorage.getItem('token');
  console.log('INTERCEPTOR', config, token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log('INTERCEPTOR POST IF', config, token)
  return config;
});

interface RegisterResponse {
  user: any;
  token: string;
}

interface LoginResponse {
  user: any;
  token: string;
}

interface UserData {
  name: string;
  email: string;
  id: number;
}

export const register = async (name: string, email: string, password: string): Promise<RegisterResponse> => {
  const response: AxiosResponse<RegisterResponse> = await api.post('/api/register', { name, email, password });
  console.log('RESPONSE REGISTER' ,response.data)
  await AsyncStorage.setItem('token', response.data.token);
  return response.data;
};

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response: AxiosResponse<LoginResponse> = await api.post('/api/login', { email, password });
  console.log('RESPONSE LOGIN' ,response.data)
  await AsyncStorage.setItem('token', response.data.token);
  return response.data;
};

export const logout = async (): Promise<void> => {
  await AsyncStorage.removeItem('token');
};

export const getUser = async (): Promise<UserData> => {
  const response: AxiosResponse<UserData> = await api.get('/api/user');
  console.log('RESPONSE GET USER' ,response.data)
  return response.data;
};

export const updateUser = async (data: Partial<UserData>): Promise<UserData> => {
  const response: AxiosResponse<UserData> = await api.put('/api/user/update', data);
  console.log('RESPONSE UPDATE USER' ,response.data)
  return response.data;
};

export const findMatch = async (): Promise<any> => {
  const response: AxiosResponse<any> = await api.get('/api/find-match');
  console.log('RESPONSE FIND MATCH' ,response.data)
  return response.data;
};