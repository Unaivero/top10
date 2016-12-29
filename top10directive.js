app.directive('tvShow', function(){
  return {
    restrict: 'E',
    scope: {info: "="},
    templateUrl:'top10directive.html'
  };
});


