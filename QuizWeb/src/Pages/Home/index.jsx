import { useSelector } from "react-redux";
import { getCookie } from "../../../helper/cookie"

function Home() {
  const isLogin = useSelector(state => state.loginReducer);
  return (
    <>
      {isLogin ? (<>
        <h3 style={{color: 'rgb(47, 150, 47)'}}>Chúc mừng bạn đã đăng nhập thành công</h3>
      </>) : (<>
      <h3>Chào mừng bạn đến với QuizWeb</h3>
      <p>Đây là trang web giúp bạn ôn tập các kiến thức về Frontend cơ bản bằng việc cung cấp các câu hỏi theo từng chủ đề</p>
      <p>Hãy đăng nhập hoặc đăng ký nếu bạn chưa có tài khoản để bắt đầu trải nghiệm ngay</p>
      </>)}
    </>
  )
}
export default Home