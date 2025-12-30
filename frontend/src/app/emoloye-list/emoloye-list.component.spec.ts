import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoloyeListComponent } from './emoloye-list.component';

describe('EmoloyeListComponent', () => {
  let component: EmoloyeListComponent;
  let fixture: ComponentFixture<EmoloyeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmoloyeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmoloyeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
