(function () {
    'use strict';

    angular.module('app')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$rootScope', 'brandService','$scope'];
    function SidebarController($rootScope, brandService,$scope) {

        var vm = $scope;
        vm.sidebarItems = null;
        vm.activate = _activate;
        vm.selectBrand = _selectBrand;

        _activate();

        function _activate()
        {
            vm.sidebarItems = brandService.getAllBrands();
            $rootScope.selectedBrandId = vm.sidebarItems[0].Id;
        }

        function _selectBrand(brand)
        {
            $rootScope.selectedBrandId = brand.Id;
        }
    }

})();

