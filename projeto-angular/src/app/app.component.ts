
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MeuComponentComponent } from './components/meu-component/meu-component.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,MeuComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "CheckPoint 1"
   mensagem: String = "Olá Mundo"
   interessesDaPessoa: string[] = ['Esportes', 'Leitura', 'Viagens', 'Programação']
}
