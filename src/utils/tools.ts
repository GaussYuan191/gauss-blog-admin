/** 判断是否已经登录 */
export const isLogin = (): boolean => {
  const localToken = getToken();
  console.log("本地读取的token", localToken);
  return false;
};

/** 获取本地token */
export const getToken = (): string => {
  let tokenInfo = JSON.parse(window.localStorage.getItem("token") || "");
  return tokenInfo?.token || "";
};
/** 设置本地token */
export const setToken = (tokenInfo: object): void => {
  window.localStorage.setItem("token", JSON.stringify(tokenInfo));
};
