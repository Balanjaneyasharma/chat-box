import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeChatComponent } from './welcome-chat.component';

describe('WelcomeChatComponent', () => {
  let component: WelcomeChatComponent;
  let fixture: ComponentFixture<WelcomeChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
