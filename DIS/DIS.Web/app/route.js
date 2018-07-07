MyApp.config(function ($stateProvider, $urlRouterProvider, $qProvider, $urlMatcherFactoryProvider, $locationProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $locationProvider.hashPrefix('');
    //$locationProvider.html5Mode(true);
    //$urlMatcherFactoryProvider.caseInsensitive(true);
    //$urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('root', {
            url: '',
            abstract: true,
            views: {
                '': {
                    templateUrl: '/components/main.html',
                },
                'nav@root': {
                    templateUrl: '/components/asset/nav.html'
                }
            }

        })
        .state('root.login', {
            url: '/login',
            views: {
                'mainView': {
                    templateUrl: '/components/login/Login.html',
                    controller: 'loginCtrl'
                }
            }

        })

        //Parent Dashboard
        .state('root.dashboard', {
            url: '/dashboard',
            abstract: true,
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/dashboard.html'
                }
            }
        })
        .state('root.dashboard.parent', {
            url: '/parent',
            views: {
                'dashView': {
                    templateUrl: 'components/dashboard/Parent/Dashbord.html',
                    controller:'parentDashboardCtrl'
                }
            }
        })
       //Profile
        .state('root.rootProfile', {
            url: '/dashboard/student',
            abstract: true,
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/Parent/Profile/MainProfile.html'
                }
            }
        })
        .state('root.rootProfile.studentInfo', {
            url: '/StudentInfo',
            views: {
                'ViewProfile': {
                    templateUrl: 'components/dashboard/Parent/Profile/StudentInfo.html',
                    controller: 'profileCtrl'
                }
            }
        })
        .state('root.rootProfile.profileEdit', {
            url: '/dashboard/student/profileEdit/:id',
            views: {
                'ViewProfile': {
                    templateUrl: 'components/dashboard/Parent/Profile/ProfileEdit.html',
                    controller: 'profileEditCtrl'
                }
            }
        })
        .state('root.rootProfile.parentInfo', {
            url: '/parentInfo',
            views: {
                'ViewProfile': {
                    templateUrl: 'components/dashboard/Parent/Profile/ParentInfo.html',
                    controller: 'profileCtrl'
                }
            }
        })
        .state('root.MainProfile.profile.studentInfo', {
            url: '/dashboard/student/profile.Info',
            views: {
                'ProfileView': {
                    templateUrl: 'components/dashboard/Parent/Profile/StudentInfo.html',
                    controller: 'profileEditCtrl'
                }
            }
        })
       
        //End
        .state('root.myAdmit', {
            url: '/dashboard/parent/myAdmit',
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/Parent/Admit/Admit.html',
                    controller: 'AdmitCtrl'
                }
            }
        })
        .state('print', {
            url: '/dashboard/parent/myAdmit/print',
            views: {
                '': {
                    templateUrl: 'components/dashboard/Parent/Admit/print.html',
                    controller: 'AdmitCtrl'
                }
            }
        })
        .state('root.document', {
            url: '/dashboard/parent/document',
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/Parent/MyDocument/Document.html'

                }
            }
        })
        .state('root.academicdocument', {
            url: '/dashboard/parent/academicdocument',
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/Parent/AcademicDocument/Academic.html',
                    controller: 'AcademicDocCtrl'
                }
            }
        })
        .state('root.parent', {
            url: '/dashboard/parent/Studentparent',
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/Parent/MyParent/Parent.html',
                    controller: 'studentParentCtrl'
                }
            }
        })
        .state('root.parentedit', {
            url: '/dashboard/parent/parentedit',
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/Parent/MyParent/ParentEdit.html',
                    controller: 'studentParentCtrl'
                }
            }

        })
        .state('root.payment', {
            url: '/dashboard/parent/payment',
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/Parent/MyPayment/Paymentledger.html'
                }
            }
        })
        .state('root.problem', {
            url: '/dashboard/student/problem',
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/Parent/MyProblem/MyProblem.html'

                }
            }
        })
        .state('root.routine', {
            url: '/dashboard/student/routine',
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/Parent/MyRoutine/Routine.html'
                }
            }
        })
        .state('root.mail', {
            url: '/dashboard/parent/mail',
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/Parent/SendMail/SendMail.html'
                }
            }
        })
        .state('root.picker', {
            url: '/dashboard/parent/picker',
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/Parent/Picker/Picker.html'
                }
            }
        })
        //End

        //Headmaster Dashboard
        .state('root.Dashboard', {
            abstract: true,
            url: '/dashboard',
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/HeadmasterDashboard/headmaster-dashboard.html'
                }
            }

        })

        .state('root.Dashboard.headmaster', {

            url: '/headmaster',
            views: {
                'HeadmasterdashView': {
                    templateUrl: 'components/dashboard/HeadmasterDashboard/Headmaster/headmaster.html'
                }
            }

        })
        .state('root.Profile', {

            url: '/dashboard/headmaster/profile',
            views: {
                'mainView': {
                    templateUrl: 'components/dashboard/HeadmasterDashboard/Headmaster/Profile/Profile.html'
                }
            }

        })

        //End
});