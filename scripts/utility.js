function toggleMainScreenVisibility() {
    const mainScreen = document.getElementById('main-screen');
    mainScreen.classList.toggle('hidden');
}

function scrollToMainScreen() {
    const mainScreen = document.getElementById('main-screen');
    mainScreen.scrollIntoView({ behavior: 'smooth' });
}