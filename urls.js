const fs = require("fs");
const process = require("process");
const axios = require("axios");

//Write to File
function outputHandle(text, out) {
  if (out) {
    fs.writeFile(out, text, "utf8", function (err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  } else {
    console.log(text);
  }
}

//Read File
function readFileLines(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    outputHandle(data, out);
  });
}

//Read Page
async function getHTML(url) {
  try {
    let res = await axios.get(url);
    outputHandle(res.data, out);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

let path;
let out;

if (process.argv[2] === "--out") {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}

if (path.slice(0, 4) === "http") {
  getHTML(path, out);
} else {
  readFileLines(path, out);
}
