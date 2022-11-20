import {Component, OnInit} from '@angular/core';
import {faClock, faArrowDown, faDumbbell} from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap/all';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  startingDate: number = 0;
  todaysDate: number = 0;
  actualTimeOfCoding: number = 0
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  clockIcon = faClock;
  arrowDownIcon = faArrowDown;
  dumbellIcon = faDumbbell;

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

  showCalcPhoto() {
      const calcPhoto = document.querySelector(".calculator-image");
      const overlay = document.querySelector(".overlay");
      const closeButton = document.querySelector(".close-button");
      calcPhoto?.classList.add('active');
      overlay?.classList.add('active');
      closeButton?.classList.add('active');
  }

  showBibleAppPhoto() {
    const biblePhoto = document.querySelector(".bibleapp-image");
    const overlay = document.querySelector(".overlay");
    const closeButton = document.querySelector(".close-button");
    biblePhoto?.classList.add('active');
    overlay?.classList.add('active');
    closeButton?.classList.add('active');
  }

  showCatoPediaPhoto() {
    const catoPediaPhoto = document.querySelector(".catopedia-image");
    const overlay = document.querySelector(".overlay");
    const closeButton = document.querySelector(".close-button");
    catoPediaPhoto?.classList.add('active');
    overlay?.classList.add('active');
    closeButton?.classList.add('active');
  }

  hideProjectsPhotos() {
      const calcPhoto = document.querySelector(".calculator-image");
      const overlay = document.querySelector(".overlay");
      const biblePhoto = document.querySelector(".bibleapp-image");
      const catoPediaPhoto = document.querySelector(".catopedia-image");
      const closeButton = document.querySelector(".close-button");
      calcPhoto?.classList.remove('active');
      overlay?.classList.remove('active');
      biblePhoto?.classList.remove('active');
      closeButton?.classList.remove('active');
      catoPediaPhoto?.classList.remove('active')
  }

  scrollTriggerAnimations() {
    gsap.from(".timer", { scrollTrigger: {
      trigger: ".timer",
      start: "top 80%",
      end: "bottom 60%",
      scrub:2,
    }, y:-40,opacity: 0, duration:1})

    gsap.from(".html-icon", { scrollTrigger: {
      trigger: ".timer",
      start: "top 50%",
      end: "bottom 65%",
      scrub:true,
    }, y:-20,opacity: 0, duration:0.7 })

    gsap.from(".css-icon", { scrollTrigger: {
      trigger: ".timer",
      start: "top 50%",
      end: "bottom 65%",
      scrub:true,
    }, y:-20,opacity: 0, duration:0.7, delay: 0.1 })

    gsap.from(".js-icon", { scrollTrigger: {
      trigger: ".timer",
      start: "top 50%",
      end: "bottom 65%",
      scrub:true,
    }, y:-20,opacity: 0, duration:0.7, delay: 0.2 })

    gsap.from(".ts-icon", { scrollTrigger: {
      trigger: ".timer",
      start: "top 50%",
      end: "bottom 65%",
      scrub:true,
    }, y:-20,opacity: 0, duration:0.7, delay: 0.3 })

    gsap.from(".angular-icon", { scrollTrigger: {
      trigger: ".timer",
      start: "top 50%",
      end: "bottom 65%",
      scrub:true,
    }, y:-20,opacity: 0, duration:0.7, delay: 0.4 })

    gsap.from(".svg-icon", { scrollTrigger: {
      trigger: ".timer",
      start: "top 50%",
      end: "bottom 65%",
      scrub:true,
    }, y:-20,opacity: 0, duration:0.7, delay: 0.5 })

    gsap.from(".gsap-icon", { scrollTrigger: {
      trigger: ".timer",
      start: "top 50%",
      end: "bottom 55%",
      scrub:true,
    }, y:-20,opacity: 0, duration:0.7, delay: 0.6})

    gsap.from(".text-wrapper", {scrollTrigger:{
      trigger: ".superpowers-text",
      start: "top 60%",
      end: "top 20%",
      scrub:1,
    }, y:-40,opacity: 0, duration:1})

    gsap.from(".extra-abilities", {scrollTrigger:{
      trigger: ".superpowers-text",
      start: "top 60%",
      end: "top 20%",
      scrub:1,
    }, y:-30,opacity: 0, duration:1})
    
    gsap.from(".my-projects-text", {scrollTrigger:{
      trigger: ".my-projects-text",
      start: "top 90%",
      end: "top 20%",
      scrub:1,
    }, y:-30,opacity: 0, duration:1})

    gsap.from(".project-one", {scrollTrigger:{
      trigger: ".my-projects-text",
      start: "top 70%",
      end: "top top",
      scrub:1,
    },opacity: 0, duration:1})

    gsap.from(".project-two", {scrollTrigger:{
      trigger: ".my-projects-text",
      start: "top 70%",
      end: "top top",
      scrub:1,
    },opacity: 0, duration:1})

    gsap.from(".project-three", {scrollTrigger:{
      trigger: ".my-projects-text",
      start: "top 70%",
      end: "top top",
      scrub:1,
    },opacity: 0, duration:1})
  }

  ngOnInit(): void {
    this.hoverMySkills();
    this.displayTimeSinceIStartedToCode();
    this.scrollTriggerAnimations();
  }
}
