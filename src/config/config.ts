
export const dev = {
  baseUrl: "http://localhost:8000",
};

const prod = {
  baseUrl: "http://myhost",
};


export const config=process.env.REACT_APP_STAGE === 'production'?prod:dev;

export default {
  MY_MAX_SIZE: 10,
  ...config,
};
