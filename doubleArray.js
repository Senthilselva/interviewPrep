var maze =
[ [1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,9,1,0,1,0,1,0,0,0,0,0,1],
[1,0,1,0,0,0,1,0,1,1,1,0,1],
[1,0,0,0,1,1,1,0,0,0,0,0,1],
[1,0,1,0,0,0,0,0,1,1,1,0,1],
[1,0,1,0,1,1,1,0,1,0,0,0,1],
[1,0,1,0,1,0,0,0,1,1,1,0,1],
[1,0,1,0,1,1,1,0,1,0,1,0,1],
[1,0,0,0,0,0,0,0,0,0,1,2,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function mazeSolution(x, y,value ){
    if(x == 1 && y == 11){
    	return "reached"
    }
    //check all the x and y around currentPos
    //down
    if(maze[x-1][y] == 0){
    	maze[x-1][y] =9;
    	return mazeSolution(x-1,y,9);

    } else if(maze[x+1][y] == 0){  //up
    	maze[x+1][y] =9;
    	return mazeSolution(x+1,y,9)
    } else if(maze[x][y+1] == 0){  //right
    	maze[x][y+1] =9;
    	return mazeSolution(x,y+1,9)
    } else if(maze[x][y-1] == 0){
    	maze[x][y-1] =9;
    	return mazeSolution(x,y-1,9)
    }
	 
}

console.log(mazeSolution( 1, 1, 9));



function getChildren(x, y) {
	for (var i=x-1; i <= x+1; i+=2) {
		for (var j=x-1; j<= x+1; j+=2) {
			console.log(maze[i][j]);
			if (maze[i][j] === 2) { 
				console.log("Winner: " + i + " , " + j);
			} else if (maze[i][j] === 0) {
				console.log("Moving to " + i + " , " + j);
				getChildren(i, j);
			} else {
				console.log("Can't move there" + i + " , " + j)
			}
		}
	}
}

getChildren(1, 1);
