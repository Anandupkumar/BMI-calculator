import { useState } from "react";

function Form({getData}) {
  const [alert,setAlert] = useState(false);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if(isNaN(height) || isNaN(weight)){
        setAlert(true);
        alert("Not a valid input")
    }else{
        getData(weight,height);
        setAlert(false);
        setHeight("");
        setWeight("");
    }   
  };

  return (
    <div className="col-sm-4 shadow rounded px-5">
      <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
      <form className="" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Weight (KG) :
          </label>
          <input
            type="test"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            className="form-control"
            id="weight"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Height (M) :
          </label>
          <input
            type="text"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            className="form-control"
            id="height"
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Get BMI" />
      </form>
      {(alert)&&<div className="alert alert-danger" role="alert">Please Enter valid input</div>}
    </div>
  );
}

export default Form;
