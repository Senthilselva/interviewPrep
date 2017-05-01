(function selectionSort(arr,loc){
	console.log(loc)
	if(loc == undefined) loc =0;
	

	var lowest = { location: loc,
				  value : arr[loc] };
	
	for(var i=loc; i<arr.length; i++){
		console.log("insideFor")
		if(lowest.value > arr[i]){
			lowest.location = i;
			lowest.value = arr[i];
		}
	}

	if(arr.length == loc) {
		return arr;
	} else {
		    arr[lowest.location] = arr[loc];
 			arr[loc] = lowest.value;
 			console.log(arr)
 			return selectionSort(arr,loc+1);
	}

})([3,2,5,1,9,6])