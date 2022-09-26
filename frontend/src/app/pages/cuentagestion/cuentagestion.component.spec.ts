import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentagestionComponent } from './cuentagestion.component';

describe('CuentagestionComponent', () => {
  let component: CuentagestionComponent;
  let fixture: ComponentFixture<CuentagestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentagestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentagestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
