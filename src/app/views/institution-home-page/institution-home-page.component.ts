import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  CardAnimation1, CardAnimation2, CardAnimation3,
  CardAnimation4, CardAnimation5, CardAnimation6,
  FadeIn, FadeIn1, FadeIn2,
  LoopAnimation, SlideInFromRight, SizeChange
} from '../../animation.constants';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institution',
  templateUrl: './institution-home-page.component.html',
  styleUrls: ['./institution-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [CardAnimation1, CardAnimation2, CardAnimation3, CardAnimation4, CardAnimation5, CardAnimation6, FadeIn, FadeIn1, FadeIn2,
    LoopAnimation, SlideInFromRight, SizeChange
  ]
})
export class InstitutionHomepage implements OnInit {

  isAdmin: any;
  carouselBanner: any;
  isLoaded: boolean;
  currentQuestionNo: any;
  isProcessing: boolean;
  showLoader: boolean;
  locationTags: any = [];
  locationOptions: any = [
    'Chennai',
    'Delhi',
    'Jalandhar',
    'Ahmedabad',
    'Noida',
    'Pondicherry',
    'Trivandrum',
    'Banglore',
    'Mysore',
    'Amritsar',
    'Chandigarh',
    'Calcutta',
    'Madurai',
    'Coimbatore',
    'Phagwara',
    'Itarsi',
    'Bhopal',
    'Mumbai',
    'Kanpur',
    'Kharagpur',
    'Hyderabad'

  ];

  questionsMock: any = [
    {
      'questionNo': 1,
      'question': ''

    }
  ];

  constructor(private service: HttpService, private route: ActivatedRoute, private router: Router) {
    this.setCarouselProperty();

    this.isAdmin = localStorage.getItem("isAdmin");
  }

  ngOnInit() {

    setTimeout(() => {
      this.isLoaded = true;
    }, 0);

    this.currentQuestionNo = 1;
  }

  setCarouselProperty() {
    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      // interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 250px;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      // loop: true,
      touch: true
    }
  }

  nextQuestion() {
    this.currentQuestionNo++;
  }

  processFilters() {
    this.isProcessing = true;

    setTimeout(() => {
      this.showLoader = true;
      this.redirectToInstitution();

    }, 500);
  }

  redirectToInstitution() {
    setTimeout(() => {
     // this.router.navigateByUrl('/app/students-list');
    /*  if(document.getElementById('checkboxOne')['value'] == "checked"){
      this.router.navigate(['/app/students-list',true,false,false,false]);
     } */
      this.router.navigate(['/app/students-list'])
    }, 5000);

  }

  onTagsChanged(event) {

  }
}
