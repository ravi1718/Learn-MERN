import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import {useState} from "react";

function App() {
  let [calVal,setCalVal]=useState("");
  const onButtonClick = (event)=>console.log("button clicked" + event);

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
     <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
