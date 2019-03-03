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
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  animations: [CardAnimation1, CardAnimation2, CardAnimation3, CardAnimation4, CardAnimation5, CardAnimation6, FadeIn, FadeIn1, FadeIn2,
    LoopAnimation, SlideInFromRight, SizeChange
  ]
})
export class StudentsListComponent implements OnInit {
  isLoaded: boolean;
  studentsList: any = [];
  location: any;
  role: any;
  studentsListFinal: any;
  teacherId: any;
  isRightSectionOpen: Boolean;
  count: any;
  institutionList: any = [];
  parameters: any = [];
  selectedInstitution: any;
  isAdmin: any;
  constructor(private service: HttpService, private route: ActivatedRoute, private router: Router, private _notificationsService: NotificationsService) {

    this.isAdmin = localStorage.getItem("isAdmin");

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.role = params['role'];
      this.teacherId = params['id'];
      this.count = 0;
      this.getAllStudents();
    });

    this.getDataBasedOnAll();
  }
  getAllStudents() {
    // this.service.get('/student/all').then((data)=>{
    //   console.log(data);
    this.studentsList = [
      {
        'student_gender': 'M',
        'student_first_name': 'John',
        'student_last_name': 'Bruno',
        'student_regno': '1001',
        'student_department': 'CSE',
        'student_email': 'jbruno@gmail.com',
        'prediction': '73.3'
      },
      {
        'student_gender': 'F',
        'student_first_name': 'Natalie',
        'student_last_name': 'Mars',
        'student_regno': '1002',
        'student_department': 'IT',
        'student_email': 'nmars@gmail.com',
        'prediction': '82.1'
      }
    ];

    this.institutionList = [{
      'name': 'Indian Institute of Science',
      'location': 'Bangalore',
      'rank': '1',
      'code': '3212',
      'latitude': 12.95798,
      'longitude': 77.401207,
      'parameters': [
        {
          'name':'Student teacher Ratio',
          'value': '50'
        },
        {
          'name':'Patents',
          'value': '20'
        },
        {
          'name':'Infrastructure',
          'value': '80'
        },
        {
          'name':'cited papers',
          'value':'70'
        },
        {
          'name':'Hostel facility',
          'value':'60'
        }
      ]
    },
    {
      'name': 'Jawaharlal Nehru University',
      'location': 'Delhi',
      'rank': '2',
      'code': '4212',
      'latitude': 26.633243,
      'longitude': 77.21879,
      'parameters': [
        {
          'name':'Student teacher Ratio',
          'value': '40'
        },
        {
          'name':'Patents',
          'value': '60'
        },
        {
          'name':'Infrastructure',
          'value': '70'
        },
        {
          'name':'cited papers',
          'value':'75'
        },
        {
          'name':'Hostel facility',
          'value':'50'
        }
      ]
    },
    
    {
      'name': 'Banaras Hindu University',
      'location': 'Delhi',
      'rank': '3',
      'code': '98745',
      'latitude': 25.30958,
      'longitude': 83.00569,
      'parameters': [
        {
          'name':'Student teacher Ratio',
          'value': '20'
        },
        {
          'name':'Patents',
          'value': '80'
        },
        {
          'name':'Infrastructure',
          'value': '60'
        },
        {
          'name':'cited papers',
          'value':'70'
        },
        {
          'name':'Hostel facility',
          'value':'60'
        }
      ]
    },
        {
          'name': 'Anna University',
          'location': 'Chennai',
          'rank': '4',
          'code': '5212',
          'latitude': 25.30958,
          'longitude': 83.00569,
          'parameters': [
            {
              'name':'Student teacher Ratio',
              'value': '70'
            },
            {
              'name':'Patents',
              'value': '20'
            },
            {
              'name':'Infrastructure',
              'value': '80'
            },
            {
              'name':'cited papers',
              'value':'70'
            },
            {
              'name':'Hostel facility',
              'value':'40'
            }
          ]
        },
        {
          'name': 'University of delhi',
          'location': 'Delhi',
          'rank': '5',
          'code': '7212',
          'latitude': 28.70702,
          'longitude': 77.21225,
          'parameters': [
            {
              'name':'Student teacher Ratio',
              'value': '50'
            },
            {
              'name':'Patents',
              'value': '70'
            },
            {
              'name':'Infrastructure',
              'value': '85'
            },
            {
              'name':'cited papers',
              'value':'60'
            },
            {
              'name':'Hostel facility',
              'value':'60'
            }
          ]
        }
  ];

    this.studentsListFinal = this.studentsList/* .slice(0,20) */;
    this.location = [{ lat: 11.059821, lng: 78.387451 }];
    // this.calculatePrediction(this.studentsListFinal);

    this.isLoaded = true;

    // }).catch((error)=>{

    // });
  }
  openProfile(student) {
    // [routerLink] = "['/app/profile', {'role':role,'id': student.student_id}]"
    this.router.navigate(['app/profile', this.role, student.student_id, this.teacherId]);
  }


  calculatePrediction(studentsListFinal) {
    console.log('called 1');

    studentsListFinal.forEach((student, index) => {
      let toSend = {};
      toSend = `{    
        "M1": [`+ student.student_marks[0].subject_marks + `],
          "M2": [`+ student.student_marks[1].subject_marks + `],
          "M3": [`+ student.student_marks[2].subject_marks + `],
          "M4": [`+ student.student_marks[3].subject_marks + `],
          "sQ1": [0.0],
          "sQ2": [0.0],
          "sQ3": [0.0],
          "sQ4": [0.0],
          "sQ5": [1.0],
          "TQ1": [1.0],
          "TQ2": [0.0],
          "TQ3": [0.0],
          "TQ4": [0.0],
          "TQ5": [0.0]
          }`;

      /*  toSend["M1"] = [];
       toSend["M1"].push(student.student_marks[0].subject_marks); 
       toSend["M2"] = [];
       toSend["M2"].push(student.student_marks[1].subject_marks); 
       toSend["M3"] = [];
       toSend["M3"].push(student.student_marks[2].subject_marks); 
       toSend["M4"] = [];
       toSend["M4"].push(student.student_marks[3].subject_marks); 
        */
      // toSend["M4"].push(student.student_marks[3].subject_marks); 
      console.log('called loop', student);
      this.predictCall(student, toSend);

    });
  }

  predictCall(student, toSend) {
    this.service.postLocal('http://localhost:5001/predict', (toSend)).then((data) => {
      student['prediction'] = data['prediction'].toLowerCase();
      console.log('called 8');
    }).catch((error) => {

    });
  }


  openDetailsOnRight(institution) {

    this.isRightSectionOpen = true;
    this.location = [{ lat: institution.latitude, lng: institution.longitude }];
    
    this.parameters = institution['parameters'];

    this.selectedInstitution = institution;

  }

  closeDetailsOnRight() {
    this.isRightSectionOpen = false;
    this.selectedInstitution = null;
  }

  uploadFile(){
    this._notificationsService.success("In Progress", "Uploading file in background progress");

    setTimeout(() => {
      this._notificationsService.success("Success", "File uploaded successfully!!");
    }, 5000);
  }

  getDataBasedOnAll(){
    this.service.get('/rest/university/all').then((data) => {
     
      
     
    }).catch((error) => {

    });
    
  }

}
