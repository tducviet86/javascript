var storage = [
  {
    id: "BRTC",
    info: {
      firstName: "Nguyen",
      lastName: "Trung",
      email: "nguyentrung@gmail.com",
    },
  },
  {
    id: "5RJH",
    info: {
      firstName: "Tran",
      lastName: "Ni",
      email: "tranni@gmail.com",
    },
  },
  {
    id: "IBMF",
    info: {
      firstName: "Nguyen",
      lastName: "Hieu",
      email: "nguyenhieu@gmail.com",
    },
  },
];
var userEmail = "tranni@gmail.com";
var isValid = true;
for (var i = 0; i < storage.length; i++) {
  if (storage[i].info.email === userEmail) {
    isValid = false;
    break;
  }
}
if (isValid === true) {
  console.log("Email hop le");
} else {
  console.log("Email da ton tai");
}
