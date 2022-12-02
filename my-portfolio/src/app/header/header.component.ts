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


  //Disable scrolling while animations are in progress
  hideOverflowOnStart() {
    document.body.style.overflowX = "hidden"
    
  }

  //Enable text intro animations
  runTextAnimations() {
    gsap.from(".name", {opacity: 0,delay:1, duration:0.5});
  }  

  //Enable navigation bar and image intro animations, provide skip animations
  runNavbarAndImageAnimations() {
    gsap.from(".navbar", {opacity:0, duration: 0.7, delay:0.3, y: -20});
    gsap.from(".image", {opacity: 0, duration: 0.7, delay:0.3, y:20});

    }
  
    //Show blobs when all intro animations ends
   showBlobs() {
    gsap.from(".blob-one", {opacity:0, duration: 0.5, delay:1});
    gsap.from(".blob-one-text", {opacity:0, duration: 0.5, delay:1});
    gsap.from(".blob-two", {opacity:0, duration: 0.5, delay:1});
    gsap.from(".blob-two-text", {opacity:0, duration: 0.5, delay:1});
    gsap.from(".blob-three", {opacity:0, duration: 0.5, delay:1});
    gsap.from(".blob-three-text", {opacity:0, duration: 0.5, delay:1});
    gsap.from(".blob-four", {opacity:0, duration: 0.5, delay:1});
    gsap.from(".blob-four-text", {opacity:0, duration: 0.5, delay:1});
    gsap.from(".blob-five", {opacity:0, duration: 0.5, delay:1});
    gsap.from(".blob-five-text", {opacity:0, duration: 0.5, delay:1});
  }  

  //Enable blob intro animations
  runBlobTextAnimations() {
    gsap.to(".blob-one-text", { y: -10, duration: 3, ease: "none", yoyo:true, repeat: -1});
    gsap.to(".blob-two-text", { x: 10, duration: 3, ease: "none", yoyo:true, repeat: -1});
    gsap.to(".blob-three-text", { y: 10, x: -5, duration: 3, ease: "none", yoyo:true, repeat: -1});
    gsap.to(".blob-four-text", { x: 10, y: -5, duration: 3, ease: "none", yoyo:true, repeat: -1});
    gsap.to(".blob-five-text", { y: -10, x: 5, duration: 3, ease: "none", yoyo:true, repeat: -1});
  }

  //Adding smooth scroll funcionality to navbar
  scrollToAboutMe() {
    window.scrollTo(0, 0);
    this.hideMenu();
  }

  scrollToSkills() {
    document.getElementById("skills")?.scrollIntoView({behavior:'smooth'});
    this.hideMenu();
  }

  scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({behavior:'smooth'});
    this.hideMenu();
  }

  scrollToContact() {
    window.scrollTo(0, 10000);
    this.hideMenu();
  }

  // PHONE MODE - opens burger menu
  showMenu() {
    let burger: HTMLElement = document.getElementById("burger")!;
    let navbar: HTMLElement = document.getElementById("navbar")!;
    let list: HTMLElement = document.getElementById("list")!;
    let ghostBurger: HTMLElement = document.getElementById("ghost")!;
    ghostBurger.classList.toggle("active")
    list.classList.toggle("active");
    navbar.classList.toggle("active");
    burger.classList.toggle("active");
    document.body.style.overflowY = "hidden"
  }

  // PHONE MODE - quits burger menu
  hideMenu() {
    this.showMenu();
    document.body.style.overflowY = "visible"
    
  }

  runPhoneIntroAnimations() {
    gsap.from(".phone-info-wrapper", {y: -20, opacity:0, delay:0.5, duration: 1})
    gsap.from(".phone-info-list", {x: -20, opacity:0, delay: 0.5, duration:1})
    gsap.from(".phone-image", {y: 20, opacity:0, delay: 0.5, duration:1})
    gsap.from(".phone-nav", {y: -20, opacity:0, delay: 0.5, duration:1})
  }

  // Run different animations depend of if user is on PC or Mobile
  runAllAnimations() {
    if (window.innerWidth > 650) {
      this.runBlobTextAnimations();
    this.runTextAnimations();  
    this.showBlobs();
    this.runNavbarAndImageAnimations();
    } else this.runPhoneIntroAnimations();
  }
  
  ngOnInit(): void {
    this.hideOverflowOnStart();
    this.runAllAnimations();  
  }
}
