'use strict';

angular.module('thesaurus')
    .factory('APIs', ['$resource', function($resource) {
        var baseURL = 'https://wordsapiv1.p.mashape.com/words/:word',
            keyHeader = {'X-Mashape-Key':'MW8P1cLprJmshJrwI7PuhElx6f60p1dMwkkjsnvssrtrJ70AmI'};

        var resource = $resource(baseURL,{word:'@word'},{
            getSyns:{
                url: baseURL + '/synonyms',
                headers:keyHeader
            },
            getDefs:{
                url: baseURL + '/definitions',
                headers:keyHeader
            }
        });
        return resource;
    }]);