angular
    .module('MyApp')
    .controller('AdmitCtrl', ['$scope', '$log', '$state', function ($scope, $log, $state) {
       
      
       

        $scope.printContent = function (e) {
                var restorePage = document.body.innerHTML;
                var printcontent = document.getElementById(e).innerHTML;
                document.body.innerHTML = printcontent;
                window.print();
            }
           


        
        
    }]);



