function openExcelFile() {
    const path = document.getElementById('excelPath').value;
    if (path) {
        window.location.href = `ms-excel:ofe|u|${path}`;
    } else {
        alert('Please enter a valid path.');
    }
}

// Modal functionality
document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('qrModal');
    const btn = document.getElementById('openModalBtn');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});