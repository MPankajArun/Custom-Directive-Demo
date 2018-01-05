(function () {
    'use strict';

    angular.module('app')
        .directive('mySidebar', mySidebar);

    function mySidebar() {
        var directive = {
            restrict: 'E',
            replace: true,
            controller: 'SidebarController',
            controllerAs: 'sidebar',
            templateUrl: 'template/sidebar.html'
        };

        return directive;
    }

})();

