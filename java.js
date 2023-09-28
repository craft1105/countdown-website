let end = "24 sep 2024 3:47 AM";
document.getElementById('timers').innerHTML=end;

let data =document.querySelectorAll('input');

function clock(){
let endday = new Date(end);
let startday = new Date();
let diff = (endday-startday)/1000;
data[0].value=Math.floor(diff/3600/24);
data[1].value=Math.floor(diff/3600 % 24);
data[2].value=Math.floor(diff/60) %24;
data[3].value=Math.floor(diff) %60;

}


setInterval(
    () => {
        clock()
    },1000
)