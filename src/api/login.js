import service from "@/utils/request";

export function sendlogin(data) {
  //   console.log("suc");
  //   data = {
  //     username: "test",
  //     password: "123456",
  //   };
  // console.log(data);
  return service.request({
    method: "post",
    url: "/jwt-api-token-auth/",
    data,
  });
}
export function sendsignup(data) {
  return service.request({
    method: "post",
    url: "/users/",
    data,
  });
}
export function sendds(data) {
  console.log(data);
  return service.request({
    method: "get",
    url: "/ds/",
    params: data,
  });
}
