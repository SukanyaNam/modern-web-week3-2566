const born = 1986;
var messege = "";
switch (born) {
    case 2010:
        messege = "Gen Alpha:" + "Year:" + born ;
        console.log("Gen alpha");
        break;
    case 1995:
        messege = "Gen Z:" + "Year:" + born ;
        console.log("Gen Z");
        break;

    default:
        messege = "Gen ERROR:" + "Year" + born ;
        break;
}