import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyriBnossLAngularComponent } from './ayri-bnoss-l-angular.component';

describe('AyriBnossLAngularComponent', () => {
  let component: AyriBnossLAngularComponent;
  let fixture: ComponentFixture<AyriBnossLAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyriBnossLAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyriBnossLAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
