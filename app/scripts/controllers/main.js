'use strict';

/**
 * @ngdoc function
 * @name thesaurus.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thesaurus
 */
angular.module('thesaurus')
  .controller('MainCtrl', ['APIs', function (APIs) {
    /*jshint unused: false */
    var errorMsg = 'No results found.';
    var vm = this;
    vm.loading = false;
    
    function resetResults() {
      vm.wordDefs = null;
      vm.displayWord = '';
      vm.errorMsg = '';
      vm.loading = false;
    }

    this.getData = function () {
      resetResults();
      vm.loading = true;
      
      if(vm.word) {
        APIs.getDefs({ word: vm.word })
        .$promise.then(function(results) {
          vm.loading = false;
          var defs = results.definitions;
          if(defs.length > 0) {
            var result = results.definitions.reduce(function (r, a) {
                r[a.partOfSpeech] = r[a.partOfSpeech] || [];
                r[a.partOfSpeech].push(a);
                return r;
              }, Object.create(null));

            var viewResult = [];
            angular.forEach(result, function(value, key) {
              this.push({key:key, value:value});
            }, viewResult);

            vm.displayWord = vm.word;
            vm.wordDefs = viewResult;
                      
            APIs.getSyns({ word: vm.word })
            .$promise.then(function(syns) { 
              vm.synonyms = syns.synonyms;
            });
          }
          else {
            vm.loading = false;
            vm.errorMsg = errorMsg;
          }
        }, function(error){
          vm.loading = false;
          vm.errorMsg = errorMsg;
        });
      }
    };

    this.changeWord = function($event) {
      $event.preventDefault();
      vm.word = $event.target.text;
      vm.getData();
    };
  }]);