import { http } from "./http";

/** 登录 */
export const login = (params = {}) => http.post("user/login", { ...params });
