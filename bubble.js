bubblesort.js

(function bubblesort(arr){
	
	for(var j=1; j< arr.length; j++){
		for(var i=1; i <arr.length; i++){
			
			if(arr[i] < arr[i-1]){
				let temp;
				temp = arr[i];
				arr[i] = arr[i-1];
				arr[i-1] = temp
			}
		}
		console.log(arr)
	}
})([3,2,7,9,1])

//=====================================
//second solution
//=============================================
var bubbleSort = function(arr){

    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]){
            var t = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = t
            count ++
        }
    }
    if (count >0){
        bubbleSort(arr)
    }

    return arr

}


console.log(bubbleSort([3,5,8,2,3,4,8,9]))