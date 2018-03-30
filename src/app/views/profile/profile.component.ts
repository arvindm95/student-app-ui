import { Component, OnInit } from '@angular/core';
import {
  CardAnimation1, CardAnimation2, CardAnimation3,
  CardAnimation4, CardAnimation5, CardAnimation6,
  FadeIn, FadeIn1, FadeIn2,
  LoopAnimation, SlideInFromRight, SizeChange
} from '../../animation.constants';
import { ActivatedRoute } from '@angular/router'; 
import { HttpService } from '../../services/http/http.services';
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
  isLoaded: boolean;
  questions: any = [
    /* {
      question:'Did you choose this course with passion?',
      answer:'yes'
    } */
  ];
  profileDetails: any;
  semesterDetails: any;
  studentQuestions: any;
  lastQuestionIndex: any;
  constructor(private service: HttpService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.currentTab = 'tab1';
    
    this.route.params.subscribe((params) => {
      
      this.getStudentDetails(params['id']);
      this.getSemesterDetails(params['id']);
      this.getStudentQuestions(params['id']);
    });
  }

  switchTab(tab){
    this.currentTab = tab;
  }

  pushNewQuestion(){
    this.questions.push(this.studentQuestions[++this.lastQuestionIndex]);
    /* this.questions.push({
      question:'Did you choose this course with passion?',
      answer:'yes'
    }) */
  }

    getStudentDetails(id){
      this.service.get('/student/'+id).then((data)=>{
        console.log(data);
        this.profileDetails = data;
        this.isLoaded = true;
      }).catch((error)=>{

      });
    }

    getSemesterDetails(id){
      this.service.get('/student/marks/'+id).then((data)=>{
        console.log(data);
        this.semesterDetails = data;
       // this.isLoaded = true;
      }).catch((error)=>{

      });
    }

    getStudentQuestions(id){
      this.service.get('/student/questions/'+id).then((data)=>{
        console.log(data);
        this.studentQuestions = data;
       // this.isLoaded = true;
      
       // for(let question of this.studentQuestions){
        for(let i = 0; i < this.studentQuestions.length;i++){
        let question = this.studentQuestions[i];
         if(question.question_answer != null){
          this.questions.push(question);
         }else{
          this.questions.push(question);
          this.lastQuestionIndex = i;
          break;
         }
       };
      }).catch((error)=>{

      });
    }


}
