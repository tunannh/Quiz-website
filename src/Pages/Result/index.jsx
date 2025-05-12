import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getListAnswerById, getListAnswerByUserId } from "../../../fetAPI/answerService";
import { getListQuestion } from "../../../fetAPI/questionService";
import "./result.css"

function Result() {
  const param = useParams();
  const navigate = useNavigate()
  const [listUserAnswer, setListUserAnswer] = useState({});
  const [dataResult, setDataResult] = useState([])

  const lamLai = () => {
    navigate(`/quiz/${dataResult[0].topicId}`)
  }
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getListAnswerById(param.id);
      const gListQuestion = await getListQuestion(result.topicId);
      // setListUserAnswer(result);
      let final = [];
      for (let i = 0; i < gListQuestion.length; i++) {
        final.push({
          ...gListQuestion[i],
          ...result.answers.find(item => (item.questionId === parseInt(gListQuestion[i].id)))
        })
      }
      setDataResult(final);
    }
    fetchApi();
  }, [])

  const sumQuestion = dataResult.length;
  let sumCorr = 0;
  for (let i = 0; i < sumQuestion; i++) {
    if (dataResult[i].correctAnswer == dataResult[i].answer) {
      sumCorr ++;
    }
  }

  return (
    <>
      <div className="result">
        <h2 className="title">
          Kết quả:
          <span className="check">
            <span className="a sum">Tổng số câu: <span style={{color: 'orange', fontWeight: '500'}}>{sumQuestion}</span></span>
            <span className="a sumCorr">Đúng: <span style={{color: 'green', fontWeight: '500'}}>{sumCorr}</span></span>
            <span className="a sumInCorr">Sai: <span style={{color: 'red', fontWeight: '500'}}>{sumQuestion - sumCorr}</span></span>
            <span className="a percent">Phần trăm đúng: <span style={{color: 'darkmagenta', fontWeight: '500'}}>{(sumCorr/sumQuestion).toFixed(2)}%</span></span>
          </span>
        </h2>
        <div className="result__list">
          {dataResult.map((item, index) => (
            <div className="result_item" key={item.id}>
              <p>Câu {index + 1}: {item.question} {(item.answer == item.correctAnswer) ? (<span className="corr">Đúng</span>) : (<span className="incorr">Sai</span>)}</p>

              <div className="result__answer">
                {item.answers.map((itemAns, indexAns) => {
                  var className = "";
                  var check = false;
                  if (item.answer == indexAns) {
                    check = true;
                    className += "answer__selected "
                  }
                  if (item.correctAnswer == indexAns) {
                    className += "answer__correct"
                  }
                  return (
                    <div key={indexAns}>
                      <input checked={check} type="radio" disabled/>
                      <label className={className}>{itemAns}</label>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
          <button onClick={lamLai}>Làm lại</button>
        </div>
      </div>
    </>
  )
}
export default Result