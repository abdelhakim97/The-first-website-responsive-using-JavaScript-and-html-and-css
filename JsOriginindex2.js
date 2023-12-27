function inscrire() {

}


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById('myForm').style.display = "none";

}

var keyup_email = "";

function keyup_login_mot_pass() {
    var vlaue_email = document.getElementById('pass_wor').value;

    if (vlaue_email != "" || vlaue_email != null || vlaue_email != " ") {
        document.getElementById('Placeholder_ins').style.display = "none";

    }

    if (vlaue_email == " " || vlaue_email == "" || vlaue_email.length === 0 || vlaue_email == null) {

        document.getElementById('Placeholder_ins').style.display = "block";

    }
}


function keyup_login_Eamil() {

    var vlaue_email_login = document.getElementById('inp_email').value;

    if (vlaue_email_login != "" || vlaue_email_login != null || vlaue_email_login != " ") {
        document.getElementById('Placeholder_Email').style.display = "none";

    }
    if (vlaue_email_login == " " || vlaue_email_login == "" || vlaue_email_login === 0 || vlaue_email_login == null) {

        document.getElementById('Placeholder_Email').style.display = "block";

    }
}

