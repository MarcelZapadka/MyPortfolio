import {Component, OnInit} from '@angular/core';
import {faClock, faArrowDown, faDumbbell, faSpinner} from '@fortawesome/free-solid-svg-icons';

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
  spinnerIcon = faSpinner;

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

  hideProjectsPhotos() {
      const calcPhoto = document.querySelector(".calculator-image");
      const overlay = document.querySelector(".overlay");
      const biblePhoto = document.querySelector(".bibleapp-image");
      const closeButton = document.querySelector(".close-button");
      calcPhoto?.classList.remove('active');
      overlay?.classList.remove('active');
      biblePhoto?.classList.remove('active');
      closeButton?.classList.remove('active');
  }

  ngOnInit(): void {
    this.hoverMySkills();
    this.displayTimeSinceIStartedToCode();
  }
}
