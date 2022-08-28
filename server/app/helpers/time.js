let getCurrentTime = () => {
  let today = new Date();
  today.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return {
    year,
    month,
    day,
    time,
  };
};

module.exports = {
  getCurrentTime,
};
