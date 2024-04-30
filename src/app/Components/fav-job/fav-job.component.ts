import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Logic } from '../../logic.service';



export interface JobData {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
  isSelectedFav: boolean
} 

@Component({
  selector: 'app-fav-jobs',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './fav-job.component.html',
  styleUrl: './fav-job.component.css'
})
export class FavJobComponent implements OnInit {
  noPreferredJob: string = 'No favorite job is selected here!';
  isPreferred: boolean = false;
  preferredJobList: JobData[] = [];

  constructor(private dataService: Logic,
    private router: Router){}

  ngOnInit(): void {
    if (localStorage['favJobList']) {
      this.preferredJobList = JSON.parse(localStorage.getItem('favJobList') || '{}');
    }
  }

  jobDetail(selectedJob: JobData) {
    this.dataService.SelectedJob = selectedJob;
    this.router.navigate(['/jobDetails']);
  }
}
