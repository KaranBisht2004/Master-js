// script.js

document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const checkboxes = [
        document.getElementById('goal1'),
        document.getElementById('goal2'),
        document.getElementById('goal3')
    ];
    const textInputs = document.querySelectorAll('.goal-text');
    const errorText = document.getElementById('errorText');
    const progressFill = document.getElementById('progressFill');

    // Helper: update progress bar based on checked count
    function updateProgress() {
        const checkedCount = checkboxes.filter(cb => cb.checked).length;
        const percent = (checkedCount / checkboxes.length) * 100;
        progressFill.style.width = `${percent}%`;
    }

    // Helper: show error message
    function showError() {
        errorText.classList.add('visible');
    }

    // Helper: hide error message
    function hideError() {
        errorText.classList.remove('visible');
    }

    // Check if all text inputs have content (non-empty)
    function allGoalsFilled() {
        return Array.from(textInputs).every(input => input.value.trim() !== '');
    }

    // Attach event listeners to each checkbox
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', (e) => {
            const textValue = textInputs[index].value.trim();

            // If trying to check the box but the corresponding text is empty
            if (checkbox.checked && textValue === '') {
                checkbox.checked = false;   // revert the check
                showError();
                return;                     // do not update progress yet
            }

            // If the check was successful (or unchecking), hide error if all goals are filled
            if (allGoalsFilled()) {
                hideError();
            }

            // Always update progress bar
            updateProgress();
        });
    });

    // Attach event listeners to each text input
    textInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            const value = input.value.trim();

            // If text is cleared while the checkbox is checked, uncheck it automatically
            if (value === '' && checkboxes[index].checked) {
                checkboxes[index].checked = false;
                updateProgress();
            }

            // If after typing, all goals now have text, hide any error
            if (allGoalsFilled()) {
                hideError();
            }

            // Also hide error if any text was entered (optional, but feels more forgiving)
            if (value !== '') {
                hideError();
            }
        });
    });

    // Initialize: hide error, set progress to 0
    hideError();
    updateProgress();
});