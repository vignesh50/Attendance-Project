// Get a reference to the student list
const studentList = document.getElementById("student-list");

// Add click event listeners to the "Mark" buttons
const markButtons = document.querySelectorAll(".mark-attendance");
markButtons.forEach((button) => {
    button.addEventListener("click", markAttendance);
});

// Function to mark attendance when the button is clicked
function markAttendance(event) {
    const listItem = event.target.parentElement;
    const studentName = listItem.querySelector(".student-name").textContent;
    const confirmation = confirm(`Mark ${studentName} as present?`);
    if (confirmation) {
        // You can add code here to record the attendance, e.g., send data to a server or store it in a local variable.
        listItem.style.backgroundColor = "#c3e6cb"; // Change background color to indicate attendance marked
    }
}
