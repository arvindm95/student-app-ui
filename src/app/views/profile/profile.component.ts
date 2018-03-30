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
  progressStage1: any;
  progressStage2: any;
  progressStage3: any;
  progressStage4: any;
  studentId:any;
  constructor(private service: HttpService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.currentTab = 'tab1';
    
    this.route.params.subscribe((params) => {
      this.studentId = params['id'];
      this.getStudentDetails(params['id']);
      this.getSemesterDetails(params['id']);
      this.getStudentQuestions(params['id']);
    });
  }

  switchTab(tab){
    this.currentTab = tab;
  }

  saveAnswer(answer, question){
    this.postStudentAnswer(answer, question.question_id);
    question.question_answer = answer;
  }

  postStudentAnswer(answer,questionId ){
    this.questions.push(this.studentQuestions[++this.lastQuestionIndex]);
    let request = {
      student_id:this.studentId,
      question_id:questionId,
      question_answer:answer
    };
    console.log(request);
    this.service.post('/student/questions/save',JSON.stringify(request)).then((data)=>{
      console.log(data);
    }).catch((error)=>{

    });
  }
 
  pushNewQuestion(answer, question){
    this.postStudentAnswer(answer, question.question_id;
    question.question_answer = answer;
    // console.log(this.questions);
 
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

    showPrediction(){
      this.progressStage1 = true;
      this.progressStage2 = false;
      this.progressStage3 = false;
      this.progressStage4 = false;
      setTimeout(() => {
        this.progressStage1 = false;
        this.progressStage2 = true;
        this.progressStage3 = false;
        this.progressStage4 = false;
      }, 2000);
      setTimeout(() => {
        this.progressStage1 = false;
        this.progressStage2 = false;
        this.progressStage3 = true;
        this.progressStage4 = false;
      }, 4000);
      setTimeout(() => {
        this.progressStage1 = false;
        this.progressStage2 = false;
        this.progressStage3 = false;
        this.progressStage4 = true;
      }, 6000);
    }

}
