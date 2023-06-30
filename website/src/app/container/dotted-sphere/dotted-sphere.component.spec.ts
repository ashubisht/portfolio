import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DottedSphereComponent } from './dotted-sphere.component';

describe('DottedSphereComponent', () => {
  let component: DottedSphereComponent;
  let fixture: ComponentFixture<DottedSphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DottedSphereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DottedSphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
