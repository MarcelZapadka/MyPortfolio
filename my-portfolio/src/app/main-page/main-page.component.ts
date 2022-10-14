import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {faAddressCard, faStar, faFlask, faPhone } from '@fortawesome/free-solid-svg-icons';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  starIcon = faStar;
  aboutIcon = faAddressCard;
  flaskIcon = faFlask;
  phoneIcon = faPhone;

  scrollToAboutMe() {
    document.getElementById("me")?.scrollIntoView({behavior:'smooth'})
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
  }
}
