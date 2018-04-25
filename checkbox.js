function count() {
    var myForm = document.getElementById("myForm");
    var checks = myForm.getElementsByTagName("input")
    var count = 0;
    for (var i = 0; i < checks.length; i++) {
        if (checks[i].type == "checkbox" && checks[i].checked == true) {
            count++;
        }
    }
    return count;
};