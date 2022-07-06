import { useLocation } from "react-router-dom";

/** 判断是否已经登录 或者token 超时 */
export const isLogin = (): boolean => {
  const localToken = getToken();
  if (localToken) {
    const lifeTime =
      JSON.parse(window.localStorage.getItem("token") || "").lifeTime * 1000;
    const nowTime = new Date().getTime();
    if (nowTime > lifeTime) return false;
    else return true;
  }
  return false;
};

/** 获取本地token */
export const getToken = (): string => {
  let tokenInfo = JSON.parse(window.localStorage.getItem("token") || "{}");
  return tokenInfo?.token || "";
};
/** 设置本地token */
export const setToken = (tokenInfo: object): void => {
  window.localStorage.setItem("token", JSON.stringify(tokenInfo));
};
/** 解析url参数 */
export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
