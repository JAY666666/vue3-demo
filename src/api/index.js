import $https from "@/utils/http";

// 登录
export function login(data) {
  return $https({
    url: "/login",
    method: "post",
    data
  });
}

// 获取用户信息
export function getUserInfo() {
  return $https({
    url: "/getUserInfo",
    method: "get",
  });
}

// 获取列表
export function getList() {
  return $https({
    url: "/getList",
    method: "get",
  });
}
