//==============================
// FITNESS WEBSITE JAVASCRIPT
//==============================

// Navigation Active Link

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link =>{

    link.addEventListener("click",function(){

        navLinks.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

});


//==============================
// HERO BUTTON
//==============================

const joinBtn=document.querySelector(".btn1");

joinBtn.addEventListener("click",function(){

    alert("Welcome to Elite Fitness! Registration is coming soon.");

});


//==============================
// WATCH VIDEO BUTTON
//==============================

const watchBtn=document.querySelector(".btn2");

watchBtn.addEventListener("click",function(){

    window.scrollTo({

        top:document.querySelector(".video-gallery").offsetTop,

        behavior:"smooth"

    });

});


//==============================
// SERVICE BUTTONS
//==============================

const serviceButtons=document.querySelectorAll(".service-card a");

serviceButtons.forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        alert("Service details will be available soon.");

    });

});


//==============================
// STORE BUY NOW BUTTON
//==============================

const buyButtons=document.querySelectorAll(".product-card a");

buyButtons.forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        alert("Product added successfully.");

    });

});


//==============================
// BOOK TRAINER BUTTON
//==============================

const trainerButtons=document.querySelectorAll(".book-btn");

trainerButtons.forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        alert("Trainer booked successfully.");

    });

});


//==============================
// IMAGE GALLERY EFFECT
//==============================

const gallery=document.querySelectorAll(".gallery-item img");

gallery.forEach(image=>{

    image.addEventListener("click",function(){

        this.classList.toggle("zoom");

    });

});


//==============================
// SCROLL TO TOP BUTTON
//==============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

document.body.appendChild(topBtn);

topBtn.className="top-btn";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


//==============================
// VIDEO AUTOPAUSE
//==============================

const videos=document.querySelectorAll("video");

videos.forEach(video=>{

    video.addEventListener("play",()=>{

        videos.forEach(other=>{

            if(other!==video){

                other.pause();

            }

        });

    });

});


//==============================
// MEMBERSHIP BUTTON
//==============================

const joinMembership=document.querySelectorAll(".join-membership");

joinMembership.forEach(button=>{

    button.addEventListener("click",function(){

        alert("Thank you for choosing our Membership Plan.");

    });

});


//==============================
// LOADING MESSAGE
//==============================

window.addEventListener("load",()=>{

    console.log("Elite Fitness Website Loaded Successfully");

});