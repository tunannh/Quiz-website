import { useEffect, useState } from "react"
import "./topic.css"
import { Link } from "react-router-dom"
import { getListTopic } from "../../../fetAPI/topicService";

function Topic() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      const result = await getListTopic();
      setTopics(result);
    }
    fetchapi()
  }, [])
  return (
    <>
      <div className="topic">
        <h2 className="topic__title">Các chủ đề ôn tập</h2>
        {topics.length > 0 && (
          <table>
            <tbody>
              {topics.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td className="t"><Link to={"/quiz/" + item.id}>Vào làm</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}
export default Topic