import { useEffect, useState } from "react"
import { getListAnswerByUserId } from "../../../fetAPI/answerService"
import { getListTopic } from "../../../fetAPI/topicService";
import { Link } from "react-router-dom";
import "./answer.css"

function Answer() {
  const [answer, setAnswer] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      const listAnswer = await getListAnswerByUserId();
      const listTopic = await getListTopic();
      let result = [];
      for (let i = 0; i < listAnswer.length; i++) {
        const topic = listTopic.find(item => item.id == listAnswer[i].topicId)
        result.push({
          ...listAnswer[i],
          name: topic.name
        })
      }
      setAnswer(result);
    }
    fetchapi();
  }, [])

  return (
    <>
      <div className="answer" style={{ marginLeft: "50px" }}>
        <h2>Danh sách các bài đã làm</h2>
        <table>
          <thead>
            <tr>
              <th>Thời gian nộp</th>
              <th>Chủ đề</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {answer.map(item => (
              <tr key={item.id}>
                <td>{item.time}</td>
                <td>{item.name}</td>
                <td className="t"><Link to={"/result/" + item.id}> Xem Chi tiết</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Answer