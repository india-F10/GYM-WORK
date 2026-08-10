//  Navigation buttons
function showMessage(page) {
    alert("You selected: " + page);
}

// Search functionalitity
const SearchInput = document.querySelector(".search input");

SearchInput.addEventListener("input", function () {
    const searchText = SearchInput.value.toLowerCase();

    const messages = document.querySelectorAll("message");

    messages.forEach(function (message) {

        const name = message
             .querySelector("h3")
             ?.textContent
             .toLowerCase();

             if (name && name.includes(searchText)) {
                message.style.display = "flex";
             } else if (searchText !== "") {
                message.style.display = "none";
             } else {
                message.style.display = "flex";
             }
});

});

//story for status
const stories=[
    "cr 7.jpg",
    "pro.jpg",
    "IMG_3598.JPG.jpg",
    "semi pro.jpg",
    "swim.jpg",
    "status (2).jpg",
    "boxing.jpg",
    "contrast.jpg",
    "boxing.jpg",
    "vini rigo.jpg",
    "goat.jpg",
    "girl.jpg"
];

let currentStory=0;
let timer;

function openStory(index){

    currentStory=index;

    document.getElementById("storyViewer").style.display="flex";

    showStory();
}

function showStory(){

    document.getElementById("storyImage").src=stories[currentStory];


    const bar=document.getElementById("progressBar");

    bar.style.transition="none";
    bar.style.width="0%";

    setTimeout(()=>{
        bar.style.transition="width 5s linear";
        bar.style.width="100%";

},50);

clearTimeout(timer);
timer=setTimeout(nexStory,5000);

}

function nexStory(){

    currentStory++;

    if(closeStory>=stories.length){

        closeStory();
        return;

    }

    showStory();
}
function previousStory(){
    currentStory--;
    if(currentStory<0){
        currentStory=0;
    }
    showStory();
}

function closeStory(){

    clearTimeout(timer);

    document.getElementById(storyViewer).style.display="none";

}
document.getElementById("closeStory").onclick=closeStory;
function openChat(name, image) {
    //show chat window
    const chatWindow = document.getElementById("chatWindow");

    chatWindow.style.display = "flex";

    // show person's name
    document.getElementById("chatName").textContent = name;

    // show person's profile picture
    document.getElementById("chatprofile").src = image;
}

function closechat() {

    document.getElementById("chatWindow").style.display = "none";
}

function sendMessage() {

    const input = document.getElementById("messageInput");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    alert("Message sent:" + message);

    input.value = "";
}
// OPEN CLIENT EXPRIENCE

function openMessage(
    name,
    profile,
    experience,
    physical,
    mental
) {
    document.getElementById("messageModal").style.display = "flex";
    document.getElementById("messageName").textContent = name;
    document.getElementById("messageProfile").src = profile;
    document.getElementById("experienceText").textContent = experience;
    document.getElementById("physicalText").textContent = physical;
    document.getElementById("mentalText").textContent = mental;
}

//CLOSE POPUP

function closeMessage() {
    document.getElementById("messageModal").style.display = "none";
}
//SUBMIT NEW EXPERIENCE

function submitExperience() {
    const name =
     document.getElementById("newName").value;

     const experience =
      document.getElementById("newExperience").value; 

      const physical =
       document.getElementById("newPhysical").value;

       const mental = 
        document.getElementById("newMental").value;

        if (
            name === "" ||
            experience === "" ||
            physical === "" ||
            mental === ""
        ) {
            alert("please complete all the fields.");

            return;
        }

        alert(
            "Thank you " +
        name +
    "! Your GYM SPACE experience has been submitted."
        );

        // Clear form

        document.getElementById("newName").value = "";

        document.getElementById("newExperience").value = ""; 

         document.getElementById("newPhysical").value = "";
         
        document.getElementById("newMental").value = "";
    
}