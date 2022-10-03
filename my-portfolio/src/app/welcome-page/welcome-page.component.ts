import { Component, OnInit } from '@angular/core';
import { gsap  } from 'gsap';
import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})

export class WelcomePageComponent implements OnInit {

  mainTimeLine = gsap.timeline();
  
  goToMainPage() {
  this.mainTimeLine.to(".main-page-button", {rotate: 360, scaleX: 0, scaleY: 0, duration: 1, })
  .to(".text", {opacity: 0, duration: 1})
  .to(".starter-screen", {duration:1, scaleX: 0, scaleY: 0,})
  }

  starterAnimation() {
    this.mainTimeLine.to(".text", {text: "Hi! I'm Marcel!", repeat:1, yoyo: true, duration: 1.5, delay:1.5, repeatDelay: 1,})
    .to(".text", {text: "Good to see you on my portfolio page :)", duration: 2, delay:0.5})
    .to(".main-page-button", {y: -500, ease: "elastic.out(1, 0.3)", duration: 2, delay: 1})
  }

  ngOnInit(): void {
    this.starterAnimation()
  }

}
