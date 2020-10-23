import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterAddModalComponent } from './matter-add-modal.component';

describe('MatterAddModalComponent', () => {
  let component: MatterAddModalComponent;
  let fixture: ComponentFixture<MatterAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatterAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatterAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
