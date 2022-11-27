import { useState } from 'react';
import './App.css';
import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/Form'

function App() {
  const [show,setShow] = useState(false);  
  const [bmi,setBmi] = useState("0");
  const [bmiType,setbmiType] = useState("Not Calculated");
  const [changeWeight,setChangeWeight] = useState({ weight: "", type: ""});
  const [bmiRange,setbmiRange] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesitiyOne: { low: "", high: "" },
    obesitiyTwo: { low: "", high: "" },
    obesitiyThree: {high: "" },
  });
  const onFormSub = (w,h)=>{
    let b = calcBmi(w,h);
    setBmi(b);
    setbmiType(weightType(b));
    const range = {
      underWeight: { low: calcWeight(18.5, h) },
      normal: { low: calcWeight(18.5, h), high: calcWeight(24.9, h) },
      overWeight: { low: calcWeight(24.9, h), high: calcWeight(29.9, h) },
      obesitiyOne: { low: calcWeight(29.9, h), high: calcWeight(34.9, h) },
      obesitiyTwo: { low: calcWeight(34.9, h), high: calcWeight(39.9, h) },
      obesitiyThree: {high: calcWeight(40, h) },
    }
    setbmiRange(range);
    setChangeWeight(weightChange(b,w,range));
    setShow(true);
  }
  const calcBmi = (w,h)=> (w / (h * h)).toFixed(2);

  const calcWeight = (b,h)=> (b * h * h).toFixed(2);

  const weightType = (bmi) => {
    if(bmi < 18.5){
      return "Under weight";
    }else if((bmi > 18.5) && (bmi < 24.9)){
      return "Normal";
    }else if((bmi > 24.9) && (bmi < 29.9)){
      return "Over weight";
    }else if((bmi > 29.9) && (bmi < 34.9)){
      return "Obesity class I";
    }else if((bmi > 34.9) && (bmi < 39.9)){
      return "Obesity class II";
    }else if(bmi > 39.9){
      return "Obesity class III";
    }
  };

  const weightChange = (b,w,range)=>{
    let changeObj;
    if(b >24.9){
      changeObj = {
        weight : (w - range.normal.high).toFixed(2),
        type: "positive",
      };
      return changeObj;
    }else if(b < 18.5){
      changeObj = {
        weight :(range.normal.low - w).toFixed(2),
        type: "negative",
      };
      return changeObj;
    }else{
      changeObj = {weight:0 ,type: "normal"};
      return changeObj;
    }
  }

  return (
    <div className="conainer">
      <div className='row justify-content-center mt-5 mx-2'>
        <Form getData ={onFormSub}/>
      </div>
      {show && (
        <div className='row justify-content-center mt-5'>
          <div className='col-12 col-sm-6 mb-5'>
            <BmiScore bmiNo={bmi} bmiType={bmiType} changeWeight={changeWeight}/>
          </div>
          <div className='col-12 col-sm-6'>
            <BmiList range={bmiRange} bmi={bmi}/>
          </div>
        </div>
      ) }
    </div>
  );
}

export default App;
