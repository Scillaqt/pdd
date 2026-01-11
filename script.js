let no = 1;

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task === "") return;

    const table = document.getElementById("taskTable");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${no++}</td>
        <td>${task}</td>
        <td class="status pending">Pending</td>
        <td>
            <button class="action-btn done-btn" onclick="doneTask(this)">✔</button>
            <button class="action-btn delete-btn" onclick="deleteTask(this)">✖</button>
        </td>
    `;

    table.appendChild(row);
    input.value = "";
}

function doneTask(btn) {
    const row = btn.parentElement.parentElement;
    const status = row.querySelector(".status");
    status.textContent = "Done";
    status.classList.remove("pending");
    status.classList.add("done");
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
}

function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("time").innerText = time;
    document.getElementById("date").innerText = date;
}

setInterval(updateClock, 1000);
updateClock();
