function countLetter(string){
	stringArr = string.split('');
	stringObj = {};
	for(i in stringArr){
		if(!stringObj[stringArr[i]]){
			stringObj[stringArr[i]] = 1;
		} else stringObj[stringArr[i]]++;
	}
	console.log(stringObj);
}

countLetter('Banana');
countLetter("senthilnayaki");
countLetter("a");