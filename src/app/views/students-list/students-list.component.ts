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
      this.isLoaded = true;
    }).catch((error)=>{

    });
  }
  openProfile(student){
   // [routerLink] = "['/app/profile', {'role':role,'id': student.student_id}]"
    this.router.navigate(['app/profile', this.role, student.student_id]);
  }
}
