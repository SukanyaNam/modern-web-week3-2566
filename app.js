const born = 2011 ;
if ( born >= 2010 && born <= 2024 ) {
    const messege = "Gen Alpha:" + "Year:" + born ;
    console.log("Gen alpha");
} else if (  born >= 1995 && born <= 2009  ) {
    const messege = "Gen Z:" + "Year:" + born ;
    console.log("Gen Z");
} else if (  born >= 1980 && born <= 1994  ) {
    const messege = "Gen Y:" + "Year:" + born ;
    console.log("Gen Y");
} else if (  born >= 1965 && born <= 1980  ) {
    const messege = "Gen X:" + "Year:" + born ;
    console.log("Gen X");
}  else if (  born >= 1946 && born <= 1964  ) {
    const messege = "Gen Baby Boomer:" + "Year:" + born ;
    console.log("Gen Baby Boomer");
}
document.getElementById("a"),innerHTML = messege;