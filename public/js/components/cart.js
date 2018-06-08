"use strict";
const shoppingCart = {
  template: `
  <form ng-submit="$ctrl.addCart($ctrl.newCart);">
    <input type="text" placeholder="Product Name.." ng-model="$ctrl.newCart.product">
    <input type="text" placeholder="Price.." ng-model="$ctrl.newCart.price">
    <input type="text" placeholder="Quantity.." ng-model="$ctrl.newCart.quantity">
  <button>Add Item</button>
  <div>
  <section class="title">
  <h2>Product</h2>
  <h2>Price</h2>
  <h2>Quantity</h2>
  <h2>Remove Item</h2>
  </section>
  <section ng-repeat="item in $ctrl.shoppingCart">
    <h3>{{ item.product }}</h3>
    <p>{{ item.quantity }}</p>
    <input ng-blur="$ctrl.updateCart(item);" ng-model="item.quantity">
    <a href="" ng-click="$ctrl.deleteCart(item.id);">X</a>
  </section>
  </div>
  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getCart().then((response) => {
      vm.shoppingCart = response.data;
    });
    vm.addCart = (newCart) => {
      CartService.addCart(newCart).then((response) => {
        vm.shoppingCart = response.data;
      });
      vm.newCart = {};
    };
    vm.deleteCart = (id) => {
      CartService.deleteCart(id).then((response) => {
        vm.shoppingCart = response.data;
      });
    };
    vm.updateCart = (item) => {
      CartService.updateCart(item).then((response) => {
        vm.shoppingCart = response.data;
      });
    };
    
  }]
};

angular
  .module("App")
  .component("shoppingCart", shoppingCart);