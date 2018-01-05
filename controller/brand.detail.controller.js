(function () {
    'use strict';

    angular.module('app')
        .controller('BrandDetailController', BrandDetailController);

    BrandDetailController.$inject = ['$rootScope', 'brandService','$scope'];
    function BrandDetailController($rootScope, brandService,$scope) {

        var vm = $scope;
        vm.brand = null;
        vm.activate = _activate;

        _activate();

        function _activate()
        {
            $rootScope.$watch("selectedBrandId", _loadBrand);
        }

        function _loadBrand()
        {
            vm.brand = brandService.getBrand($rootScope.selectedBrandId);
        }
    }

})();

