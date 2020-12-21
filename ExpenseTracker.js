let expense = document.getElementById("expenseMade");
let date = document.getElementById("date");
let amount = document.getElementById("amount");

let myNode = document.getElementById("tbody");
let dummyRow = document.getElementById("dummyRow");

document.onkeydown = function () {
    if (window.event.keyCode == "13") {
        toDo();
    }
}

let i = 0;
let j = 0;
let k = 0;
let l = 0;

function toDo() {

    if (i === 0) {
        myNode.removeChild(dummyRow);
        i++;
    } else if (j === 0 && myNode.childNodes.length === 1) {
        let dummyRow = document.getElementById("dummyRow");
        dummyRow.parentNode.removeChild(dummyRow);
        j++;
    }

    let tr = document.createElement("tr");
    myNode.appendChild(tr);

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    let node2 = document.createTextNode(expense.value);
    td1.appendChild(node2);
    let node3 = document.createTextNode(date.value);
    td2.appendChild(node3);
    let node4 = document.createTextNode(amount.value);
    td3.appendChild(node4);

    let button = document.createElement("button");
    button.addEventListener("click", function () {
        tr.parentNode.removeChild(tr);
        l++
        if (k === l) {
            clearList();
        }
    });
    let node1 = document.createTextNode("X");
    button.appendChild(node1);
    td4.appendChild(button);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    expense.value = "";
    date.value = "";
    amount.value = "";

    k++;
}

clear.onclick = clearList;
function clearList() {
    myNode.innerHTML = "";
    let dummyRow = document.createElement("tr");
    dummyRow.id = "dummyRow";
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.setAttribute("colspan", "3");
    td1.innerHTML = "No expenses yet!"
    dummyRow.appendChild(td1);
    dummyRow.appendChild(td2);
    myNode.appendChild(dummyRow);
    j = 0;
    k = 0;
    l = 0;
}


