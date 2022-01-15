import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

  searchKey: string = '';
  page: number = 1;
  subscription: Subscription;

  query: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  doSearch() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        searchKey: this.query,
        page: this.page
      }
    };
    this.router.navigate([], navigationExtras);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
