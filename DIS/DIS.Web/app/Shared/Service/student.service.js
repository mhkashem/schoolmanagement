MyApp.factory('studentService', function ($http) {
    CRUD = {};
    CRUD.Create = function () {
        alert("Fair");

        //var aa = $http({ method: 'Post', url: 'http://localhost:56437/api/MarriageRegisters', data: emp }).
        //    then(function (response) {
        //        return response.data;
        //    });

        //return aa;
    };

    CRUD.getStudent = function (Id) {
        var aa = $http.get('http://203.190.9.108/api.portal.student.dis.com/api/Students/' + Id)
            .then(function (response) {
                return response.data;
            });

        return aa;
    };

    CRUD.Update = function () {
        alert("Update Student Service");

        //var aa = $http({ method: 'Post', url: 'http://203.190.9.108/api.portal.student.dis.com/api/Students/', data: emp }).
        //    then(function (response) {
        //        return response.data;
        //    });

        //return aa;
    };


    return CRUD;
});
