const form = document.getElementById('form')
const email = document.getElementById('email')
const button = document.getElementById('button')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    validate()
})

function validate(){
const emailValue = email.value.trim()
 
if (emailValue === ''){
    setErrorFor(eamil, 'Email cannot be empty')
} 
else if (!isEmail(emailValue)){
    setErrorFor(email,'please provide a valid email address')
}else{
    setSuccesFor(email)
}
}

function setErrorFor() {

}

function setSuccesFor() {

}

function isEmail(email ){
    

    return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(( [a-zA-Z0-9\-]+\.)+)) ([a-zA-Z]{2,4}|[0-9]{1,3}) (\]?)$/.test(email)

}