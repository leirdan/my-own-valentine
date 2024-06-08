import { useEffect, useState } from "react";
import "./App.css";
import { questions, noTexts, yesTexts } from "./db.ts";

const App = () => {
  const [noCount, setNoCount] = useState<number>(0);
  const [yesSize, setYesSize] = useState<number>(16);
  const [yesBtnVisible, setYesBtnVisible] = useState<boolean>(true);
  const [noBtnVisible, setNoBtnVisible] = useState<boolean>(true);
  const [yesText, setYesText] = useState<string>(yesTexts[0]);
  const [noText, setNoText] = useState<string>(noTexts[0]);
  const [mainText, setMainText] = useState<string>(questions[0]);
  const [yesPressed, setYesPressed] = useState<boolean>(false);
  const [gifUrl, setGifUrl] = useState<string>("");

  const handleReset = () => {
    setYesSize(14);
    setYesBtnVisible(true);
    setNoBtnVisible(true);
    setYesText(yesTexts[0]);
    setNoText(noTexts[0]);
    setMainText(questions[0]);
    setYesPressed(false);
    setNoCount(0);
  };

  const handleYesClick = () => {
    setYesBtnVisible(false);
    setNoBtnVisible(false);
    setYesPressed(true);

    if (noCount == 0 || noCount == 1) {
      setMainText(
        "espero que a semana acabe para que eu possa te ver diiii noooovo peoreoreom beijo",
      );
      setGifUrl(
        "https://media1.tenor.com/m/4vYPebk2hHUAAAAC/cute-dogs-puppies.gif",
      );
    } else if (noCount > 1 && noCount < 5) {
      setMainText(
        "eita como vc é teimoso!! ainda bem que é lindo. vamos namorar bem essa sexta ;)",
      );
      setGifUrl("https://media1.tenor.com/m/x0eeZxeU56AAAAAC/puppy-cute.gif");
    } else if (noCount >= 5 && noCount < 8) {
      setMainText(
        "tava achando que vc nao me amava mais .... brincadeira nunca duvidei disso !! vamos ser muito felizes, mal posso esperar pra te ver",
      );
      setGifUrl("https://media1.tenor.com/m/u1mNNtND2k4AAAAd/cute-puppy.gif");
    } else if (noCount == questions.length) {
      setMainText(
        "as vezes tem que ser na ignorância.. te amo meu são valentino ;)",
      );
      setGifUrl("https://media1.tenor.com/m/R0tI3vJoklcAAAAd/cat-dog.gif");
    } else {
      setMainText(
        "oxente.. vOC3 aCh0U a_-a-a S4LA S3cCrETA d.d-o DES3nv0lv3DOR :D",
      );
      setGifUrl("https://media1.tenor.com/m/hxVOd2VnzosAAAAC/dogcozy-dogs.gif");
    }
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setYesSize(yesSize * 1.1);
    setNoText(noTexts[noCount]);
    setYesText(yesTexts[noCount]);
    setMainText(questions[noCount]);
  };

  useEffect(() => {
    if (noCount == questions.length - 1) {
      setYesBtnVisible(false);
      setNoBtnVisible(true);
    } else if (noCount == questions.length) {
      setYesBtnVisible(true);
      setNoBtnVisible(false);
    } else if (noCount > questions.length) {
      setYesBtnVisible(false);
      setNoBtnVisible(false);
    }
  }, [mainText]);

  return (
    <>
      <h2> para baliel </h2>
      <h3> {mainText} </h3>
      {yesPressed ? (
        <div>
          <img src={gifUrl} width="250px" />
          <br />
          <span style={{ color: "grey" }}>
            {" "}
            caso não tenha percebido nós somos os auaus{" "}
          </span>
          <br />
          <button style={{ padding: "2em", background: "green" }} onClick={handleReset}>
            {" "}
            Retornar{" "}
          </button>
        </div>
      ) : (
        <div
          style={{
            padding: "2em",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <button
            style={{
              display: yesBtnVisible && yesText !== "" ? "block" : "none",
              fontSize: yesSize + "px",
              marginRight: "1rem",
              background: 'green'
            }}
            onClick={handleYesClick}
          >
            {" "}
            {yesText}{" "}
          </button>
          <button
            style={{
              display: noBtnVisible ? "block" : "none",
              marginLeft: "1rem",
              background: 'red'
            }}
            onClick={handleNoClick}
          >
            {noText}
          </button>
        </div>
      )}
    </>
  );
};

export default App;
