// Pixiespace localStorage app. Save your favourite colours from the cloud!
// Learning to use Angular

// get colours: list of project objects containing list of colour objects
// Can't do this within angular without a buncha stuff; the localStorage of the angular $scope data is... hmm. Need to save it when we're done though.
// save using localstorage('pixieproj', json.stringify($scope.projects))
var pixieprojects = {};

if (localStorage.pixieproj) {
    pixieprojects = JSON.parse(localStorage.pixieproj);
} else {
    pixieprojects = [{name: 'Wedding', desc: 'Wedding Colours', colours: [{name: 'red', hex: '#cc2222', desc: 'Red like red is', edit: false}]}];
}

// Initialise angular app
var app = angular.module('pixieApp', []);

// controller will retrieve local colour data and display colours
// need to know how to trigger events so that I can save updated or added colours.
app.controller('myCtrl', function ($scope) {
    $scope.menuhidden = true;
    $scope.newhidden = true;
    $scope.projects = pixieprojects;
    $scope.newcolour = {
        name: "",
        desc: "",
        hex: "",
        edit: false
    };
    $scope.save = function () {
        var projstring = JSON.stringify($scope.projects);
        localStorage.setItem('pixieproj', projstring);
    };
    $scope.editcolour = function (colour) {
        colour.edit = !colour.edit;
        console.log('click!');
    };
    $scope.shownew = function () {
        $scope.newhidden = !$scope.newhidden;
    };
    $scope.savenew = function (project) {
        project.colours.push($scope.newcolour);
        $scope.newcolour = {
            name: "",
            desc: "",
            hex: "",
            edit: false
        };
    };
});