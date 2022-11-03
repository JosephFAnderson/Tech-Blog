const toPost = (event) => {
    document.location.replace(`/post/${event.target.dataset.id}`)
}