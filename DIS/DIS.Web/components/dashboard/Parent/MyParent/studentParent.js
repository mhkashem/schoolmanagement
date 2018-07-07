angular
    .module('MyApp')
    .controller('studentParentCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.Edit = function () {
            $state.go('root.parentedit');
        }
    }]);