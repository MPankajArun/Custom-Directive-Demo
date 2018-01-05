(function () {
    'use strict';

    angular.module('app')
        .controller('DemoController', DemoController);

    DemoController.$inject = ['$scope', '$rootScope', 'brandService'];
    function DemoController($scope, $rootScope, brandService) {
        var vm = $scope;
        vm.toolbarItems = [
            { Text: "Products", Url: "/products" },
            { Text: "Categories", Url: "/categories" },
            { Text: "Brands", Url: "/brands" }
        ];

        $rootScope.selectedBrandId = null;
    }

})();

