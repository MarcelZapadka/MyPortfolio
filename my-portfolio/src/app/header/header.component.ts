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

  runTextAnimations() {
    let timeline = gsap.timeline();
    timeline.to(".name", {text: "Marcel Zapadka",delay: 1, duration:2})
    .from(".logo", {x:200, delay:5, duration:1})
    .from(".name", {translateX: 350, duration: 1, fontSize: "7rem", onComplete: this.runNavbarAndImageAnimations})
  }

  runNavbarAndImageAnimations() {
    gsap.to(".navbar", {opacity:1, duration: 0.01, delay:0.5});
    gsap.to(".image", {opacity: 1, duration: 0.01, delay:0.5});
    gsap.from(".navbar", {x:3000, duration:3, ease:"elastic.out(1, 0.75)", delay:0.5})
    gsap.from(".image", {x:2000, duration:3.3, ease:"elastic.out(1, 1)", delay:0.5})
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
  
  reload() {
    window.location.reload();
  }

  ngOnInit(): void {
  this.runBlobAnimations();
  this.runTextAnimations();
  this.showBlobs();
}
}
