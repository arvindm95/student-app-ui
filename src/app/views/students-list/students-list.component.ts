import { Component, OnInit } from '@angular/core';
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
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  animations: [CardAnimation1, CardAnimation2, CardAnimation3, CardAnimation4, CardAnimation5, CardAnimation6, FadeIn, FadeIn1, FadeIn2,
    LoopAnimation, SlideInFromRight, SizeChange
]
})
export class StudentsListComponent implements OnInit {
  isLoaded:boolean;
  studentsList: any =[];
  role: any;
  studentsListFinal: any;
  constructor(private service: HttpService, private route: ActivatedRoute,private router: Router) { 

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.role = params['role'];
      this.getAllStudents();
    });
  }
  getAllStudents(){
    this.service.get('/student/all').then((data)=>{
      console.log(data);
      this.studentsList = data;
      let tempArray  = data;
      this.studentsListFinal = this.studentsList.slice(0,20);
      
      this.calculatePrediction(this.studentsListFinal);

      this.isLoaded = true;
    }).catch((error)=>{

    });
  }
  openProfile(student){
   // [routerLink] = "['/app/profile', {'role':role,'id': student.student_id}]"
    this.router.navigate(['app/profile', this.role, student.student_id]);
  }
  calculatePrediction(studentsListFinal){
    console.log('called 1');
    
    studentsListFinal.forEach((student,index) => {
      let toSend = {};
      toSend = `{    
        "M1": [61.0],
          "M2": [76.0],
          "M3": [61.0],
          "M4": [81.0],
          "sQ1": [1.0],
          "sQ2": [1.0],
          "sQ3": [1.0],
          "sQ4": [1.0],
          "sQ5": [1.0],
          "TQ1": [1.0],
          "TQ2": [1.0],
          "TQ3": [1.0],
          "TQ4": [1.0],
          "TQ5": [1.0]
          }`;
          console.log('called loop');
    //  toSend["M1"] = [];
    //  toSend["M1"].push(student)    
      this.predictCall(student, toSend);

    });
  }

  predictCall(student, toSend){
    this.service.postLocal('http://localhost:5001/predict', (toSend)).then((data)=>{
        student['prediction'] = data['prediction'].toLowerCase();
        console.log('called 8');
      }).catch((error)=>{
  
      });
  }

}
