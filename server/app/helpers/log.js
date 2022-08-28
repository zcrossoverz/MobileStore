const fs = require("fs");
const path = require("path");
const { getCurrentTime } = require("./time");

const state = {
  current: "",
  set: (current) => (this.current = current),
  show: () => this.current,
};

const wl = (prefix, data) => {
  const time = getCurrentTime();
  const type = ["errors", "warning", "activity"];
  fs.writeFile(
    path.join(__dirname, `../logs/${type[prefix]}.txt`),
    `[${time.time} - ${time.day}/${time.month}/${
      time.year
    }] - [${state.show()}] - ${data}\n`,
    { flag: "as" },
    (err) => {
      if (err) console.log("Error when write log: " + err);
    }
  );
};

module.exports = { wl, state };
