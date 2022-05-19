import { useState } from "react";
import "./App.css";
import DropDown from "./components/Dropdown/DropDown";

function App() {
  const [data, setData] = useState([
    { key: "A", isSelected: false },
    { key: "B", isSelected: false },
    { key: "C", isSelected: false },
    { key: "D", isSelected: false },
    { key: "E", isSelected: false },
  ]);

 
 

  const submitHandler = ()=>{
    let keys = [];
    data.forEach((item)=>{
      if(item.isSelected) {
        keys.push(item.key)
      }
    })
    if(keys.length===3){
      console.log("Submitted",...keys);
    }
    else{
      console.error("Error! Select one from each dropdown.");
      alert("Error! Select one from each dropdown.");
    }
  }
  return (
    <div className="app">
      <div className="dropdowns">
      <DropDown data={data} setData={setData} />
      <DropDown data={data} setData={setData} />
      <DropDown data={data} setData={setData} />
      </div>
      <button className="button" onClick={submitHandler} >Submit</button>    
    </div>
  );
}

export default App;
