import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  human!: String
  cm!: number
  kg!: number
  answerHuman = ""
  answerValue = ""
  answerInfo =""

  calculate(){
    if (this.human== null || this.cm==null || this.kg==null ) {
      alert("Feel out the input fields!!!");
    }
    else{
      var value = parseFloat(this.bmi(this.kg, (this.cm/100)));
      this.answerHuman = "Gender: " + this.human.toString();
      this.answerValue= "BMI-Value: "+ value.toString();
      if (value < 18.5) {
        this.answerInfo = "Underweight"
      }
      if (value >= 18.5 && value <= 24.9) {
        this.answerInfo = "Normal weight"
      } 
      if (value >=25 && value <= 29.9) {
        this.answerInfo = "Overweight"
      }
      if (value >= 30 && value <=50) {
        this.answerInfo = "Obesity (adiposity)"
      }
      else {
        alert("please, check your entries!!")
      }
    }
  }

  bmi(kg: number, m: number){
    var bmiValue = (kg/(m*m));
    return bmiValue.toFixed(2) ;
  }
}
