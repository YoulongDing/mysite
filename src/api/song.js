import service from "@/utils/request";
export function getCategory(data) {
  if ("id" in data) {
    return service.request({
      method: "GET",
      url: "/songs/categories/" + data.id + "/",
      data,
    });
  }
  return service.request({
    method: "GET",
    url: "/songs/categories/",
    data,
  });
}
export function getSong(data) {
  console.log(data);
  return service.request({
    method: "GET",
    url: "/songs/songs/",
    params: data,
  });
}
export function retrieveSong(data) {
  return service.request({
    method: "GET",
    url: "/songs/songs/" + data.id + "/",
  });
}
//判断是否收藏
export function getFav(data) {
  return service.request({
    method: "GET",
    url: "/userops/fav/" + data + "/",
  });
}
//收藏
export function addFav(data) {
  return service.request({
    method: "post",
    url: "/userops/fav/",
    data,
  });
}

//取消收藏
export function delFav(data) {
  console.log("DELETE");
  return service.request({
    method: "DELETE",
    url: "/userops/fav/" + data + "/",
  });
}
