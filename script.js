// Get a reference to the student list
const studentList = document.getElementById("student-list");

let presentCount = 0;
let absentCount = 0;
const presentCountDisplay = document.getElementById("present-count");
const absentCountDisplay = document.getElementById("absent-count");

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
        listItem.style.backgroundColor = "#A8DF8E"; // Change background color to indicate attendance marked
        presentCount++;
    }else{
        listItem.style.backgroundColor = "#FF6969"; // Change background color to indicate attendance marked
        absentCount++;
    }

    // Update the counts displayed on the webpage
    presentCountDisplay.textContent = presentCount;
    absentCountDisplay.textContent = absentCount;
}