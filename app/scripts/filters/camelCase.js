'use strict';

angular.module('thesaurus')
    .filter('camelCase', function() {
        return function(str) {
            if (!str){return;}

            return str.charAt(0).toUpperCase() + str.substring(1,str.length);
        };
    });
