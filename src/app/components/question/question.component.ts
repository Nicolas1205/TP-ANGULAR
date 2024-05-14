import { Component, Input } from '@angular/core'
import { Pregunta } from '../../model/Pregunta';

@Component({
  selector: 'question',
  standalone: true,
  templateUrl: './question.component.html',
  imports: [],
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() pregunta!: Pregunta ;
  //@Input() currentQuestionIndex!: Object;

  nextQuestion() {
    //this.currentQuestionIndex
  }
}

