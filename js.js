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
    $scope.ShowFlag = false;

    var appo = 0;
    var controls = 320000;



    $scope.reset = function (){
        $('#valoreinput').val('0');
        $('#sliders').val('0');
        $scope.appo=0;
        $scope.slide=0;
        if ($scope.selectedItem != undefined){
            controls = $scope.selectedItem.value;
        }
        $scope.ShowFlag = false;
    };

        $scope.Showerror = function (){
            if(parseInt($scope.appo, 10) > parseInt(controls, 10)){
                $scope.ShowFlag = true;
            } else {
                $scope.ShowFlag = false;
            }
        };

    $scope.reset();
    $scope.Showerror();
});




app.filter('isempty', function() {
    return function(input, replaceText) {
        if(input) return input;
        return replaceText;
    }
});

app.directive('restrict', function($parse) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, iElement, iAttrs, controller) {
            scope.$watch(iAttrs.ngModel, function(value) {
                if (!value) {
                    return;
                }
                $parse(iAttrs.ngModel).assign(scope, value.toLowerCase().replace(new RegExp(iAttrs.restrict, 'g'), '').replace(/\s+/g, '-'));
            });
        }
    }
});

$('#valoreinput').each(function() {

    $(this).blur(function(){
        if(this.value == '') {
            this.value = 0;
            $('#sliders').val(0);
        }
    });

});