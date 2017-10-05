var a = 123;
var b = "123";

// equality check
if ( a == b ) {
   alert("Yes, they ARE equal");
   if ( a === b ) {
      alert("Really, they truly are");
   } else if ( a !== b ) {
      alert("Just kidding, they are not strictly equal");
   }
} else {
   alert("No, they're NOT equal");
}