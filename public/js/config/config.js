"use strict";

angular
  .module("App")
  .config(($routeProvider) => {
    $routeProvider
    .when("/shopping-cart", {
      template: "<shopping-cart></shopping-cart>"
    })
    .otherwise({
      redirectTo: "/shopping-cart"
    });
  });
