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

    gsap.from(".skill", { scrollTrigger: {
      trigger: ".timer",
      start: "top 50%",
      end: "bottom 65%",
      scrub:true,
    }, y:-20,opacity: 0, duration:0.7 })

    gsap.from(".text-wrapper", {scrollTrigger:{
      trigger: ".superpowers-text",
      start: "top 65%",
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

    gsap.from(".project", {scrollTrigger:{
      trigger: ".my-projects-text",
      start: "top 70%",
      end: "top top",
      scrub:1,
    },opacity: 0, duration:1})
  }

  ngOnInit(): void {
    this.displayTimeSinceIStartedToCode();
    this.scrollTriggerAnimations();
  }
}
