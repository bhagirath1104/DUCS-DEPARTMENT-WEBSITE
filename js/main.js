document.addEventListener("DOMContentLoaded", () => {
    updateCurrentYear();
    calculateFacultyExperience();
});

/**
 * Automatically updates the copyright year in the footer.
 */
function updateCurrentYear() {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Computes and displays years of experience for each faculty member
 * based on their date of joining in the #faculty-list table.
 */
function calculateFacultyExperience() {
    const facultyRows = document.querySelectorAll("#faculty-list tbody tr");
    const today = new Date();

    facultyRows.forEach((row) => {
        const joiningCell = row.querySelector("td[data-joining-date]");
        const experienceCell = row.querySelector(".experience-cell");

        if (!joiningCell || !experienceCell) return;

        const joiningDateStr = joiningCell.getAttribute("data-joining-date");
        const joiningDate = new Date(joiningDateStr);

        if (isNaN(joiningDate.getTime())) {
            experienceCell.textContent = "Invalid date";
            return;
        }

        let years = today.getFullYear() - joiningDate.getFullYear();
        const monthDiff = today.getMonth() - joiningDate.getMonth();
        const dayDiff = today.getDate() - joiningDate.getDate();

        // Adjust if the joining anniversary hasn't occurred yet this calendar year
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            years--;
        }

        experienceCell.textContent = years === 1 ? "1 year" : `${years} years`;
    });
}