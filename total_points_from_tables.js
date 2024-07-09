const obj = {};

let dataOfTables = document.querySelectorAll("div.data table tr");

for (let tr of dataOfTables) {
  if (tr.children[0].textContent in obj) {
    obj[tr.children[0].textContent] += +tr.children[1].textContent;
  } else {
    obj[tr.children[0].textContent] = +tr.children[1].textContent;
  }
}

let arr = [];
for (let [key, value] of Object.entries(obj)) {
  arr.push({ name: key, sum: value });
}
arr = arr.sort((a, b) => b.sum - a.sum);

let total = document.createElement("div");
total.className = "total";
document.body.appendChild(total);

let totalTable = document.createElement("table");
total.appendChild(totalTable);

let totalcaption = document.createElement("caption");
totalcaption.textContent = "Total Points";
totalTable.appendChild(totalcaption);

for (let i of arr) {
  let tr = document.createElement("tr");
  totalTable.appendChild(tr);

  let tdName = document.createElement("td");
  tdName.textContent = i.name;
  tr.appendChild(tdName);

  let tdSum = document.createElement("td");
  tdSum.textContent = i.sum;
  tr.appendChild(tdSum);
}
