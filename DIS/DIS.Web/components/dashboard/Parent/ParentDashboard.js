angular
    .module('MyApp')
    .controller('parentDashboardCtrl', ['$scope', '$state', 'studentService', function ($scope, $state, studentService) {
        $scope.save = localStorage.getItem('StudentId');
        var Id = (localStorage.getItem('StudentId'), JSON.parse($scope.save));
        //Fetch Data by Student id
        studentService.getStudent(Id)
            .then(function (response) {
                $scope.student = response;

            }, function () {
                $scope.mmsg = "Not Work";
            });
    }]);