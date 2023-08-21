import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNotFoundComponent } from './chat-not-found.component';

describe('ChatNotFoundComponent', () => {
  let component: ChatNotFoundComponent;
  let fixture: ComponentFixture<ChatNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
