import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    authorization: `Bearer 225aee7d88e250db41ce25782ca11e184779e12f1d44ea4aade23301dac44d36c386b18993218853e74a1b7043c02b32d1b2ae543f4fe6e2aef04ddcaabfaff1972172b4ff2ccca307bf96f7852cf77c2ff1194f448f6053b2d8ab28e90d4e73888016f9e517f39dc1852d06ea83f14c8f775854bd4f41fec02de395aa0a9b56`,
  },
  timeout: 1000,
});

export const getProfile = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
