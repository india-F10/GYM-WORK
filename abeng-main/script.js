
const loader = document.getElementById("loader");
const progress = document.querySelector(".loading-progress");
const percent = document.getElementById("percent");
const message = document.getElementById("loadingMessage");

let value = 0;
//messages displayed while loading
const messages = [
    "Initializing Equipment...",
    "Preparing Workout...",
    "Loading Champions...",
    "Welcome Athlete!"
];
//change loading message
function updateMessage(number) {
    if(number < 25){
        message.textContent = messages[0];
    }
    else if(number < 50){
        message.textContent = messages[1];
    }
    else if(number < 75){
        message.textContent = messages[2];
    }
    else{
        message.textContent = messages[3];
    }
}
//loading animation
const loading = setInterval(() =>{
    value++;
//update percentage
percent.textContent = value + "%";

//fill loading bar
progress.style.width = value + "%";
//update loading text
updateMessage(value);
//finished loading
if(value >= 100){
    clearInterval(loading);
    //small pause before fading out
    setTimeout(()=> {
        loader.style.transition = "opacity 1.2s ease";
        loader.style.opacity = "0";
        //hide loader completely
        setTimeout(() => {
            loader.style.display = "none";
            //enable scrolling
            document.body.style.overflow = "auto";
        },1200);

    },500);
}
},35);

/*==========================
LOADING SCREEN
==========================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 2000);

});


/*==========================
COUNTER ANIMATION
==========================*/
document.addEventListener("DOMContentLoaded", function(){


const counters = document.querySelectorAll(".counter");
const animationDuration = 2000;

const startCounting = (counter, observer) => {
const target = +counter.getAttribute("data-target");
const startTime = performance.now();

const updateCount = (currentTime) => {
const elapsedTime = currentTime - startTime;
const progress = Math.min(elapsedTime / animationDuration, 1);

const currentValue = Math.floor (progress * target);
counter.innerText = currentValue;

if (progress < 1){
    requestAnimationFrame(updateCount);
}
else{
    counter.innerText = target;
    observer.unobserver(counter);
}
};
requestAnimationFrame(updateCount);
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            startCounting(entry.target,observer);
        }
    });
},{threshold: 0.2});
counters.forEach(counter => observer.observe(counter));
});

document.addEventListener("click", function(e){
    console.log("YOU CLICKED:", e.target)
})
setTimeout(() => {

    const cards = document.querySelectorAll(".menu-card");

    cards.forEach(card => {

        if(card.classList.contains("card1")){
            card.classList.add("move2");
        }

        if(card.classList.contains("card2")){
            card.classList.add("move3");
        }

        if(card.classList.contains("card3")){
            card.classList.add("move4");
        }

        if(card.classList.contains("card4")){
            card.classList.add("move5");
        }

        if(card.classList.contains("card5")){
            card.classList.add("move1");
        }

    });


    // return to original positions
    setTimeout(() => {

        cards.forEach(card => {

            card.classList.remove(
                "move1",
                "move2",
                "move3",
                "move4",
                "move5"
            );

        });

    },1000);


},2000);

const links = document.querySelectorAll(".menu-card a");

links.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault(); // stop immediate navigation
  
        const inner = this.querySelector(".card-inner");
        const page = this.href;

        const card = this.closest(".menu-card");
        card.classList.add("active")

        setTimeout(() =>{
            window.location.href = page;
        },1200);

        
        

    });

});

    
document.addEventListener("DOMContentLoaded", function () {
    
const words = document.querySelectorAll(".word");
console.log(words);
let current = 0;
setInterval(() => {
    words[current].classList.remove("active");
    current++;
    if (current >= words.length) {
        current = 0;
    }
    words[current].classList.add("active");
},2000);
});



const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click",() => {
        card.classList.toggle("active");
    });
});

const stats = document.querySelectorAll(".stat-box");
function revealStats(){
    stats.forEach(stat => {
        const position = stat.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            stat.classList.add("show");
        }
    });
}
window.addEventListener("scroll", revealStats);
revealStats();

const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const height = window.innerHeight;

        if(top < height - 100){
            section.classList.add("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {

const revealElements = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    revealElements.forEach(element => {

        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            element.classList.add("active");
        }
    });
});
});

document.addEventListener("DOMContentLoaded", function() {
const planCards = document.querySelectorAll(".plan-card");
planCards.forEach(card => {
    card.addEventListener("click", function(){
        this.classList.toggle("flip");
    });
});
});


    



