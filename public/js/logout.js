const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok){
        document.location.replace('/');
    }
};

const logoutEl = document.querySelector('#logout');
logoutEl.addEventListener('click', logout);