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
list.forEach((item) => {
  if (item.address.city === "Ho Chi Minh") {
    console.log(item.name);
  }
});
