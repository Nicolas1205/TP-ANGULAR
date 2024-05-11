import { Component } from '@angular/core'
import { QuestionComponent } from '../question/question.component';
import { Pregunta } from '../../model/Pregunta';
import { words } from './words';

@Component({
  selector: 'questions',
  standalone: true,
  templateUrl: './questions.component.html',
  imports: [QuestionComponent],
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  questions: Pregunta[] = [ { palabra: "hola", opciones: [] } ]
  currentQuestionIndex = { index: 0} ;

}

