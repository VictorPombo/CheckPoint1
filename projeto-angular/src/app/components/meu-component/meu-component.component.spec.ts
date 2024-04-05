import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MeuComponentComponent } from './meu-component.component';

describe('MeuComponentComponent', () => {
  let component: MeuComponentComponent;
  let fixture: ComponentFixture<MeuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
