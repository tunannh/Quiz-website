import { login } from "../../services/userService";
import { useNavigate } from "react-router-dom"
import "./login.css"
import { setCookie } from "../../../helper/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/loginActions";

function Login() {
  const toHome = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    const result = await login(email, password);
    if (result.length > 0) {
      setCookie("id", result[0].id, 1)
      setCookie("fullName", result[0].fullName, 1)
      setCookie("email", result[0].email, 1)
      setCookie("token", result[0].token, 1)
      dispatch(checkLogin(true))
      toHome("/");
    }
    else {
      alert("Email or password is incorrect");
    }
  }

  return (
    <>
      <section className="login">
        <h2>Sign in to QuizWeb</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="email">
              Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="input">
            <label htmlFor="pw">
              Password <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              id="pw"
              type="password"
              placeholder="Password"
            />
          </div>
          <button type="submit">Sign in</button>
        </form>
      </section>
    </>
  )
}
export default Login