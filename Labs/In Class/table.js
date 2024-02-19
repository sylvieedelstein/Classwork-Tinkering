function init() {
    let table = document.getElementById("table1")
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let td = document.createElement("td");
            td.innerHTML = i + "-" + j;
            tr.appendChild(td);

        }
        table.appendChild(tr);
    }

    let tr = document.createElement("tr")
    let td = document.createElement("td")
    td.colSpan = 2;
    td.innerHTML = "2 columns";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = " 1 column";
    tr.appendChild(td);
    table.appendChild(tr);
}
