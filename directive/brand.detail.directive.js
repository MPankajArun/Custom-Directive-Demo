(function () {
    'use strict';

    angular.module('app')
        .directive('brandDetail', brandDetail);

    function brandDetail() {
        var directive = {
            restrict: 'E',
            replace: true,
            controller: 'BrandDetailController',
            controllerAs: 'brandDetail',
            templateUrl: 'template/brand-detail.html'
        };
        return directive;
    }

})();

