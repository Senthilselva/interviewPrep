// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
    // write your code in Javascript
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementsByTagName
    // or using jQuery:
    //    $('some_tag')
    var firstTag = $('body').find("li");
    var highCounter = 0;
    
    var counter = 0;
    var newTag = firstTag;
     while(newTag.html() != undefined){
        newTag = $(newTag).find('li');
        counter++;
    }
    return counter;
        
    
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
    // write your code in Javascript
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementsByTagName
    // or using jQuery:
    //    $('some_tag')
    var firstTag = $('body').find("li");
    var highCounter = 0;
    
    var counter = 0;
    var newTag = firstTag;
     while(newTag.html() != undefined){
        newTag = $(newTag).find('li');
        counter++;
    }
    return counter;
        
    
}