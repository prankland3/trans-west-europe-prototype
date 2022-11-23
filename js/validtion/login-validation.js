const username = document.getElementById('uid')
const pwd = document.getElementById('pwd')

const login = document.querySelector('#login')

login.addEventListener('submit', (event)=>{
    
    validateForm()
    console.log(isFormValid())
    if(isFormValid()===true){
        login.submit()
     }else {
         event.preventDefault()
     }

})

function isFormValid(){
    const inputContainers = login.querySelectorAll('.input-group')
    let result = true
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false
        }
    })
    return result
}

function validateForm() {
    //USERNAME
    if(username.value.trim()==''){
        setError(username, 'Name can not be empty')
    }else if(username.value.trim().length <5 || usernameInput.value.trim().length > 15){
        setError(username, 'Name must be min 5 and max 15 charecters')
    }else {
        setSuccess(username)
    }
    

    //PASSWORD
    if(pwd.value.trim()==''){
        setError(pwd, 'Password can not be empty')
    }else if(pwd.value.trim().length <6 || passwordInput.value.trim().length >20){
        setError(passwordInput, 'Password min 6 max 20 charecters')
    }else {
        setSuccess(pwd)
    }
}

function setError(element, errorMessage) {
    const parent = element.parentNode
    if(parent.classList.contains('success')){
        parent.classList.remove('success')
    }
    parent.classList.add('error')
    const paragraph = parent.querySelector('p')
    paragraph.textContent = errorMessage
}

function setSuccess(element){
    const parent = element.parentNode
    if(parent.classList.contains('error')){
        parent.classList.remove('error')
    }
    parent.classList.add('success')
}