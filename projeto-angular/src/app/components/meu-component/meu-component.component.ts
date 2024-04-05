import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-meu-component',
  standalone: true,
  imports: [],
  templateUrl: './meu-component.component.html',
  styleUrl: './meu-component.component.css'
})
export class MeuComponentComponent {
  @Input() pessoaIteresses: string[] = ['Esportes', 'Leitura', 'Viagens', 'Programação'];
}
