angular
    .module('MyApp')
    .controller('profileEditCtrl', ['$scope', '$state', 'studentService', '$stateParams', function ($scope, $state, studentService, $stateParams) {

        var Id = $stateParams.id;

        //Fetch Student Data by Id
        studentService.getStudent(Id)
            .then(function (response) {
                $scope.student = response;
                localStorage.setItem('StudentInfo', JSON.stringify(response));
            }, function () {
                $scope.mmsg = "Not Work";
            });


        //Image Preview
        $scope.imageUpload = function (event) {
            var files = event.target.files;

            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();
                reader.onload = $scope.imageIsLoaded;
                reader.readAsDataURL(file);
            }
        }

        $scope.imageIsLoaded = function (e) {
            $scope.$apply(function () {
                $scope.img = e.target.result;
            });
        }
        //End

        $scope.edit = function () {
            $state.go('root.profileEdit');
        }
    }]);