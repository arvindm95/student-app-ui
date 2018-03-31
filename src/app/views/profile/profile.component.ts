import { Component, OnInit } from '@angular/core';
import {
  CardAnimation1, CardAnimation2, CardAnimation3,
  CardAnimation4, CardAnimation5, CardAnimation6,
  FadeIn, FadeIn1, FadeIn2,
  LoopAnimation, SlideInFromRight, SizeChange
} from '../../animation.constants';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.services';
import { NotificationsService } from 'angular2-notifications';
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
  questions_teacher: any = [
    /* {
      question:'Did you choose this course with passion?',
      answer:'yes'
    } */
  ];
  profileDetails: any;
  semesterDetails: any;
  studentQuestions: any;
  teacherQuestions: any;
  lastQuestionIndex: any;
  lastQuestionTeacherIndex: any;
  progressStage1: any;
  progressStage2: any;
  progressStage3: any;
  progressStage4: any;
  teacherId: any;
  studentId: any;
  predictedCourse: any;
  userRole: any;
  predictionDetails: any;
  constructor(private service: HttpService, private route: ActivatedRoute, private _notificationsService: NotificationsService) {

  }

  ngOnInit() {
    this.currentTab = 'tab1';

    this.route.params.subscribe((params) => {
      this.studentId = params['id'];
      this.teacherId = params['teacherId'];
      this.userRole = params['role'];
      this.getStudentDetails(params['id']);
      this.getSemesterDetails(params['id']);
      this.getStudentQuestions(params['id']);
      this.getTeacherQuestions(params['id']);
    });

    this.predictionDetails = [];
  }

  switchTab(tab) {
    this.currentTab = tab;
  }

  saveTeacherAnswer(answer, question) {
    if (this.lastQuestionTeacherIndex <= 5) {
      this.postTeacherAnswer(answer, question.question_id);
    }
    question.question_answer = answer;
  }

  pushNewTeacherQuestion(answer, question) {
    if (this.lastQuestionTeacherIndex <= 5) {
      this.postTeacherAnswer(answer, question.question_id);
    }
    question.question_answer = answer;
  }


  postTeacherAnswer(answer, questionId) {
    this.questions_teacher.push(this.teacherQuestions[++this.lastQuestionTeacherIndex]);
    let request = {
      teacher_id: this.teacherId,
      student_id: this.studentId,
      question_id: questionId,
      question_answer: answer
    };
    console.log(request);
    this.service.post('/teacher/questions/save', JSON.stringify(request)).then((data) => {
      console.log(data);
    }).catch((error) => {

    });
  }
  saveAnswer(answer, question) {
    if (this.lastQuestionIndex <= 5) {
      this.postStudentAnswer(answer, question.question_id);
    }

    question.question_answer = answer;
  }

  postStudentAnswer(answer, questionId) {
    this.questions.push(this.studentQuestions[++this.lastQuestionIndex]);
    let request = {
      student_id: this.studentId,
      question_id: questionId,
      question_answer: answer
    };
    console.log(request);
    this.service.post('/student/questions/save', JSON.stringify(request)).then((data) => {
      console.log(data);
    }).catch((error) => {

    });
  }

  pushNewQuestion(answer, question) {
    if (this.lastQuestionIndex <= 5) {
      this.postStudentAnswer(answer, question.question_id);
    }

    question.question_answer = answer;
    // console.log(this.questions);

    /* this.questions.push({
      question:'Did you choose this course with passion?',
      answer:'yes'
    }) */
  }

  getStudentDetails(id) {
    this.service.get('/student/' + id).then((data) => {
      console.log(data);
      this.profileDetails = data;
      this.isLoaded = true;
    }).catch((error) => {

    });
  }

  getSemesterDetails(id) {
    this.service.get('/student/marks/' + id).then((data) => {
      console.log(data);
      this.semesterDetails = data;
      // this.isLoaded = true;
    }).catch((error) => {

    });
  }

  getStudentQuestions(id) {
    this.service.get('/student/questions/' + id).then((data) => {
      console.log(data);
      this.studentQuestions = data;
      // this.isLoaded = true;

      // for(let question of this.studentQuestions){
      for (let i = 0; i < this.studentQuestions.length; i++) {
        let question = this.studentQuestions[i];
        if (question.question_answer != null) {
          this.questions.push(question);
        } else {
          this.questions.push(question);
          this.lastQuestionIndex = i;
          break;
        }
      };
    }).catch((error) => {

    });
  }

  getTeacherQuestions(id) {
    let url = '/teacher/questions/' + 52 + "?student=" + this.studentId;;
    if (this.teacherId) {
      url = '/teacher/questions/' + 52 + "?student=" + this.studentId;
    }
    this.service.get(url).then((data) => {
      console.log(data);
      this.teacherQuestions = data;
      // this.isLoaded = true;

      // for(let question of this.studentQuestions){
      for (let i = 0; i < this.teacherQuestions.length; i++) {
        let question = this.teacherQuestions[i];
        if (question.question_answer != null) {
          this.questions_teacher.push(question);
        } else {
          this.questions_teacher.push(question);
          this.lastQuestionTeacherIndex = i;
          break;
        }
      };
    }).catch((error) => {

    });
  }


  savePrediction(result) {
    var today = new Date().toLocaleString();

    var result = result;


    this.predictionDetails.push({
      date: today,
      status: result
    });

    //console.log(this.predictionDetails);

    localStorage.setItem('prediction', JSON.stringify(this.predictionDetails));

  }
  viewHistory() {

    let predictionDetails = JSON.parse(localStorage.getItem('prediction'));
    this.predictionDetails = predictionDetails;

  }

  showSuccess() {

    this._notificationsService.success('Thanks!', 'Prophet AI will learn from your feedback.');
  }

  showFailure() {

    this._notificationsService.warn('Sorry!', 'Prophet AI will learn from its mistake.');
  }

  showPrediction() {
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

    this.service.get('/student/questions/' + this.studentId).then((data) => {
      console.log(data);
      //  this.studentQuestions = data;
      let testData = `{
        "Q1": [`+ (data[0]['question_answer'] == 'yes' ? 1.0 : 0.0) + `],
        "Q2": [`+ (data[1]['question_answer'] == 'yes' ? 1.0 : 0.0) + `],
        "Q3": [`+ (data[2]['question_answer'] == 'yes' ? 1.0 : 0.0) + `],
        "Q4": [`+ (data[3]['question_answer'] == 'yes' ? 1.0 : 0.0) + `],
        "Q5": [`+ (data[4]['question_answer'] == 'yes' ? 1.0 : 0.0) + `]  
    }`;
      this.predictCall(testData);

    }).catch((error) => {

    });

  }

  predictCall(toSend) {
    this.service.postLocal('http://localhost:5000/predict', (toSend)).then((data) => {
      //     student['prediction'] = data['prediction'].toLowerCase();
      //  console.log('called 8');
      this.predictedCourse = data['prediction'];
      if (this.predictedCourse == 'SW') {
        this.predictedCourse = 'Software Developer';
      } else if (this.predictedCourse == 'AI') {
        this.predictedCourse = 'Artificial Intelligence';
      } else if (this.predictedCourse == 'Cyber') {
        this.predictedCourse = 'Cyber Security';
      }
      console.log(this.predictedCourse, 'aa');

      this.savePrediction(this.predictedCourse);
    }).catch((error) => {
      //this.savePrediction("dropout");
    });
  }

}
