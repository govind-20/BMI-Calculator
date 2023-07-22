function calculatebmi() {
    //declare a variable to store the value of height and weight
    const weight=parseFloat(document.getElementById('weight').value);
    const height=parseFloat(document.getElementById('height').value);
    
    //valid value or not

    if(isNaN(height) || isNaN(weight) || height<=0 || weight<=0 ){
        document.getElementById('result').innerText='In valid value';
        return;
    }

    //bmi formula

    let bmiCalulator=weight/((height/100)*(height/100));
    let bmiValue=bmiCalulator.toFixed(2);
            

    //conditions

    let interpretation='';

    if( bmiCalulator<18.5){
        interpretation='Under Weight';
    }
    else if ( bmiCalulator >= 18.5 &&  bmiCalulator < 24.9) {
        interpretation = 'Normal weight';
      } else if (bmiCalulator >= 25 && bmiCalulator < 29.9) {
        interpretation = 'Overweight';
      } else {
        interpretation = 'Obese';
      }

// put interpretaion to the screen

document.getElementById('result').innerText=`Your BMI is ${bmiValue}. You are ${interpretation}.`

}