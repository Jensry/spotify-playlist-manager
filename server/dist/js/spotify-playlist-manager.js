/**
 * Created by Jens on 2016-03-25.
 */

var spmApp = angular.module('spmApp', ['ngResource', 'ui.bootstrap']);

spmApp.factory('Playlists', function ($resource, $http) {
    return $resource('/playlists', {});
});

spmApp.controller('PlaylistController', function ($scope, Playlists) {
   $scope.playlists = Playlists.query();
})