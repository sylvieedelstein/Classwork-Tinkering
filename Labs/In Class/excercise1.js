function isPrime(num) {
    for (let i = 2; i < num; i++) {
    if (num % 1 == 0)
        return false;
    }
    return true;
}


function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function init() {
    // Create a table
    let table = document.createElement("table");
    let div = document.getElementsByTagName("div");
    div[0].appendChild(table);
    let colCount = 0;
    let tr;

    for (let i = 0; i < 100; i++) {
        if (colCount % 10 == 0) {
            if (tr) {
                table.appendChild(tr);
            }
            tr = document.createElement("tr");

        }
            let num = generateNumber();
            let cell = document.createElement("td");
            cell.innerHTML = num;
            if (isPrime(num)) {
                cell.className = "prime";
            } else if (num % 2 == 0) {
                cell.className = "even";

            } else {
                cell.className = "odd";

            }
            tr.appendChild(cell);
            colCount++;
    }
}





