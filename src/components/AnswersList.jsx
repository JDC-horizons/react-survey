import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { responseData } = props;

  return (
    <ul>
      {responseData.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={responseData.name} />
      ))}
    </ul>
  );
}
