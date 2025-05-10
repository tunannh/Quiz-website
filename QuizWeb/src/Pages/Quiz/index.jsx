import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getTopic } from "../../services/topicService";
import { getListQuestion } from "../../services/questionService";

function Quiz() {
  const param = useParams();
  const [topic, setTopics] = useState({});
  const [questions, setQuestions] = useState([])
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

  return (
    <>
      <div className="quiz">
        <h2 className="title">Bài quiz chủ đề về {topic.name}</h2>
      </div>
    </>
  )
}
export default Quiz