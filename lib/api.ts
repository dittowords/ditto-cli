import axios from "axios";
import https from "https";

import config from "./config";
import consts from "./consts";

export const create = (token?: string) => {
  return axios.create({
    baseURL: consts.API_HOST,
    headers: {
      Authorization: `token ${token}`,
    },
    httpsAgent: new https.Agent({
      requestCert: true,
      rejectUnauthorized: false,
    }),
  });
};

export default create(config.getToken(consts.CONFIG_FILE, consts.API_HOST));
