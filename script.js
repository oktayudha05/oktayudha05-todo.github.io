const form = document.querySelector("form");
const inputUser = document.getElementById("input-user");
const listGroup = document.querySelector(".list-group");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(inputUser.value);

    if (inputUser.value == "") {
        Swal.fire({
            title: `kamu belum memasukan tugas mu`,
            icon: `warning`,
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: 'Ulangi',
            allowOutsideClick: false,
        })
    } else {
        listGroup.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <h3>${inputUser.value}</h3> <span class="fs-3"><i class="bi bi-x-circle-fill text-danger" id="delet-btn"></i></span>
    </li>`
    inputUser.value = "";

    }
})

    

listGroup.addEventListener("click", function(event){
    if (event.target.id == "delet-btn") {
        event.target.parentElement.parentElement.remove();
    }
})
