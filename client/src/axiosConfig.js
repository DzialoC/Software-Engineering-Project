import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if error response status is 401 Unauthorized
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh the access token
        const response = await axiosInstance.post("/refresh-token");

        // Update the access token in the original request headers
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;

        // Retry the original request with the new access token
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error("Error refreshing access token:", err);
        // Handle token refresh failure (e.g., redirect to login page)
      }
    }

    // Return the original error if the status is not 401 or the request has already been retried
    return Promise.reject(error);
  }
);

export default axiosInstance;
