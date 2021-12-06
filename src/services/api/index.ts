import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

api.interceptors.request.use((configs) => {
  const _configs = configs || {};

  return {
    ..._configs,
    params: {
      ...(_configs.params || {}),
      appid: process.env.REACT_APP_API_KEY,
      lang: "pt_br",
      units: "metric",
    },
  };
});

api.interceptors.response.use((response) => ({
  ...response.data,
}));

export default api;
