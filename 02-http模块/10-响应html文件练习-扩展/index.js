// 获取所有td
let tds = document.querySelectorAll("td");

// 遍历添加事件
tds.forEach((item) => {
  item.onclick = function () {
    this.style.background = "#333";
  };
});
