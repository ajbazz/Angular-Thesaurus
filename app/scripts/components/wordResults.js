'use strict';

angular.module('thesaurus')
    .component('wordResults', {
        templateUrl: 'scripts/components/templates/wordResults.html',
        bindings: {
            resultData: '='
        }
    });