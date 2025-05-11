import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getTopic } from "../../services/topicService";
import { getListQuestion } from "../../services/questionService";
import "./quiz.css"
import { getCookie } from "../../../helper/cookie";
import { addAnswer, getListAnswer } from "../../services/answerService";

function Quiz() {
  const param = useParams();
  const [topic, setTopics] = useState({});
  const [questions, setQuestions] = useState([])
  const [listAns, setListAns] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    const fetchapi = async () => {
      const result = await getTopic(param.id)
      setTopics(result);
    }
    fetchapi();
  }, [])
  useEffect(() => {
    const fetchapi = async () => {
      const result = await getListQuestion(param.id)
      setQuestions(result);
    }
    fetchapi();
  }, [])
  useEffect(() => {
    const fetchapi = async () => {
      const result = await getListAnswer();
      setListAns(result);
    }
    fetchapi();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let selectedAnswer = [];
    for (let i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].checked) {
        const name = e.target.elements[i].name;
        const value = e.target.elements[i].value;
        selectedAnswer.push({
          questionId: parseInt(name),
          answer: parseInt(value)
        })
      }
    }
    const option = {
      userId: parseInt(getCookie("id")),
      topicId: parseInt(param.id),
      answer: selectedAnswer,
      id: listAns.length + 1
    }
    const result = await addAnswer(option);
    console.log(result);
    if (result) {
      navigate(`/result/${result.id}`);
    }
  }

  return (
    <>
      <div className="quiz">
        <h2 className="title">Bài quiz chủ đề về {topic.name}</h2>
        <div className="quiz__list">
          <form onSubmit={handleSubmit}>
            {questions.map((item, index) => (
              <div className="quiz__item" key={item.id}>
                <p>Câu {index + 1}: {item.question}</p>
                <div className="quiz__answer">
                  {item.answers.map((itemAns, indexAns) => (
                    <div key={indexAns}>
                      <input type="radio" value={indexAns} name={item.id} id={`quiz-${item.id}-${indexAns}`} />
                      <label htmlFor={`quiz-${item.id}-${indexAns}`}>{itemAns}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button type="submit">Nộp bài</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default Quiz