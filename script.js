function scrollToID(id) {
    const page = document.getElementById(id)
    if (page) {
        page.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function(){
});