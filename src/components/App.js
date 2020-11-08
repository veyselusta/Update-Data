import React , {useState} from "react";
import ReactDOM from "react-dom";
import "./app.css";


export default function App() {
    const [name , setName] = useState("")
    const [age , setAge] = useState(0)

    const changeName = (e)=>{setName(e.target.value)}

    const changeAge = (e)=>{setAge(+e.target.value)}


  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      <div className="input-display">
        <p>Display Name:{name} </p>
        <p>Display Age:{age} </p>
      </div>

      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input onChange={changeName} className="input" type="text" placeholder="William" />
        </div>

        <div className="field">
          <label className="label">Age: </label>
          <input onChange={changeAge} className="input" type="number" placeholder="38" />
        </div>
      </div>
    </div>
  );
}
