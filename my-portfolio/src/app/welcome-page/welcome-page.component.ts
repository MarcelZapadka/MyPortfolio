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
    this.mainTimeLine.to(".main-page-button", {rotate: 360, scaleX: 0, scaleY: 0, duration: 0.5, })
    .to(".text", {opacity: 0, duration: 1})
    .to(".welcome-page", {duration:1, scaleX: 0, scaleY: 0,})
  }

  starterAnimation() {
    this.mainTimeLine.to(".text", {text: "Hi! I'm Marcel!",  duration: 1, delay:1, repeatDelay: 0.3,})
    .to(".second-text", {text: "Good to see you here :)", duration: 2, delay:0.3,})
    .to(".text", {opacity: 0, duration:0.6, delay:0.5})
    .to(".second-text", {opacity:0, duration:0.6, delay:0.5})
    .to(".text", {marginLeft: "50px", marginTop: "150px", text: "This CV-page contains informations about me: <br>", marginRight: 800})
    .to(".text", { opacity:1, duration: 1.5})
    .to(".second-text", { marginLeft: "50px", marginTop: "20px", text: " <ul> <li>coding skills </li> <li> coding journey </li> <li> biography </li> <li> and more... </li> </ul> <br>", duration:0.1, marginRight:800})
    .to(".second-text", {opacity:1, duration:1.5})
  }

  zlap() {
    let okno = window.innerWidth
    return console.log(okno)
  }

  ngOnInit(): void {
    this.starterAnimation()
    this.zlap()
  }
}
