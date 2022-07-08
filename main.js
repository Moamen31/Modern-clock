//get elements
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

//get date with date constructor
// let day = new Date();

//get rotation degress:
/*
to get angle of the circle, for example 30 * 1(hr) you get 30 degree
so you have to rotate 30 degree. if you have 6hr just
multiply 6 by 30 and you have 180 degree , so half a circle
*/
// let h = day.getHours() * 30; //get hours of date (30 is the rotation deg)
// let m = day.getMinutes() * 6; // multibly by 6 so we move the hand by the result (6 is the rotation deg)
// let s = day.getSeconds() * 6; // multibly by 6 so we move the hand by the result (6 is the rotation deg)

//move the hands by degress
// hour.style.transform = `rotate(${(h) + (m / 12)}deg)`
// minute.style.transform = `rotate(${m}deg)`
// second.style.transform = `rotate(${s}deg)`

//then we add all of that in setInterval() to apply it every second
setInterval(function () {
    let day = new Date();
    let h = day.getHours() * 30;
    let m = day.getMinutes() * 6;
    let s = day.getSeconds() * 6;
    hour.style.transform = `rotate(${(h)}deg)`
    minute.style.transform = `rotate(${m}deg)`
    second.style.transform = `rotate(${s}deg)`
}, 1000)

/***********************************/
//btn
let btn = document.querySelector(".btn")
let body = document.querySelector("body")

btn.addEventListener("click", function () {
    body.classList.toggle("light")
    if (body.classList.contains("light")){
        btn.innerHTML = `<span></span> Dark Mode`
    }
    else{
        btn.innerHTML = `<span></span> Light Mode`
    }
})

