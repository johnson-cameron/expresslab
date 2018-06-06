"use strict";
const shoppingCart = {
  template: `
  <div>
  <section ng-repeat="item in $ctrl.cart">
    <input ng-model="item.product">
    <input ng-model="item.price">
    <input ng-model="item.quantity">
    <a href="" ng-click="$ctrl.deleteCart(item.id);">Delete Item</a>
  </section>
  </div>
  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getCart().then((response) => {
      vm.cart = response.data;
    });
    
  }]
};

angular
  .module("App")
  .component("shoppingCart", shoppingCart);