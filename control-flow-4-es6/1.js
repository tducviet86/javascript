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
const userEmail = "letdiv.innovation@gmail.com";
let isValid = true;
storage.forEach((item) => {
  if (item.info.email === userEmail) {
    isValid = false;
    return;
  }
});
isValid === true
  ? console.log("Email hop le")
  : console.log("Email da ton tai");
