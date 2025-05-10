import { useEffect, useState } from "react"
import { getListAnswerByUserId } from "../../services/answerService";
import { getListTopic } from "../../services/topicService";
import { Link } from "react-router-dom";

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
      <div className="answer" style={{marginLeft: "50px"}}>
        <h2>Danh sách các bài đã làm</h2>
        <table>
          <thead>
            <td>Id</td>
            <td>Chủ đề</td>
            <td>Hành động</td>
          </thead>
          <tbody>
            {answer.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
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