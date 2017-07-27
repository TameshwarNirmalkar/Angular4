import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionrequestsComponent } from './productionrequests.component';

describe('ProductionrequestsComponent', () => {
  let component: ProductionrequestsComponent;
  let fixture: ComponentFixture<ProductionrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
