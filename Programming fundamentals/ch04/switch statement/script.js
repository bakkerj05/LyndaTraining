var grade = "Premium";

/*
if ( grade === "Regular") {
    alert("It's $3.15");
}
if ( grade === "Premium") {
    alert("It's $3.35");
}
if ( grade === "Diesel") {
    alert("It's $3.47");
}
*/
switch(grade) {
    case "Regular":
         alert("It's $3.15");
         break;
    case "Premium":
        alert("It's $3.25");
        break;
    case "Diesel":
        alert("It's $4.37");
        break;
    default:
         alert("That's not a valid grade");
}