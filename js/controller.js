app.controller("myCtrl", function($scope) {
	
	$scope.seats = ["1","2","3","4","5","6","7","8","9","10"]
	$scope.tickets = ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","B1","B2","B3","B4","B5","B6","B7","B8","B9","B10"];
	$scope.tickets1 = [];
	$scope.selectedTabId = 1;
    $scope.addticket = function (x) {
        $scope.errortext = ""; 
		if(($scope.tickets1.length) < $scope.selectedseats){
			if ($scope.tickets1.indexOf(x) == -1) {
			$scope.tickets1.push(x);
			
			}
		}else{
			$scope.errortext = "Seat Limit exceded, Try deselecting on the selected seats to match the no of seats selected"; 
		}
	localStorage.setItem("Ticketarray", JSON.stringify($scope.tickets1));
    }
	
	$scope.removeItem = function (x) {
        var index = $scope.tickets1.indexOf(x);
		$scope.tickets1.splice(index, 1);
		localStorage.setItem("Ticketarray", JSON.stringify($scope.tickets1));
	}

	$scope.showConfirmPage = function (tabval) {
	    $scope.selectedTabId = tabval;
		$scope.bookeditems = (localStorage.getItem('Ticketarray')!==null) ? JSON.parse(localStorage.getItem('Ticketarray')) : [];
		$scope.totalamount=$scope.bookeditems.length;
	}
});