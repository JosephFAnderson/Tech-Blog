const newPostEl = document.querySelector('.newPostBtn');
newPostEl.addEventListener('click', () => document.location.pathname = '/newpost');

const createPost = async (event) => {
    event.preventDefault();
    const postTitleEl = document.querySelector('#newPostTitle');
    const postContentEl = document.querySelector('#newPostContent');

    const title = postTitleEl.value.trim();
    const content = postContentEl.value.trim();
 
    if(title && content){
        const res = await fetch('/api/posts/',{
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: { 'Content-Type': 'application/json' } 
        });

        if(res.ok){
            document.location.replace('/dashboard');
        }else {
            alert(res.statusText);
        }
    };
   
}

if(document.location.pathname === "/newpost"){
    const createBtnEl = document.querySelector('#newPostFormBtn');
    createBtnEl.addEventListener('click', createPost);
}