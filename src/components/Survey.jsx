import { useState, useEffect } from "react";
import Form from "./Form.jsx";
import AnswersList from "./AnswersList.jsx";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  // rename to answerList & setAnswerList
  const [responseData, setResponseData] = useState([]);
  // const [renderData, setRenderData] = useState("");

  const addAnswerToList = (answer) => {
    const newAnswerList = [...responseData, answer];
    setResponseData(newAnswerList);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList responseData={responseData} />
      </section>
      <section className="survey__form">
        <Form addAnswerToList={addAnswerToList} />
      </section>
    </main>
  );
}

export default Survey;
