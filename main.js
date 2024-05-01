const btn = document.querySelector('.sumbit');
id = document.querySelector('.id');
parol = document.querySelector('.password');

btn.addEventListener('click', (e) => {
    e.preventDefault()


    if (id.value == "123456" && parol.value == "78900") {
        alert("okey")
    } else {
        alert("wrong ID")
    }

    id.value = ""
    parol.value = ""
})