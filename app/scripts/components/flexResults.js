'use strict';

angular.module('thesaurus')
    .component('flexResults', {
        templateUrl: 'scripts/components/templates/flexResults.html',
        bindings: {
            colData: '='
        },
        controller: function($scope){
            this.handleClick = function($event) {
                $scope.$parent.main.changeWord($event);
            };
        }
    });