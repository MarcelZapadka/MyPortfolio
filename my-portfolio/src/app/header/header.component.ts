import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {faAddressCard, faStar, faFlask, faPhone, faClock, faArrowDown, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
//FALING BLOB EFFECT
@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  startingDate: number = 0;
  todaysDate: number = 0;
  actualTimeOfCoding: number = 0
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  starIcon = faStar;
  aboutIcon = faAddressCard;
  flaskIcon = faFlask;
  phoneIcon = faPhone;
  clockIcon = faClock;
  arrowDownIcon = faArrowDown;
  dumbellIcon = faDumbbell;
  
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

  displayTimeSinceIStartedToCode() {
    setInterval(() => {
       this.startingDate = new Date("June 16, 2022 08:00:00").getTime();
       this.todaysDate = new Date().getTime();
       this.actualTimeOfCoding = this.todaysDate - this.startingDate;
       this.days = Math.floor(this.actualTimeOfCoding / (1000 * 60 * 60 * 24));
       this.hours = Math.floor((this.actualTimeOfCoding % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       this.minutes = Math.floor((this.actualTimeOfCoding % (1000 * 60 * 60)) / (1000 * 60));
       this.seconds = Math.floor((this.actualTimeOfCoding % (1000 * 60)) / 1000);
    }, 1000)
  }

  hoverMySkills() {
    const htmlText: HTMLElement = document.querySelector('.html-text')!;
    const cssText: HTMLElement = document.querySelector('.css-text')!;
    const jsText: HTMLElement = document.querySelector('.js-text')!;
    const tsText: HTMLElement = document.querySelector('.ts-text')!;
    const angularText: HTMLElement = document.querySelector('.angular-text')!;
    const svgText: HTMLElement = document.querySelector('.svg-text')!;
    const gsapText: HTMLElement = document.querySelector('.gsap-text')!;
    const html: HTMLElement = document.querySelector('.html-icon')!;
    const css: HTMLElement = document.querySelector('.css-icon')!;
    const js: HTMLElement = document.querySelector('.js-icon')!;
    const ts: HTMLElement = document.querySelector('.ts-icon')!;
    const angular: HTMLElement = document.querySelector('.angular-icon')!;
    const svg: HTMLElement = document.querySelector('.svg-icon')!;
    const gsap: HTMLElement = document.querySelector('.gsap-icon')!;

    function mouseOverHtml() {
      css.style.opacity = "0.5";
      cssText.style.opacity = "0.5";
      js.style.opacity = "0.5";
      jsText.style.opacity = "0.5";
      ts.style.opacity = "0.5";
      tsText.style.opacity = "0.5";
      angular.style.opacity = "0.5";
      angularText.style.opacity = "0.5";
      svg.style.opacity = "0.5";
      svgText.style.opacity = "0.5";
      gsap.style.opacity = "0.5";
      gsapText.style.opacity = "0.5";
    }

    function mouseOverCss () {
      html.style.opacity = "0.5";
      htmlText.style.opacity = "0.5";
      js.style.opacity = "0.5";
      jsText.style.opacity = "0.5";
      ts.style.opacity = "0.5";
      tsText.style.opacity = "0.5";
      angular.style.opacity = "0.5";
      angularText.style.opacity = "0.5";
      svg.style.opacity = "0.5";
      svgText.style.opacity = "0.5";
      gsap.style.opacity = "0.5";
      gsapText.style.opacity = "0.5";
    }

    function mouseOverJs () {
      css.style.opacity = "0.5";
      cssText.style.opacity = "0.5";
      html.style.opacity = "0.5";
      htmlText.style.opacity = "0.5";
      ts.style.opacity = "0.5";
      tsText.style.opacity = "0.5";
      angular.style.opacity = "0.5";
      angularText.style.opacity = "0.5";
      svg.style.opacity = "0.5";
      svgText.style.opacity = "0.5";
      gsap.style.opacity = "0.5";
      gsapText.style.opacity = "0.5";
    }

    function mouseOverTs () {
      css.style.opacity = "0.5";
      cssText.style.opacity = "0.5";
      js.style.opacity = "0.5";
      jsText.style.opacity = "0.5";
      html.style.opacity = "0.5";
      htmlText.style.opacity = "0.5";
      angular.style.opacity = "0.5";
      angularText.style.opacity = "0.5";
      svg.style.opacity = "0.5";
      svgText.style.opacity = "0.5";
      gsap.style.opacity = "0.5";
      gsapText.style.opacity = "0.5";
    }

    function mouseOverAngular () {
      css.style.opacity = "0.5";
      cssText.style.opacity = "0.5";
      js.style.opacity = "0.5";
      jsText.style.opacity = "0.5";
      ts.style.opacity = "0.5";
      tsText.style.opacity = "0.5";
      html.style.opacity = "0.5";
      htmlText.style.opacity = "0.5";
      svg.style.opacity = "0.5";
      svgText.style.opacity = "0.5";
      gsap.style.opacity = "0.5";
      gsapText.style.opacity = "0.5";
    }

    function mouseOverSvg() {
      css.style.opacity = "0.5";
      cssText.style.opacity = "0.5";
      js.style.opacity = "0.5";
      jsText.style.opacity = "0.5";
      ts.style.opacity = "0.5";
      tsText.style.opacity = "0.5";
      angular.style.opacity = "0.5";
      angularText.style.opacity = "0.5";
      html.style.opacity = "0.5";
      htmlText.style.opacity = "0.5";
      gsap.style.opacity = "0.5";
      gsapText.style.opacity = "0.5";
    }

    function mouseOverGsap () {
      css.style.opacity = "0.5";
      cssText.style.opacity = "0.5";
      js.style.opacity = "0.5";
      jsText.style.opacity = "0.5";
      ts.style.opacity = "0.5";
      tsText.style.opacity = "0.5";
      angular.style.opacity = "0.5";
      angularText.style.opacity = "0.5";
      html.style.opacity = "0.5";
      htmlText.style.opacity = "0.5";
      svg.style.opacity = "0.5";
      svgText.style.opacity = "0.5";
    }

    function mouseoutFuntion() {
      html.style.opacity = "1";
      htmlText.style.opacity = "1";
      css.style.opacity = "1";
      cssText.style.opacity = "1";
      js.style.opacity = "1";
      jsText.style.opacity = "1";
      ts.style.opacity = "1";
      tsText.style.opacity = "1";
      angular.style.opacity = "1";
      angularText.style.opacity = "1";
      svg.style.opacity = "1";
      svgText.style.opacity = "1";
      gsap.style.opacity = "1";
      gsapText.style.opacity = "1";
    }

    html.addEventListener('mouseover', mouseOverHtml);
    html.addEventListener('mouseout', mouseoutFuntion);
    htmlText.addEventListener('mouseover', mouseOverHtml);
    htmlText.addEventListener('mouseout', mouseoutFuntion);
    
    css.addEventListener('mouseover', mouseOverCss);
    css.addEventListener('mouseout', mouseoutFuntion);
    cssText.addEventListener('mouseover', mouseOverCss);
    cssText.addEventListener('mouseout', mouseoutFuntion);

    js.addEventListener('mouseover', mouseOverJs);
    js.addEventListener('mouseout', mouseoutFuntion);
    jsText.addEventListener('mouseover', mouseOverJs);
    jsText.addEventListener('mouseout', mouseoutFuntion);

    ts.addEventListener('mouseover', mouseOverTs);
    ts.addEventListener('mouseout', mouseoutFuntion);
    tsText.addEventListener('mouseover', mouseOverTs);
    tsText.addEventListener('mouseout', mouseoutFuntion);

    angular.addEventListener('mouseover', mouseOverAngular);
    angular.addEventListener('mouseout', mouseoutFuntion);
    angularText.addEventListener('mouseover', mouseOverAngular);
    angularText.addEventListener('mouseout', mouseoutFuntion);

    svg.addEventListener('mouseover', mouseOverSvg);
    svg.addEventListener('mouseout', mouseoutFuntion);
    svgText.addEventListener('mouseover', mouseOverSvg);
    svgText.addEventListener('mouseout', mouseoutFuntion);

    gsap.addEventListener('mouseover', mouseOverGsap);
    gsap.addEventListener('mouseout', mouseoutFuntion);
    gsapText.addEventListener('mouseover', mouseOverGsap);
    gsapText.addEventListener('mouseout', mouseoutFuntion);
  }

  scrollToAboutMe() {
    window.scrollTo(0, 0);
  }

  scrollToSkills() {
    document.getElementById("skills")?.scrollIntoView({behavior:'smooth'});
  }

  scrollToProjects() {
    document.getElementById("?")?.scrollIntoView({behavior:'smooth'});
  }

  scrollToContact() {
    document.getElementById("?")?.scrollIntoView({behavior:'smooth'});
  }

  hideOverflow() {
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
  
  ngOnInit(): void {
    this.runBlobTextAnimations();
    this.runTextAnimations();  
    this.showBlobs();
    this.displayTimeSinceIStartedToCode();
    this.runNavbarAndImageAnimations();
    this.hideOverflow();
    this.hoverMySkills();
  }
}
