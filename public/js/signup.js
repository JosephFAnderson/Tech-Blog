const signup = async (event) => {
    event.preventDefault();
    const userEl = document.querySelector('#username');
    const passEl = document.querySelector('#password');

    const username = userEl.value.trim();
    const password = passEl.value.trim();

    if(username && password){
        const res = await fetch('api/users',{
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type': 'application/json' }
        })

        if(res.ok){
            document.location.replace('/dashboard');
        }else {
            alert(res.statusText);
        }
    }
}

const btnEl = document.querySelector('#ls-btn');
btnEl.addEventListener('click', signup)