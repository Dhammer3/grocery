let str = "";
let s = false;
for (let x = 0; x < 56; x++) {
  if (s) {
    str += "#";
    //console.log(" # # # # # # #");
  } else if (!s) {
    str += " ";
    //console.log(" # # # # # # #");
  }
  if (x % 7 == 0 && x > 0) {
    str += "\n";
    if (s) {
      str += "#";
      //console.log(" # # # # # # #");
    }
    if (!s) {
      str += " ";
      //console.log(" # # # # # # #");
    }
  }
  s = !s;
}
console.log(str);
//  #######
// #######
