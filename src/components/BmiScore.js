
function BmiScore({bmiNo,bmiType,changeWeight}) {
    // const {bmiNo,bmiType} = props;
  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmiNo}</div>
      </div>
      <div className="fs-3 fw-bold text-primary">{bmiType}</div>
      {
        changeWeight.type === "positive" && (<div className="fs-4">You need to lose <span className="fw-bold">{changeWeight.weight} Kg</span></div>)
      }
      {
        changeWeight.type === "negative" && (<div className="fs-4">You need to gain <span className="fw-bold">{changeWeight.weight} Kg</span></div>)
      }
      {
        changeWeight.type === "normal" && (<div className="fs-4">Your weight is normal.</div>)
      }
    </div>
  )
}

export default BmiScore