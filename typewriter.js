const typewriter = (sentence) => {
  let time = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 50;
  }

  setTimeout(() => console.log(), time);
};

/*
 * ----- Test Scenarios -----
 */

const sentence1 = "hello there from lighthouse labs";
typewriter(sentence1);
