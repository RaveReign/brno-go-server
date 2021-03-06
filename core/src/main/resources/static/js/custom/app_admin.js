$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    loadFileFailedModal();
    loadFileSuccessModal();
    loadFileIncorrectModal();
    loadRepoFailedModal();
    loadRepoSuccessModal();

    $('.progress').hide();

    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            gutter: 15,
            belowOrigin: true
        }
    );
});

function onSubmit(){
    $('#progress').fadeIn();
}

function loadRepoFailedModal() {
    $('#modalRepoFailed').modal('open');
}

function loadRepoSuccessModal() {
    $('#modalRepoSuccess').modal('open');
}

function loadFileFailedModal() {
    $('#modalFileFailed').modal('open');
}

function loadFileIncorrectModal() {
    $('#modalFileIncorrect').modal('open');
}

function loadFileSuccessModal() {
    $('#modalFileSuccess').modal('open');
}

function logout() {
    document.getElementById('form-logout').submit();
}