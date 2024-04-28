import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface JobData {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
  isSelectedFav: boolean
} 

@Injectable({
  providedIn: 'root'
})

export class Logic {
  selectedJobArray: JobData[] = [];
  duplicateArray : JobData[] = [];
  SelectedJob!: JobData;
  preferredJob: JobData[] = [];
  DuplicateJobList: JobData[] = [];
  
  
  constructor(private http: HttpClient) { }

featch() {
  const jobsUrl = '/jobs';
  return this.http.get<JobData[]>(jobsUrl);
}
}
