import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaChatComponent } from './sideba-chat.component';

describe('SidebaChatComponent', () => {
  let component: SidebaChatComponent;
  let fixture: ComponentFixture<SidebaChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebaChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
