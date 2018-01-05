(function () {
    'use strict';

    angular.module('app')
        .directive('myToolbar', myToolbar);

    function myToolbar() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                items: "="
            },
            templateUrl: 'template/toolbar.html'
        };
        return directive;
    }

})();

