var obj = {
  view: "2D-GH-FP",
  loop: function (number) {
    for (var i = 0; i < number; i += 1) {
      console.log(this);
    }
  },
};
obj.loop.call("Hello", 4);
