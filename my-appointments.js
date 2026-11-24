
let appointments = JSON.parse(
    localStorage.getItem("appointments")
) || [];

let appointmentList = document.getElementById("appointmentList");

function displayAppointments() {

    appointmentList.innerHTML = "";

    if (appointments.length === 0) {
        appointmentList.innerHTML =
            '<tr><td colspan="5">No appointments found.</td></tr>';
        return;
    }

    appointments.forEach(function(appointment) {

        let row = document.createElement("tr");

        let values = [
            appointment.department,
            appointment.doctor,
            appointment.date,
            appointment.time,
            appointment.status
        ];

        values.forEach(function(value) {
            let cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        appointmentList.appendChild(row);

    });
}

function goToBooking() {
    window.location.href = "appointment.html";
}

function goDashboard() {
    window.location.href = "dashboard.html";
}

displayAppointments();
