import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  funkcja() {
    gsap.to(".two" , {
    scrollTrigger: {
      trigger: ".two",
      start: "top center",
      markers: true,
    },
      x: 400,
    })
  }
  
  ngOnInit(): void {
    this.funkcja()
  }
}
