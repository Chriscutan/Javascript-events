let userEmails = ['abc@gmail.com'];

function CheckUser(){
    let email = document.getElementById('mail').value;

    if(userEmails.includes(email)){
        let alert = document.getElementById('alert');
        alert.innerHTML = "User already exists";
        alert.classList.remove('d-none');
        alert.classList.add('already-reg');

        setTimeout( ()=>{
            alert.classList.remove('already-reg');
            alert.classList.add('d-none');
        }, 3000);

        document.getElementById('mail').value = "";
    }
    else{
        userEmails.push(email);
        let alert = document.getElementById('alert');
        alert.innerHTML = "User successfully registered";
        alert.classList.remove('d-none');
        alert.classList.add('success');

        setTimeout( ()=>{
            alert.classList.remove('success');
            alert.classList.add('d-none');
        }, 3000);

        document.getElementById('mail').value = "";
    }
}