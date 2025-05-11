import { NavLink, Outlet } from "react-router-dom"
import "./LayoutDefault.css"
import { deleteAllCookie, getCookie } from "../../../helper/cookie"
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../../reducer/actions/loginActions"

function LayoutDefault() {
  const token = getCookie("token");
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.loginReducer);
  const handleLogout = () => {
    deleteAllCookie();
    dispatch(checkLogin(!isLogin));
  }

  return (
    <>
      <div className="layout">
        <header className="layout__header">
          <div className="layout__logo"><NavLink to="/">QuizWeb</NavLink></div>
          <div className="layout__menu">

            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {(isLogin || token) && (
                <>
                  <li>
                    <NavLink to="/topic">Topic</NavLink>
                  </li>
                  <li>
                    <NavLink to="/answer">Answers</NavLink>
                  </li>
                </>)}
            </ul>
          </div>
          <div className="layout__account">
            {(isLogin || token)? (
              <>
                <NavLink to="/" onClick={handleLogout}>Sign out</NavLink>
              </>) : (
              <>
                <NavLink to="/login" className="sign-in">Sign in</NavLink>
                <NavLink to="/register">Sign up</NavLink>
              </>)}

          </div>
        </header>

        <div className="layout__main">
          <Outlet />
        </div>

        <footer className="layout__footer">
          Copyright @2025 Nguyen Anh Tuan
        </footer>
      </div>
    </>
  )
}
export default LayoutDefault