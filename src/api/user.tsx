import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10,
  headers: {
    "Content-Type": "application/json",
  },
});

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export async function getAllUsersData(): Promise<User[]> {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    throw (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "Unknown error"
    );
  }
}

export async function getUser(id: string): Promise<User> {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    if (axiosError.status === 404) {
      throw axiosError.status;
    }
    throw (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "Unknown error"
    );
  }
}
