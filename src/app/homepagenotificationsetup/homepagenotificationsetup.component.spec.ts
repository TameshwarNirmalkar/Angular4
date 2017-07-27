import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagenotificationsetupComponent } from './homepagenotificationsetup.component';

describe('HomepagenotificationsetupComponent', () => {
  let component: HomepagenotificationsetupComponent;
  let fixture: ComponentFixture<HomepagenotificationsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagenotificationsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagenotificationsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
