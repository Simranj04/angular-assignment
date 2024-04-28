import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavJobComponent } from './fav-job.component';
describe('FavJobComponent', () => {
  let component: FavJobComponent;
  let fixture: ComponentFixture<FavJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
