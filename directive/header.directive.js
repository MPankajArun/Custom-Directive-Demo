(function () {
    'use strict';

    angular.module('app')
        .directive('myHeader', myHeader);

    function myHeader() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope:{
                headerText: "@"
            },
            template: '<div class="header clearfix"><h3 class="text-muted">{{ headerText }}</h3></div>'
        };
        return directive;
    }

})();

