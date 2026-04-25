let lightMode = localStorage.getItem('lightMode');
const toggleModeButton = document.querySelector('#colorModeButton');

if(lightMode === 'enabled'){
    document.body.classList.remove('dark');
    document.documentElement.style.setProperty('color-scheme', 'light');
}
else 
    document.documentElement.style.setProperty('color-scheme', 'dark');
    


function toggleColorMode() {
    if(lightMode === 'enabled') {
        document.body.classList.add('dark');
        document.documentElement.style.setProperty('color-scheme', 'dark');
        lightMode = null;
    } else {
        document.body.classList.remove('dark');
        document.documentElement.style.setProperty('color-scheme', 'light');
        lightMode = 'enabled';
    }
    localStorage.setItem('lightMode', lightMode);
}

toggleModeButton.addEventListener('click', () => {
    toggleColorMode();
});