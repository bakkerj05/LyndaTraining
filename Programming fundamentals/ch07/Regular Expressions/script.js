var myRE = /hello/;

// or
var myRE = new RegExp("hello");

var myString = "Does this sentence have the word hello in it?";

if (myRE.test(myString)){
    alert("Yes");
}