document.querySelectorAll('.login').forEach(loginBtn => {
    loginBtn.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'none'
        document.querySelector('.login-page').style.display = 'block'
        document.querySelector('.signup-page').style.display = 'none'
    })
})

document.querySelectorAll('.signup').forEach(signupBtn => {
    signupBtn.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'none'
        document.querySelector('.login-page').style.display = 'none'
        document.querySelector('.signup-page').style.display = 'flex'
    })
})
