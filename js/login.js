document.querySelector('.login-form input[type=submit]')
    .addEventListener('click', login);

function login(ev) {
    ev.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify({
        name: document.querySelector('.login-form input[name=name]').value,
        password: document.querySelector('.login-form input[name-password]').value
    })    
});
    document.querySelector('.login-form').reset();
}