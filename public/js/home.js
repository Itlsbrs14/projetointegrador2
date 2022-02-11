const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDays() {
  let date_ini = new Date(document.form_main.date_ini.value);
  let date_end = new Date(document.form_main.date_end.value);

  let diff = date_end.getTime() - date_ini.getTime();

  document.getElementById('days').innerText = Math.floor(diff / day);
}
setInterval(function(){
        const clock = document.querySelector(".display");
        let time = new Date();
        let sec = time.getSeconds();
        let min = time.getMinutes();
        let hr = time.getHours();
        let day = 'AM';
        if(hr > 12){
          day = 'PM';
          hr = hr - 12;
        }
        if(hr == 0){
          hr = 12;
        }
        if(sec < 10){
          sec = '0' + sec;
        }
        if(min < 10){
          min = '0' + min;
        }
        if(hr < 10){
          hr = '0' + hr;
        }
        clock.textContent = hr + ':' + min + ':' + sec + " " + day;
      })