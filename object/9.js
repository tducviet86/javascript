function extract(task) {
  console.log(this);
  console.log(task);
}

extract.bind("LetDiv", "task1");
