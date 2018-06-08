"use strict";
function CartService($http) {
  const getCart = () => {
    return $http({
      method: "GET",
      url: "/portal/shopping-cart"
    });
  };
  const addCart = (newCart) => {
    return $http({
      method: "POST",
      url: "/portal/shopping-cart",
      data: newCart
    });
  };
  const deleteCart = (id) => {
    return $http({
      method: "DELETE",
      url: "/portal/shopping-cart/" + id
    });
  };
  const updateCart = (item) => {
    return $http({
      method: "PUT",
      url: "/portal/shopping-cart/" + item.id,
      data: item
    });
  };

  return {
    getCart,
    addCart,
    deleteCart,
    updateCart
  };
}

angular
  .module("App")
  .factory("CartService", CartService);