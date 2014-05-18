$('#rooms').on('click','li',function(){
    var app = $(this).attr('id');
    $('#rooms').find('li').removeClass('selected');
    $('#'+app).addClass('selected');
    $('section').hide();
    $('#det_'+app).show();
});

var app = angular.module('angularjs', []);

app.controller('MainCtrl', function($scope) {
    $scope.items = [
        { name: 'Hostel Care Unit',value: '320000'},
        { name: 'Large Hostel Care Unit',value: '375000'},
        { name: 'Studio Care Unit',value: '350000'},
        { name: '2 Bedroom Unit Level One - Singles',value: '400000'},
        { name: '2 Bedroom Unit Level One - Couples',value: '450000'},
        { name: '2 Bedroom Unit Ground Floor - Singles',value: '425000'},
        { name: '2 Bedroom Unit Ground Floor - Couples',value: '540000'},
        { name: 'Dementia Care Unit',value: '350000'}];

    $scope.Math = window.Math;
});

app.filter('isempty', function() {
    return function(input, replaceText) {
        if(input) return input;
        return replaceText;
    }
});