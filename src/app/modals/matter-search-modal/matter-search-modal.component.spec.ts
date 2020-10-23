import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterSearchModalComponent } from './matter-search-modal.component';

describe('MatterSearchModalComponent', () => {
  let component: MatterSearchModalComponent;
  let fixture: ComponentFixture<MatterSearchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatterSearchModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatterSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
