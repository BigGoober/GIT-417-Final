let nav = document.querySelector("nav");
let products = document.getElementById("products");
let contest = document.getElementById("contest");
let contact = document.getElementById("contact");
let html = document.querySelector("html");
let footer = document.querySelector("footer");

document.querySelector("nav button").addEventListener("click", function(){
  nav.classList.toggle("dark");
  html.classList.toggle("dark");
  footer.classList.toggle("dark");
  document.getElementById("dark-button").classList.toggle("dark");
});

document.getElementById("classic-oreo").addEventListener("click", function(){
    document.getElementById("double-stuffed-pic").classList.add("hidden");
    document.getElementById("golden-oreo-pic").classList.add("hidden");
    document.getElementById("classic-oreo-pic").classList.remove("hidden");
})

document.getElementById("double-stuffed").addEventListener("click", function(){
    document.getElementById("classic-oreo-pic").classList.add("hidden");
    document.getElementById("golden-oreo-pic").classList.add("hidden");
    document.getElementById("double-stuffed-pic").classList.remove("hidden");
})

document.getElementById("golden-oreo").addEventListener("click", function(){
    document.getElementById("double-stuffed-pic").classList.add("hidden");
    document.getElementById("classic-oreo-pic").classList.add("hidden");
    document.getElementById("golden-oreo-pic").classList.remove("hidden");
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomNumber(1, 10);

document.getElementById("contest-submit").addEventListener("click", function(event){
    event.preventDefault();

    if (document.getElementById("number").value == randomNumber){
        document.getElementById("contest-results").innerHTML = "<p>You win! Here's your code: 19DIY4H9</p>";
    }else{
        document.getElementById("contest-results").innerHTML = "<p>Sorry, try again next time!</p>";
    }
});

document.getElementById("radio-phone").addEventListener("click", function(){
    if(document.getElementById("radio-phone").checked){
        document.getElementById("phone-label").innerHTML = "Phone Number*";
        document.getElementById("email-label").innerHTML = "Email Address";
    }
})

document.getElementById("radio-email").addEventListener("click", function(){
    if(document.getElementById("radio-email").checked){
        document.getElementById("email-label").innerHTML = "Email Address*";
        document.getElementById("phone-label").innerHTML = "Phone Number";
    }
})

document.getElementById("contact-submit").addEventListener("click", function(event){
    event.preventDefault();
    let isValid = true;
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let comments = document.getElementById("comments");
    let formErrors = document.getElementById("formErrors");
    let ul = document.createElement("ul");
    
    formErrors.innerHTML = "";
    formErrors.classList.add("hidden");
    name.classList.remove("error");
    email.classList.remove("error");
    phone.classList.remove("error");

    if(name.value.length <= 1){
        name.classList.add("error");
        formErrors.classList.remove("hidden");
        isValid = false;

        let li = document.createElement("li");
        let text = document.createTextNode("Missing full name.");
        ul.appendChild(li);
        li.appendChild(text);
        formErrors.appendChild(ul);
    }

    if(document.getElementById("radio-email").checked){
        let emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

        if(!emailregex.test(email.value)){
            email.classList.add("error");
            formErrors.classList.remove("hidden");
            isValid = false;

            let li = document.createElement("li");
            let text = document.createTextNode("Invalid or missing email address.");
            ul.appendChild(li);
            li.appendChild(text);
            formErrors.appendChild(ul);
        }
    }

    if(document.getElementById("radio-phone").checked){
        let phoneregex = /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

        if(!phoneregex.test(phone.value)){
            phone.classList.add("error");
            formErrors.classList.remove("hidden");
            isValid = false;

            let li = document.createElement("li");
            let text = document.createTextNode("Invalid or missing phone number.");
            ul.appendChild(li);
            li.appendChild(text);
            formErrors.appendChild(ul);
        }
    }

    if(comments.value.length < 1){
        comments.classList.add("error");
        formErrors.classList.remove("hidden");
        isValid = false;

        let li = document.createElement("li");
        let text = document.createTextNode("Comment missing.");
        ul.appendChild(li);
        li.appendChild(text);
        formErrors.appendChild(ul);
    }
});