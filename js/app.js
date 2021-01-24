
/* var count = new Date("October 9,2020 20:00:00").getTime();
                var x = setInterval(function() {
                    var now = new Date().getTime();
                    var d = count - now;

                    var hours = Math.floor(d / (1000 * 60 * 60 * 24));
                    var days = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((d % (1000 * 60)) / 1000);

                    document.getElementById("days").innerHTML = days;
                    document.getElementById("hours").innerHTML = hours;
                    document.getElementById("minutes").innerHTML = minutes;
                    document.getElementById("seconds").innerHTML = seconds;

                    if (d <= 0) {
                        clearInterval(x);
                    }

                }, 1000);
*/


const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
  var scroll_position = window.scrollY;
  if(scroll_position > 50){
    header.style.backgroundColor = "#29323c";
  }else{
    header.style.backgroundColor = "transparent";
  }
});

