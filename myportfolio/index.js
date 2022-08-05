//<------------NavBar------------>
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");

const navLeft= menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () =>{
    if (navLeft < 0){
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});

navClose.addEventListener("click", () =>{
    if (navLeft < 0){
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

//<----------Fix Nav-------------->
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener('scroll', () =>{
const scrollHeight = window.pageYOffset;
if(scrollHeight > navHeight){
    navBar.classList.add("fix-nav");
}else{
    navBar.classList.remove("fix-nav");
}    
});

// <----------Typing-------------->
new TypeIt('#type1',{
    speed: 120,
    loop:true,
    waitUntillVisible:true,
})
.type('Developer', {delay: 400}).pause(500).delete(9)
.type('Programmer', {delay: 400}).pause(500).delete(10)
.type('Freelancer', {delay: 400}).pause(500).delete(10).go();


new TypeIt('#type2',{
    speed: 120,
    loop:true,
    waitUntillVisible:true,
})
.type('Developer', {delay: 400}).pause(500).delete(9)
.type('Programmer', {delay: 400}).pause(500).delete(10)
.type('Freelancer', {delay: 400}).pause(500).delete(10).go();



//<------------GSAP----------------->
gsap.from(".logo",{opacity:0, duration:1, delay:0.5, y:-10});
gsap.from(".hamburger",{opacity:0, duration:1, delay:0.5, x:20});
gsap.from(".banner",{opacity:0, duration:1, delay:1.5, x:200, y:80});
gsap.from(".hero h3",{opacity:0, duration:1, delay:2, y:-50});
gsap.from(".hero h1",{opacity:0, duration:1, delay:2.5, x:20, y:-45});
gsap.from(".hero h4",{opacity:0, duration:1, delay:3, y:-30});
gsap.from(".hero a",{opacity:0, duration:1, delay:3.5,x:-50, y:50});
gsap.from(".icons .fa-github",{opacity:0, duration:1, delay:3.8,x:-20,});
gsap.from(".icons .fa-linkedin",{opacity:0, duration:1, delay:4,y:20});
gsap.from(".icons .fa-facebook-f",{opacity:0, duration:1, delay:4.2,x:20,});
gsap.from(".nav-item",{opacity:0, duration:1, delay:0.9, y:30, stagger:0.2,});

//<-----------GlideJs--------------->
const glide=document.querySelector(".glide");
if(glide) new Glide(glide, {
    type:"carousel",
    startAt:0,
    perView:3,
    gap:30,
    hoverpause:true,
    autoplay:2000,
    animationDuration:800,
    AnimationTimingFunc:"ease-in-out",
    breakpoints: {
        996 : {
            perView:2
        },
        768 : {
            perView:1,
        },
    },
}).mount();

//<-------------Scroll To---------------->
const links = [...document.querySelectorAll(".scroll-link")];

links.map(link => {
    link.addEventListener('click', e=>{
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);
        const el = document.getElementById(id);
        let position = el.offsetTop - navHeight;

        window.scrollTo({
            top:position,
            left:0,
        });
        navBar.classList.remove('show');
        menu.classList.remove('show');
        document.body.classList.remove('show');
    });
});
AOS.init();

// Adding Form Data
  var firebaseConfig = {
                apiKey: "AIzaSyCbZEodh77HAj2pySx0seGbF8AiRpEJfQI",
                authDomain: "razaul-portfolio-91124.firebaseapp.com",
                databaseURL: "https://razaul-portfolio-91124-default-rtdb.firebaseio.com",
                projectId: "razaul-portfolio-91124",
                storageBucket: "razaul-portfolio-91124.appspot.com",
                messagingSenderId: "714163629025",
                appId: "1:714163629025:web:1649bba2941d7da4cbc0a0"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);

            let nameV, emailV, contentV, messageV;
            function Ready(){
                nameV= document.getElementById("name").value;
                emailV= document.getElementById("email").value;
                contentV= document.getElementById("content").value;
                messageV= document.getElementById("message").value;
            }

            let inputs = document.querySelectorAll('input');
            let textarea = document.querySelectorAll('textarea');
            function clear(){
               inputs.forEach(input => input.value="");
               textarea.forEach(input => input.value="");
            }

             document.getElementById("insert").onclick = function(){
                Ready();
                firebase.database().ref(nameV).set({
                    Name:nameV,
                    Email:emailV,
                    Suject:contentV,
                    Message:messageV
                })
                alert("Your Message has been Sent")
                clear();
            }
            
            
              

