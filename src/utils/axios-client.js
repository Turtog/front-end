import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Interceptor para requisições - adiciona token Bearer
axiosClient.interceptors.request.use((config) => {
  config.headers.Accept = "application/json";
  config.headers["Content-Type"] = "application/json";

  // Adiciona o token Bearer se existir
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Interceptor para respostas - trata erros de autenticação
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token inválido ou expirado, remove da storage
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("CURRENT_USER");

      // Redireciona para login se não estiver já na página de login
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
