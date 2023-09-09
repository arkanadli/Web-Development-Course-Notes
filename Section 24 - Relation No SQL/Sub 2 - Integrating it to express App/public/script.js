const form_delete = document.querySelector('#form-delete')

function confirmSubmit() {
    var agree = confirm("Are you sure you wish to continue?");
    if (agree)
        return true;
    else
        return false;
}

module.exports = confirmSubmit;