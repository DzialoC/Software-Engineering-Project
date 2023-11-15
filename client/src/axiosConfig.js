import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

// Response interceptor to refresh the token when it expires
axiosInstance.interceptors.response.use(
  (response) => {
    // Return the response as is if everything is OK
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the status code indicates that the token has expired
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // mark it so that we don't try to refresh the token again

      try {
        // Send a request to the refresh endpoint to get a new access token
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axiosInstance.post("/refresh", { refreshToken });

        // Store the new access token and the refresh token (if returned) in local storage
        const newAccessToken = response.data.accessToken; // Adjust this path as per your response structure
        localStorage.setItem("accessToken", newAccessToken);

        if (response.data.refreshToken) {
          // If your refresh endpoint returns a new refresh token, store it
          localStorage.setItem("refreshToken", response.data.refreshToken);
        }

        // Update the original request with the new token and retry
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Logout or take some other action if refreshing the token fails
        return Promise.reject(refreshError);
      }
    }

    // Return any other errors as is
    return Promise.reject(error);
  }
);

export default axiosInstance;
