import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadExternalDataComponent } from './load-external-data.component';

describe('LoadExternalDataComponent', () => {
  let component: LoadExternalDataComponent;
  let fixture: ComponentFixture<LoadExternalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadExternalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadExternalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
