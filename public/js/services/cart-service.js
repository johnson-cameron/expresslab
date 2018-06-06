"use strict";
function CartService($http) {
  const getCart = () => {
    return $http({
      method: "GET",
      url: "/portal/cart"
    });
  };
  const pushCart = () => {
    return $http({
      method: "PUSH",
      url: "/portal/cart"
    });
  };
  const deleteCart = () => {
    return $http({
      method: "DELETE",
      url: "/portal/cart"
    });
  };
  const putCart = () => {
    return $http({
      method: "PUT",
      url: "/portal/cart"
    });
  };

  return {
    getCart
  };
}

angular
  .module("App")
  .factory("CartService", CartService);