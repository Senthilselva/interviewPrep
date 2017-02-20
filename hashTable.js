function LinkedList() {
  this.head = null;
  this.tail = null;

  this.add = function(value) {
    var node = new Node(value);
    if (this.head == null) { this.head = node; }
    if (this.tail != null) { this.tail.next = node; }
    this.tail = node;
  };
}

function Node(value) {
  this.value = value;
  this.next = null;
}


function HashTable(size) {
  this.size = size;
  this.buckets = new Array(size);
  
  this.add = function(value) {
    var index = this.hash(value);
    if(this.buckets[index]) {
      this.buckets[index].add(value);
    } else {
      this.buckets[index]= new LinkedList;
    }
    
  };
  this.hash = function(value) { 
    return 
  };
  this.print = function(){
    for(key in this.buckets)
      console.log(this.buckets[key])
  }
}

var hash = new HashTable(5);
hash.add('i');
hash.add('will');
hash.add('face');
hash.add('my');
hash.add('fear');

hash.print();