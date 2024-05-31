import { useEffect, useState } from 'react'
import './App.css'
import { questions, noTexts, yesTexts } from './db.ts';

const App = () => {
  const [count, setCount] = useState(0);
  const [yesSize, setYesSize] = useState<number>(14);
  const [yesBtnVisible, setYesBtnVisible] = useState<boolean>(true);
  const [noBtnVisibile, setNoBtnVisibile] = useState<boolean>(true);
  const [yesText, setYesText] = useState<string>(yesTexts[0]);
  const [noText, setNoText] = useState<string>(noTexts[0]);
  const [mainText, setMainText] = useState<string>(questions[0]);

  const handleYesClick = () => {
    setYesBtnVisible(false);
    setNoBtnVisibile(false);
    setMainText("obaaa, te amos muitos!!");
  }

  const handleNoClick = () => {
    setCount(count + 1);
    setYesSize(yesSize + 4)
    setNoText(noTexts[count])
    setYesText(yesTexts[count])
    setMainText(questions[count]);
  }

  useEffect(() => {
    if (count == questions.length - 1) {
      setYesBtnVisible(false);
      setNoBtnVisibile(true);
    }
    else if (count == questions.length) {
      setYesBtnVisible(true);
      setNoBtnVisibile(false);
    }
    else if (count > questions.length) { 
      setYesBtnVisible(false);
      setNoBtnVisibile(false);
    }
  }, [mainText]);

  return (
    <>
      <h1>CONVITE</h1>
      <h3> {mainText} </h3>
      <div style={{
        padding: '2em',
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
        <button style={{
          display: yesBtnVisible || (yesText !== "") ? "block" : "none",
          fontSize: yesSize + 'px'
        }} onClick={handleYesClick}> {yesText} </button>
        <button style={{
          display: noBtnVisibile ? "block" : "none"
        }} onClick={handleNoClick}
        >
          {noText}
        </button>
      </div>
    </>
  )
}

export default App
