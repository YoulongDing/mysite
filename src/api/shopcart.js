import service from "@/utils/request";
//获取购物车商品
export function getShopCarts(data) {
  return service.request({
    method: "GET",
    url: "/shopcart/shopcart/",
  });
}

// 添加商品到购物车
export function addShopCart(data) {
  return service.request({
    method: "POST",
    url: "/shopcart/shopcart/",
    data,
  });
}

//更新购物车商品信息
export function updateShopCart(songid, data) {
  return service.request({
    method: "PATCH",
    url: "/shopcart/shopcart/" + songid + "/",
    data,
  });
}

//删除某个商品的购物记录
export function deleteShopCart(songid) {
  return service.request({
    method: "delete",
    url: "/shopcart/shopcart/" + songid + "/",
  });
}
