var used = 45;
var available = 100 - used;
if (available === 0) {
  console.log("vui long mua them dung luong");
} else if (available < 50) {
  console.log("duong luong cua ban sap het");
} else {
  console.log("Dung luong con trong " + available + "%");
}
