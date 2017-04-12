angular.module('confusionApp')
.controller('MenuController', ['$scope', 'menuFactory', function ($scope, menuFactory) {

  $scope.tab = 1;
  $scope.filtText = "";
  $scope.showDetails = false;

  $scope.dishes = menuFactory.getDishes();

$scope.select = function (setTab) {
 $scope.tab = setTab;
 if(setTab === 2) {
   $scope.filtText = "appetizer";
 } else if (setTab === 3) {
   $scope.filtText = "mains";
 } else if (setTab === 4) {
   $scope.filtText = "dessert";
 } else {
   $scope.filtText =  "";
 }
};

$scope.isSelected = function (checkTab) {
 return $scope.tab === checkTab;
};

$scope.toggleDetails = function() {
  $scope.showDetails = !$scope.showDetails;
};
}])

.controller('ContactController', ['$scope', function($scope) {
  $scope.feedback = {
    mychannel: "", firstname: "", lastname: "", agree: false, email: ""
  };
  var channels = [
    {
      value: "tel", label: "Tel."
    },
    {
      value: "Email", label: "Email"
    }
  ];
  $scope.channels = channels;
  $scope.invalidChannelSelection = false;
}])

.controller('FeedbackController', ['$scope', function($scope) {
  $scope.sendFeedback = function () {
    console.log($scope.feedback);
    if($scope.feedback.agree && ($scope.feedback.mychannel == "") && !$scope.feedback.mychannel) {
      $scope.invalidChannelSelection = true;
      console.log("incorrect");
    } else {
      $scope.invalidChannelSelection = false;
      $scope.feedback = {
        mychannel: "", firstname: "", lastname: "", agree: false, email: ""
      };
      $scope.feedback.mychannel = "";
      $scope.feedbackForm.$setPristine();
      console.log($scope.feedback);
    }
  };
}])

.controller('DishDetailController', ['$scope', '$routeParams', 'menuFactory', function($scope, $routeParams, menuFactory) {

  var dish = menuFactory.getDish(parseInt($routeParams.id, 10 ));
  $scope.dish = dish;

}])

.controller('DishCommentController', ['$scope', function ($scope) {
  $scope.newcomment = {
    rating: 5,
    comment: "",
    author: "",
    date: new Date()
  };

  $scope.addNewComment = function() {
    $scope.dish.comments.push($scope.newcomment);
    console.log($scope.dish.comments);
    $scope.newcomment = {
      author: "",
      rating: 5,
      date: new Date(),
      comment: ""
    };
    $scope.commentForm.$setPristine();
  };
}]);
