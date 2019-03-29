import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureSecComponent } from './picture-sec.component';

describe('PictureSecComponent', () => {
  let component: PictureSecComponent;
  let fixture: ComponentFixture<PictureSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
