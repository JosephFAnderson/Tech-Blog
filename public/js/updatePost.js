const updatePost = async (event) =>{
    event.preventDefault();
    const titleEl = document.querySelector('#newPostTitle');
    const contentEl = document.querySelector('#newPostContent');

    if(event.target.dataset.id && event.target.textContent === 'Update Post'){
        const id = event.target.dataset.id;
        const title = titleEl.value.trim();
        const content = contentEl.value.trim();
        const res = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-type': 'application/json' }
        })
        
        if(res.ok){
            document.location.replace('/dashboard');
        }else{
            alert(res.statusText);
        }
    }

    if(event.target.dataset.id && event.target.textContent === 'Delete'){
        const id = event.target.dataset.id;
        const res = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: { 'Content-type': 'application/json' }
        });

        if(res.ok){
            document.location.replace('/dashboard');
        }else{
            alert(res.statusText);
        }
    }
}

const containEl = document.querySelector('#newPostForm');
containEl.addEventListener('click', updatePost);