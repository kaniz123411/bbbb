
document.getElementById("appointmentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let department = document.getElementById("department").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("appointmentDate").value;
    let time = document.getElementById("appointmentTime").value;
    let reason = document.getElementById("reason").value.trim();

    let message = document.getElementById("appointmentMessage");

    if (!department || !doctor || !date || !time || !reason) {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    let selectedDate = new Date(date + "T00:00:00");
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        message.style.color = "red";
        message.textContent = "Please select today or a future date.";
        return;
    }

    let appointments = JSON.parse(
        localStorage.getItem("appointments")
    ) || [];

    let newAppointment = {
        department: department,
        doctor: doctor,
        date: date,
        time: time,
        reason: reason,
        status: "Pending"
    };

    appointments.push(newAppointment);

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );

    message.style.color = "green";
    message.textContent = "Appointment booked successfully!";

    document.getElementById("appointmentForm").reset();

});

function goDashboard() {
    window.location.href = "dashboard.html";
}
