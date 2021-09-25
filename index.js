var toggle_switch = document.getElementById('flexSwitchCheckDefault');
function changeTheme() {
    console.log(toggle_switch.checked);
    if(toggle_switch.checked) {
        document.body.style.setProperty('background-color', '#FFFFFF', 'important');
        document.getElementById('zali').style.setProperty('background-color', '#272727', 'important');
        document.getElementById('rahili').style.setProperty('background-color', '#F0F8FF', 'important');
    } else {
        document.body.style.setProperty('background-color', '#161616', 'important');
        document.getElementById('zali').style.setProperty('background-color', '#F0F8FF', 'important');
        document.getElementById('rahili').style.setProperty('background-color', '#272727', 'important');
    }
}

toggle_switch.addEventListener('click', changeTheme);