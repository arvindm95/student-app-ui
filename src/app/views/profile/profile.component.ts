import { Component, OnInit } from '@angular/core';
import {
  CardAnimation1, CardAnimation2, CardAnimation3,
  CardAnimation4, CardAnimation5, CardAnimation6,
  FadeIn, FadeIn1, FadeIn2,
  LoopAnimation, SlideInFromRight, SizeChange
} from '../../animation.constants';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [CardAnimation1, CardAnimation2, CardAnimation3, CardAnimation4, CardAnimation5, CardAnimation6, FadeIn, FadeIn1, FadeIn2,
    LoopAnimation, SlideInFromRight, SizeChange
]
})
export class ProfileComponent implements OnInit {

  currentTab: any;
  questions: any = [
    {
      question:'Did you choose this course with passion?',
      answer:'yes'
    }
  ];
  constructor() {

   }

  ngOnInit() {
    this.currentTab = 'tab1';
  }

  switchTab(tab){
    this.currentTab = tab;
  }

  pushNewQuestion(){
    this.questions.push({
      question:'Did you choose this course with passion?',
      answer:'yes'
    })
  }

}
