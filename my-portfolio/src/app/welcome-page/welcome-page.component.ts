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
  
  starterAnimation() {
    this.mainTimeLine.to(".text", {text: "Hi! I'm Marcel!",  duration: 1, delay:1, repeatDelay: 0.3,})
    .to(".second-text", {text: "Good to see you here :)", duration: 2, delay:0.3,})
    .to(".text", {opacity: 0, duration:0.6, delay:0.5})
    .to(".second-text", {opacity:0, duration:0.6, delay:0.5})
    .to(".text", {marginLeft: "50px", marginTop: "150px", marginRight: 800, text: "", fontSize: "33px"})
    .to(".text", { opacity:1})
    .to(".text", {text: "This CV page contains this infromation about me <br>", duration:3})
    .to(".second-text", { marginLeft: "50px", marginTop: "40px" , duration:0.1, marginRight:800, textAlign: "center", text:"", fontSize: "33px"})
    .to(".second-text", {opacity:1, duration:0.1})
    .to(".second-text", {text: "coding skills <br> coding journey <br> biography <br>my projects <br> and more...", duration:4})
    .from(".go-to-main-button", {opacity:0, delay:1, duration:1})
    .to(".info", {text: "* Press ENTER to skip this page ", duration: 1,})
  }

  pressKeyToSkipAnimations(){
    window.addEventListener("keydown", (event) => {
      if(event.key === "Enter") {
        this.goToMainPage()
      }
    })
  }
 
  goToMainPage() {
    this.mainTimeLine.kill();
        gsap.to(".image", {scaleX:8, scaleY:8, duration:2, x: -1800})
        gsap.to(".image", {y: -100000, delay:1.5})
  }      

  zlap() {
    let okno = window.innerWidth
    return console.log(okno)
  }

  ngOnInit(): void {
    this.starterAnimation()
    this.zlap()
    this.pressKeyToSkipAnimations()
  }
}