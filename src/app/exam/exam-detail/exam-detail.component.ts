import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {

  step: number;
  examId: number;

  data: any = {};

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
  }
  doIt() {
    let matrixUrlData = {
      id: this.examId,
      step: this.step
    };
    this.router.navigate(['/exam', 'detail', matrixUrlData]);
  }

}
