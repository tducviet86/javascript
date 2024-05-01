var list = [
  {
    name: "Nguyen Van Dang",
    address: {
      street: "Pho Quang",
      city: "Ho Chi Minh",
    },
  },
  {
    name: "Tran Thi Hieu",
    address: {
      street: "Mai Chi Tho",
      city: "Ho Chi Minh",
    },
  },
  {
    name: "To Vinh Nghiem",
    address: {
      street: "Quang Trung",
      city: "Ha Noi",
    },
  },
  {
    name: "Vo Huynh Bach",
    address: {
      street: "Mai Hac De",
      city: "Ha Noi",
    },
  },
];
for (var i = 0; i < list.length; i++) {
  if (list[i].address.city === "Ho Chi Minh") {
    console.log(list[i].name);
  }
}
