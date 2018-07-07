
var MyApp = angular.module('MyApp', ['ui.router','moment-picker']);
//, 'ui.bootstrap'

MyApp.config(function (momentPickerProvider) {
    momentPickerProvider.options({
        maxView: 'month',
        format: 'YYYY-MM-DD',
    })
})




