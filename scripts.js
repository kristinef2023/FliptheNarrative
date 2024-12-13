let currentGroup = 1; // Start with the first group

// Function to change pages
function changePage(direction) {
    // Hide the current page group
    document.getElementById(`group${currentGroup}`).style.display = 'none';
    
    // Update the current group based on the direction
    currentGroup += direction;

    // If we go past the last group, loop back to the first group
    if (currentGroup > 4) {
        currentGroup = 1;
    } else if (currentGroup < 1) {
        currentGroup = 4;
    }

    // Show the new page group
    document.getElementById(`group${currentGroup}`).style.display = 'block';
}

// Initialize the first group as visible
document.addEventListener("DOMContentLoaded", () => {
    // Hide all groups initially
    const groups = document.querySelectorAll('.page-group');
    groups.forEach(group => group.style.display = 'none');

    // Show the first group
    document.getElementById('group1').style.display = 'block';
});
