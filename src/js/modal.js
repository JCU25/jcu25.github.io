function openModal(id) {
    document.getElementById(id).style.display = "block";
    ;
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal')
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
