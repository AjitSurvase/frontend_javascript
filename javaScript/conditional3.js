var marks ; // Example value

if (marks < 20) {
    console.log("Failed, very badly");
}
else if (marks >= 20 && marks < 35) {
    console.log("Little scope");
}
else if (marks >= 35 && marks < 45) {
    console.log("Passed on the edge");
}
else if (marks >= 45 && marks < 70) {
    console.log("A");
}
else {
    console.log("A+");
}
