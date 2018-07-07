angular
    .module('MyApp')
    .controller('profileCtrl', ['$scope', '$state', 'studentService', function ($scope, $state, studentService) {
        $scope.save = localStorage.getItem('StudentId');
        var Id = (localStorage.getItem('StudentId'), JSON.parse($scope.save));

        //Fetch Student Data
        studentService.getStudent(Id)
            .then(function (response) {
                $scope.value = response;
                var a = $scope.value.smisAdmissionInfo[0].rollNo;
                
                localStorage.setItem('StudentInfo', JSON.stringify(response));
            }, function () {
                $scope.mmsg = "Invalid Registration Number";
            });


        //Student Info Edit Function
        $scope.edit = function () {

            $state.go('root.profileEdit');
        }
    }]);