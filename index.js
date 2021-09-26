var toggle_switch = document.getElementById('flexSwitchCheckDefault');
var colorback;
var colordotcheck;
var baapsaver;
function changeTheme() {
    if(toggle_switch.checked) {
        console.log(baapsaver);
        colorback='#FFFFFF';
        colordotcheck='#00FFFF'
        document.body.style.setProperty('background-color', '#FFFFFF', 'important');
        document.getElementById('progresso').style.setProperty('background-color', '#272727', 'important');
        document.getElementById('rahili').style.setProperty('background-color', '#F0F8FF', 'important');
        document.getElementById('logo').src='./ieee-blue.png';
        document.getElementById('future').style.color='black';
        for(let i = 1; i<=5; i++) {
            if(i <= baapsaver){
                document.getElementById(i+"").style.setProperty('background-color','colordotcheck','important');
            }
            else
            {
                document.getElementById(i+"").style.setProperty('background-color','#000000','important');
            }
        }
        
    } else {
        colorback='#161616';
        colordotcheck='#FFFFFF';
        document.body.style.setProperty('background-color', '#161616', 'important');
        document.getElementById('progresso').style.setProperty('background-color', '#F0F8FF', 'important');
        document.getElementById('rahili').style.setProperty('background-color', '#272727', 'important');
        document.getElementById('logo').src='IEEE_whitenobg.png';
        document.getElementById('future').style.color='white';
        for(let i = 1; i<=5; i++) {
            if(i <= baapsaver) document.getElementById(i+"").style.setProperty('background-color','colordotcheck','important');
            else document.getElementById(i+"").style.setProperty('background-color','#000000','important');
        }
    }
}

function init() {
    colordotcheck='#FFFFFF';
    baapsaver = 1;
    var p = document.getElementById('1');
    p.style.setProperty('background-color', '#FFFFFF', 'important');
    document.getElementById('progresso').style.setProperty('width', (p.getBoundingClientRect().left - document.getElementById('progresso').getBoundingClientRect().left + 2) + "px", 'important');
}

function baap(numby) {
    baapsaver = numby;
    switch(numby)
    {
        case 1: {
            var p = document.getElementById('1');
            p.style.setProperty('background-color', colordotcheck, 'important');
            document.getElementById('progresso').style.setProperty('width', (p.getBoundingClientRect().left - document.getElementById('progresso').getBoundingClientRect().left + 2) + "px", 'important');
            for( let i = 2; i <=5 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', '#161616', 'important');
            }
            document.getElementById('news-img').src='./elon.jpg'; 
            document.getElementById('news-year').innerHTML='Year: 2030';
            document.getElementById('news').innerHTML='Elon Musk colonized the Mars';
            document.getElementById('banner').src='./last1.png';
            document.body.style.removeProperty('background-image');
            document.body.style.backgroundColor=colorback;
            break;
        }

        case 2: {
            var p = document.getElementById('2');
            document.getElementById('progresso').style.setProperty('width', (p.getBoundingClientRect().left - document.getElementById('progresso').getBoundingClientRect().left + 2) + "px", 'important');
            for( let i = 1; i <=2 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', colordotcheck, 'important');
            }
            for( let i = 3; i <=5 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', '#161616', 'important');
            }
            document.body.style.removeProperty('background-image');
            document.getElementById('news-img').src='./ieee-blue.png'; 
            document.getElementById('news-year').innerHTML='Year: 2050';
            document.getElementById('news').innerHTML='People stopped mocking IEEE SB-VIT Pune for asking noobs to build website in 2 days';
            document.body.style.removeProperty('background-image');
            document.body.style.backgroundColor=colorback;
            break;
        }

        case 3: {
            var p = document.getElementById('3');
            document.getElementById('progresso').style.setProperty('width', (p.getBoundingClientRect().left - document.getElementById('progresso').getBoundingClientRect().left + 2) + "px", 'important');
            for( let i = 1; i <=3 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', colordotcheck, 'important');
            }
            for( let i = 4; i <=5 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', '#161616', 'important');
            }
            document.getElementById('news-img').src='./ambony.jpg'; 
            document.getElementById('news-year').innerHTML='Year: 2080';
            document.getElementById('news').innerHTML='Ambani bought the whole universe';
            document.body.style.backgroundImage="Url('https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2020/09/30/space-istock-895035-1601412603.jpg?itok=8JDfauw8')";
            break;
        }

        case 4: {
            var p = document.getElementById('4');
            document.getElementById('progresso').style.setProperty('width', (p.getBoundingClientRect().left - document.getElementById('progresso').getBoundingClientRect().left + 2) + "px", 'important');
            for( let i = 1; i <=4 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', colordotcheck, 'important');
            }
            document.getElementById("5").style.setProperty('background-color', '#161616', 'important');
            document.getElementById('news-img').src='./utopia.jpg'; 
            document.getElementById('news-year').innerHTML='Year: 2119';
            document.getElementById('news').innerHTML='Covid-19 pandemic ended after 100 years with beginning of utopian era';
            document.getElementById('banner').src='./covid.png';
            document.body.style.removeProperty('background-image');
            document.body.style.backgroundColor=colorback;
            break;
        }

        case 5: {
            var p = document.getElementById('5');
            document.getElementById('progresso').style.setProperty('width', (p.getBoundingClientRect().left - document.getElementById('progresso').getBoundingClientRect().left + 2) + "px", 'important');
            for( let i = 1; i <=5 ; i++){
                document.getElementById(i + "").style.setProperty('background-color', colordotcheck, 'important');
            }
            document.getElementById('news-img').src='./jsad.jpeg';
            document.getElementById('news-year').innerHTML='Year: 2121';
            document.getElementById('news').innerHTML='"People" still struggle to write javascript';
            document.getElementById('banner').src="./js.jpg";
            document.body.style.backgroundImage="Url('https://i.imgflip.com/1iu76w.jpg')";
            break;
        }
    }
}

toggle_switch.addEventListener('click', changeTheme);