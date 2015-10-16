function pasuser(form) {
    console.log('xxxx')
    if (form.uid.value == "Muffin") {
        if (form.pass.value == "1234") {
            location = "page2.html"
        } else {
            alert("Invalid Password")
        }
    } else {
        alert("Invalid UserID")
    }
}