var toggle_switch = document.getElementById('flexSwitchCheckDefault');
function changeTheme() {
    if(toggle_switch.checked) {
        document.body.style.setProperty('background-color', '#FFFFFF', 'important');
        document.getElementById('progresso').style.setProperty('background-color', '#272727', 'important');
        document.getElementById('rahili').style.setProperty('background-color', '#F0F8FF', 'important');
        document.getElementById('logo').src='./ieee-blue.png';
    } else {
        document.body.style.setProperty('background-color', '#161616', 'important');
        document.getElementById('progresso').style.setProperty('background-color', '#F0F8FF', 'important');
        document.getElementById('rahili').style.setProperty('background-color', '#272727', 'important');
        document.getElementById('logo').src='IEEE_whitenobg.png';
    }
}

function init() {
    var p = document.getElementById('1');
    var style = window.getComputedStyle(p);
    p.style.setProperty('background-color', '#FFFFFF', 'important');
    document.getElementById('progresso').style.setProperty('width', (p.getBoundingClientRect().left - document.getElementById('progresso').getBoundingClientRect().left + 2) + "px", 'important');
}

function baap(numby) {
    switch(numby)
    {
        case 1: {
            var p = document.getElementById('1');
            var style = window.getComputedStyle(p);
            p.style.setProperty('background-color', '#FFFFFF', 'important');
            document.getElementById('progresso').style.setProperty('width', (p.getBoundingClientRect().left - document.getElementById('progresso').getBoundingClientRect().left + 2) + "px", 'important');
            for( let i = 2; i <=5 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', '#161616', 'important');
            }
            break;
        }

        case 2: {
            var p = document.getElementById('2');
            var style = window.getComputedStyle(p);
            document.getElementById('progresso').style.setProperty('width', (p.getBoundingClientRect().left - document.getElementById('progresso').getBoundingClientRect().left + 2) + "px", 'important');
            for( let i = 1; i <=2 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', '#FFFFFF', 'important');
            }
            for( let i = 3; i <=5 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', '#161616', 'important');
            }
            break;
        }

        case 3: {
            var p = document.getElementById('3');
            var style = window.getComputedStyle(p);
            document.getElementById('progresso').style.setProperty('width', (p.getBoundingClientRect().left - document.getElementById('progresso').getBoundingClientRect().left + 2) + "px", 'important');
            for( let i = 1; i <=3 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', '#FFFFFF', 'important');
            }
            for( let i = 4; i <=5 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', '#161616', 'important');
            }
            break;
        }

        case 4: {
            var p = document.getElementById('4');
            var style = window.getComputedStyle(p);
            document.getElementById('progresso').style.setProperty('width', (p.getBoundingClientRect().left - document.getElementById('progresso').getBoundingClientRect().left + 2) + "px", 'important');
            for( let i = 1; i <=4 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', '#FFFFFF', 'important');
            }
            document.getElementById("5").style.setProperty('background-color', '#161616', 'important');
            break;
        }

        case 5: {
            var p = document.getElementById('5');
            var style = window.getComputedStyle(p);
            document.getElementById('progresso').style.setProperty('width', (p.getBoundingClientRect().left - document.getElementById('progresso').getBoundingClientRect().left + 2) + "px", 'important');
            for( let i = 1; i <=5 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', '#FFFFFF', 'important');
            }
            break;
        }
    }
}

/*
function atharva(){
    return '2%';
}
*/

toggle_switch.addEventListener('click', changeTheme);

/*
a = progress bar left window length
b = dot left window
c = bar length

(b-a/c)*100


*/