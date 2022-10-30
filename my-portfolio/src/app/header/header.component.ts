import {Component, OnInit} from '@angular/core';
import {gsap} from 'gsap';
import {faAddressCard, faStar, faFlask, faPhone} from '@fortawesome/free-solid-svg-icons';
import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  starIcon = faStar;
  aboutIcon = faAddressCard;
  flaskIcon = faFlask;
  phoneIcon = faPhone;

  hideOverflowOnStart() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        document.body.style.overflowY = "visible";
      }
    })
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";
    setTimeout(() => {
      document.body.style.overflowY = "visible";
    }, 10000)
  }

  runTextAnimations() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        phaseOne.progress(0.9,false);
        phaseTwo.progress(0.9,false);
        phaseThree.progress(0.9,false);
        phaseFour.progress(0.9, false);
      }
    })
    gsap.to(".name", {translateX: 350, duration: 0.1})
    const phaseOne = gsap.to(".name", {text: "Marcel Zapadka",delay: 2, duration:2, onStart: this.scrollToAboutMe});
    const phaseTwo = gsap.from(".logo", {x:200, delay:9, duration:1.6});
    const phaseThree = gsap.from(".name", {translateX: 350, duration: 1.6, fontSize: "7rem", delay:8.5});
    const phaseFour= gsap.to(".skip-animations-info", {opacity: 1, delay:12});
  }  

  runNavbarAndImageAnimations() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        phaseOne.progress(0.9,false);
        phaseTwo.progress(0.9,false);
        phaseThree.progress(0.9,false);
        phaseFour.progress(0.9,false);
        gsap.from(".image", {x:2000, duration:0.15,});
        gsap.from(".navbar", {x:3000, duration:0.15});
      }
    })
   const phaseOne = gsap.to(".navbar", {opacity:1, duration: 0.01, delay:9.9});
   const phaseTwo = gsap.to(".image", {opacity: 1, duration: 0.01, delay:9.9});
   const phaseThree =  gsap.from(".navbar", {x:3000, duration:3, ease:"elastic.out(1, 0.75)", delay:10});
   const phaseFour = gsap.from(".image", {x:2000, duration:3.3, ease:"elastic.out(1, 1)", delay:10});
    }
  
   showBlobs() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        phaseOne.progress(0.9,false);
        phaseTwo.progress(0.9,false);
        phaseThree.progress(0.9,false);
        phaseFour.progress(0.9,false);
        phaseFive.progress(0.9,false);
        phaseSix.progress(0.9,false);
        phaseSeven.progress(0.9,false);
        phaseEight.progress(0.9,false);
        phaseNine.progress(0.9,false);
        phaseTen.progress(0.9,false);
      }
    })
    const phaseOne = gsap.to(".blob-one", {opacity:1, duration: 3.25, delay:12});
    const phaseTwo = gsap.to(".blob-one-text", {opacity:1, duration: 3.25, delay:12.2});
    const phaseThree = gsap.to(".blob-two", {opacity:1, duration: 3.25, delay:12.4});
    const phaseFour = gsap.to(".blob-two-text", {opacity:1, duration: 3.25, delay:12.6});
    const phaseFive = gsap.to(".blob-three", {opacity:1, duration: 3.25, delay:12.8});
    const phaseSix = gsap.to(".blob-three-text", {opacity:1, duration: 3.25, delay:13});
    const phaseSeven = gsap.to(".blob-four", {opacity:1, duration: 3.25, delay:13.2});
    const phaseEight = gsap.to(".blob-four-text", {opacity:1, duration: 3.25, delay:13.4});
    const phaseNine = gsap.to(".blob-five", {opacity:1, duration: 3.25, delay:13.6});
    const phaseTen = gsap.to(".blob-five-text", {opacity:1, duration: 3.25, delay:13.8});
  }  

  runBlobTextAnimations() {
    gsap.to(".blob-one-text", { y: -10, duration: 3, ease: "none", yoyo:true, repeat: -1});
    gsap.to(".blob-two-text", { x: 10, duration: 3, ease: "none", yoyo:true, repeat: -1});
    gsap.to(".blob-three-text", { y: 10, x: -5, duration: 3, ease: "none", yoyo:true, repeat: -1});
    gsap.to(".blob-four-text", { x: 10, y: -5, duration: 3, ease: "none", yoyo:true, repeat: -1});
    gsap.to(".blob-five-text", { y: -10, x: 5, duration: 3, ease: "none", yoyo:true, repeat: -1});
  }

  scrollToAboutMe() {
    window.scrollTo(0, 0);
  }

  scrollToSkills() {
    document.getElementById("skills")?.scrollIntoView({behavior:'smooth'});
  }

  scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({behavior:'smooth'});
  }

  scrollToContact() {
    window.scrollTo(0, 10000);
  }
  
  ngOnInit(): void {
    this.runBlobTextAnimations();
    this.runTextAnimations();  
    this.showBlobs();
    this.runNavbarAndImageAnimations();
    this.hideOverflowOnStart();
  }
}
