const createComment = async () => {
    const newComment = {
        content: document.querySelector('.commentText').value.trim()
    }

    const res = await fetch(`/api/comments/${btnEl.dataset.id}`, {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {"Content-type": "application/json"}
    })
    
    if(res.ok){
        location.reload();
    }
}

const btnEl = document.querySelector('.newComment');
btnEl.addEventListener('click', createComment);