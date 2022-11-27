
function BmiList({range ,bmi}) {
  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4 fw-bold">Type</div>
            <div className="col-4 fw-bold">BMI</div>
            <div className="col-4 fw-bold">Weight</div>
          </div>
        </li>
        <li className= { bmi < 18.5 ? "border border-danger border-3 list-group-item" :"list-group-item"}>
          <div className="row">
            <div className="col-4 ">Under Weight</div>
            <div className="col-4 ">&lt; 18.5</div>
            <div className="col-4 ">&lt; {range.underWeight.low} Kg</div>
          </div>
        </li>
        <li className= { bmi > 18.5 && bmi < 24.8 ? "border border-danger border-3 list-group-item" :"list-group-item"}>
          <div className="row">
            <div className="col-4 ">Normal</div>
            <div className="col-4 ">18.5 - 24.9</div>
            <div className="col-4 ">{range.normal.low} Kg - {range.normal.high} Kg</div>
          </div>
        </li>
        <li className={ bmi > 24.9 && bmi < 29.9 ? "border border-danger border-3 list-group-item" :"list-group-item"}>
          <div className="row">
            <div className="col-4 ">Over Weight</div>
            <div className="col-4 ">24.9 - 29.9</div>
            <div className="col-4 ">{range.overWeight.low} Kg - {range.overWeight.high} Kg</div>
          </div>
        </li>
        <li className={ bmi > 29.9 && bmi < 34.9 ? "border border-danger border-3 list-group-item" :"list-group-item"}>
          <div className="row">
            <div className="col-4 ">Obesity Class I</div>
            <div className="col-4 ">24.9 - 34.9</div>
            <div className="col-4 ">{range.obesitiyOne.low} Kg - {range.obesitiyOne.high} Kg</div>
          </div>
        </li>
        <li className={ bmi > 34.9 && bmi < 39.9 ? "border border-danger border-3 list-group-item" :"list-group-item"}>
          <div className="row">
            <div className="col-4 ">Obesity Class II</div>
            <div className="col-4 ">34.9 - 39.9</div>
            <div className="col-4 ">{range.obesitiyTwo.low} Kg - {range.obesitiyTwo.high} Kg</div>
          </div>
        </li>
        <li className={ bmi > 39.9 ? "border border-danger border-3 list-group-item" :"list-group-item"}>
          <div className="row">
            <div className="col-4 ">Obesity Class III</div>
            <div className="col-4 ">&gt; 40</div>
            <div className="col-4 ">&gt; {range.obesitiyThree.high} Kg</div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default BmiList