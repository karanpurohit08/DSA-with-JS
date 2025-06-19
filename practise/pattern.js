function basicPatterProgram() {
  const n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// basicPatterProgram();

function rightAngleTriangle() {
  const n = 5;
  for (let i = 0; i <= 5; i++) {
    let ascaii = 65;
    for (let j = 0; j < i; j++) {
      process.stdout.write(String.fromCharCode(ascaii));
      ascaii++;
    }
    process.stdout.write("\n");
  }
}
// rightAngleTriangle();

function invertedRightAngleTriagle() {
  const n = 5;
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// invertedRightAngleTriagle();

function mirrorRightAngelTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("*");
      }
    }
    process.stdout.write("\n");
  }
}
// mirrorRightAngelTriangle(5);

function xPattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j == i || j == n + 1 - i) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
}
// xPattern(5);

function trianglePatternWithoutBase(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n * 2; j++) {
      if (j == i || j == n * 2 + 1 - i) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}
// trianglePatternWithoutBase(5);

