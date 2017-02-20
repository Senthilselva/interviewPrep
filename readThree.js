var fs = require("fs")
var Files = ["file1.txt","file2.txt","file3.txt"]
var catchErr = function(err) {
	    if(err) return console.log(err);
	    console.log('Wrote to the file');
};
 
var readAllFile = function(fileName){
	var writeToFile = function(err, data){
    	if (err) return console.log(err);
		var newFile = 'New'+fileName;
		fs.writeFile(newFile, data,catchErr);
	}

 	fs.readFile( fileName, writeToFile);
 }

for(var i=0; i < Files.length; i++){
 	readAllFile(Files[i]);
 }





/*
var fs = require("fs")
 var Files = ["file1.txt","file2.txt","file3.txt"]
 var readAllFile = function(fileName){ 
 fs.readFile( fileName, function(err, data){
    if (err) return console.log(err);
    var newFile = 'New'+fileName;
    fs.writeFile(newFile, data, function(err) {
        if(err) return console.log(err);
        console.log('Wrote to the file');
    });

   });
 }

for(var i=0; i < Files.length; i++){
 	readAllFile(Files[i]);
 }

 */