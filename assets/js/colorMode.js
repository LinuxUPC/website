let lightMode = localStorage.getItem('lightMode');
const toggleModeButton = document.querySelector('#colorModeButton');

if(lightMode === 'enabled') 
    document.body.classList.remove('dark');


function toggleColorMode() {
    if(lightMode === 'enabled') {
        document.body.classList.add('dark');
        lightMode = null;
    } else {
        document.body.classList.remove('dark');
        lightMode = 'enabled';
    }
    localStorage.setItem('lightMode', lightMode);
}

toggleModeButton.addEventListener('click', () => {
    toggleColorMode();
});