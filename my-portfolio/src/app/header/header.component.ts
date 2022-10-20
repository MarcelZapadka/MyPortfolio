import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {faAddressCard, faStar, faFlask, faPhone } from '@fortawesome/free-solid-svg-icons';
import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerAnimationTimeLine = gsap.timeline();
  starIcon = faStar;
  aboutIcon = faAddressCard;
  flaskIcon = faFlask;
  phoneIcon = faPhone;
  loading: number = 0

  runTextAnimations() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        phaseOne.progress(0.9,false)
        phaseTwo.progress(0.9,false)
        phaseThree.progress(0.9,false)
        phaseFour.progress(0.9,false)
        phaseFive.progress(0.9,false)
      }
    })
    let phaseOne = gsap.to(".name", {y:50})
    let phaseTwo = gsap.to(".logo", {y:50})
    let phaseThree = gsap.to(".name", {text: "Marcel Zapadka",delay: 2, duration:2, onStart: this.scrollToAboutMe, id:"name"})
    let phaseFour = gsap.from(".logo", {x:200, delay:9, duration:1.6})
    let phaseFive = gsap.from(".name", {translateX: 350, duration: 1.6, fontSize: "7rem", delay:8.5,onComplete: this.runNavbarAndImageAnimations})
  }  

  runNavbarAndImageAnimations() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        phaseOne.progress(0.9,false)
        phaseTwo.progress(0.9,false)
        phaseThree.progress(0.9,false)
        phaseFour.progress(0.9,false)
        gsap.from(".image", {x:2000, duration:0.2,})
        gsap.from(".navbar", {x:3000, duration:0.2})
      }
    })



   let phaseOne = gsap.to(".navbar", {opacity:1, duration: 0.01, delay:0.5});
   let phaseTwo = gsap.to(".image", {opacity: 1, duration: 0.01, delay:0.5});
   let phaseThree =  gsap.from(".navbar", {x:3000, duration:3, ease:"elastic.out(1, 0.75)", delay:0.5})
   let phaseFour = gsap.from(".image", {x:2000, duration:3.3, ease:"elastic.out(1, 1)", delay:0.5})
    }
  
   showBlobs() {
    gsap.to(".blob-one", {opacity:1, duration: 3.25, delay:14})
    gsap.to(".blob-one-text", {opacity:1, duration: 3.25, delay:14})
    gsap.to(".blob-two", {opacity:1, duration: 3.25, delay:14.3})
    gsap.to(".blob-two-text", {opacity:1, duration: 3.25, delay:14.3})
    gsap.to(".blob-three", {opacity:1, duration: 3.25, delay:14.6})
    gsap.to(".blob-three-text", {opacity:1, duration: 3.25, delay:14.6})
    gsap.to(".blob-four", {opacity:1, duration: 3.25, delay:14.9})
    gsap.to(".blob-four-text", {opacity:1, duration: 3.25, delay:14.9})
    gsap.to(".blob-five", {opacity:1, duration: 3.25, delay:15.2})
    gsap.to(".blob-five-text", {opacity:1, duration: 3.25, delay:15.2})
  }  

  runBlobAnimations() {
    gsap.to(".blob-one-text", { y: -10, duration: 3, ease: "none", yoyo:true, repeat: -1});
    gsap.to(".blob-two-text", { x: 10, duration: 3, ease: "none", yoyo:true, repeat: -1});
    gsap.to(".blob-three-text", { y: 10, x: -5, duration: 3, ease: "none", yoyo:true, repeat: -1});
    gsap.to(".blob-four-text", { x: 10, y: -5, duration: 3, ease: "none", yoyo:true, repeat: -1});
    gsap.to(".blob-five-text", { y: -10, x: 5, duration: 3, ease: "none", yoyo:true, repeat: -1});
  }

  scrollToAboutMe() {
    window.scrollTo(0, 0)
  }

  scrollToSkills() {
    document.getElementById("?")?.scrollIntoView({behavior:'smooth'})
  }

  scrollToProjects() {
    document.getElementById("?")?.scrollIntoView({behavior:'smooth'})
  }

  scrollToContact() {
    document.getElementById("?")?.scrollIntoView({behavior:'smooth'})
  }
  
  ngOnInit(): void {
    this.runBlobAnimations();
    this.runTextAnimations();  
    this.showBlobs();
  }
}
