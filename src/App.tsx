import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const questions: Array<string> = ["Oii, quer sair comigo essa sexta?", "Oxe, pq não?", "Por favooooor :(", "Você é tão chato..", "cuida gatinho deixa de ser fresco rapaz ora ≧◠ᴥ◠≦✊", "pufavoooooo", ":(", "você me obriga a fazer algo...", "Quer sair comigo sexta?"]
  const noTexts: Array<string> = ["Não", "Porque não.", "Jamais", "Eu sei mas o chato é vc!", "Quero nem ver você pintado de ouro, pilantra", "Não vooooou", "pode chorar", "o quê ?"];

  const [count, setCount] = useState(0);
  const [yesSize, setYesSize] = useState<number>(14);
  const [noSize, setNoSize] = useState<number>(14);
  const [noText, setNoText] = useState<string>(noTexts[0]);
  const [questionText, setQuestionText] = useState<string>(questions[0]);

  const handleYesClick = () => {
  }

  const handleNoClick = () => {
    setCount(count + 1);
    if (count >= noTexts.length - 1) { setCount(0) }
    setYesSize(yesSize + 4)
    setNoText(noTexts[count])
    setQuestionText(questions[count]);
  }

  useEffect(() => {
    if (questionText === questions[questions.length - 1]) { 
      // display none on 'no' button
    }
  }, [questionText]);

  return (
    <>
      <h1>CONVITE</h1>
      <h3> {questionText} </h3>
      <div style={{
        padding: '2em',
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
        <button style={{
          fontSize: yesSize + 'px'
        }} onClick={handleYesClick}> Sim </button>
        <button style={{
          fontSize: noSize + 'px'
        }} onClick={handleNoClick}>
          {noText}
        </button>
      </div>
    </>
  )
}

export default App
