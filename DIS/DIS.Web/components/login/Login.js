angular
    .module('MyApp')
    .controller('loginCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.title = "Login";
        var Id;
        $scope.login = function (user) {
            Id=user.Id
            localStorage.setItem('StudentId', JSON.stringify(Id));
            var aa = user.Type;
            if (aa == 'Parent') {
                $state.go('root.dashboard.parent');
            }
            else if (aa == 'Headmaster'){
                $state.go('root.Dashboard.headmaster');
            }
           
        }
    }]);