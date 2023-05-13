function scrollToMain() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

window.addEventListener('load', function() {
    setTimeout(scrollToMain, 4000);
});


console.log(window.navigator);