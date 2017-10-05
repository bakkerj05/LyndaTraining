var foo = "55 blah";
var myNumber = Number(foo); // make it a number

if ( isNaN(myNumber) ) {
    alert("It's not a number!");
} if ( !isNaN(myNumber) ) {
    alert("It IS a number!");
}

alert(foo.indexOf("blah"));
alert(foo.slice(3,7));
alert(foo.substring(3,7));
alert(foo.substr(3,7));