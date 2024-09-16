console.log("Hello");

const path = require("path");
const readline = require("readline");
const fs = require("fs");
const { error, log } = require("console");
const EventEmitter = require("events");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Enter the number");
rl.prompt();

rl.on("line", (input) => {
  const number = Number(input.trim());
  if (!isNaN(number) && typeof number === "number") {
    console.log(number ** 2);
  } else {
    console.log("Not a number entered!!!");
  }
  rl.close();
});

console.log(path.join(__dirname));

const filePath = path.join(__dirname, "userInput.txt");

console.log("Пишите текст");
rl.prompt();

rl.on("line", (input) => {
  fs.writeFile(filePath, input, (err) => {
    if (err) {
      console.error("Ошибка:", err);
    } else {
      console.log(`Текст записан в  ${filePath}`);
    }
    rl.close();
  });
});

const eventEmitter = new EventEmitter();

function appendTextToFile(text) {
  fs.appendFile(filePath, text + "\n", () => {
    console.log(`Text has been appended to ${filePath}`);
  });
}

eventEmitter.on("addText", (text) => {
  appendTextToFile(text);
});

eventEmitter.emit("addText", "Example text to be appended to the file.");
