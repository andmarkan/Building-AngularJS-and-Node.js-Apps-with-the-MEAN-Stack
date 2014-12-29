angular.module('app').controller('mvCourseListCtrl', function($scope, mvCourse){
    $scope.courses = mvCourse.query();
});
