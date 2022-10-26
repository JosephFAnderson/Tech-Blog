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
};

const editPost = async (event) => {
    if(event.target.dataset.id){
        const id = event.target.dataset.id;
        document.location.replace(`/editpost/${id}`)
    }
}

// if the user is at the /newpost endpoint trigger this event listener
if(document.location.pathname === "/newpost"){
    const createBtnEl = document.querySelector('#newPostFormBtn');
    createBtnEl.addEventListener('click', createPost);
}

if(document.location.pathname === "/dashboard"){
    const mainEl = document.querySelector('main');
    mainEl.addEventListener('click', editPost);
}