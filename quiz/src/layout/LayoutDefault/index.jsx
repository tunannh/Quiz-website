import { NavLink, Outlet } from "react-router-dom"

function LayoutDefault() {
  return (
    <>
      <div className="layout">
        <header className="layout__header">
          <div className="layout__logo">Quiz</div>
          <div className="layout__menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/topic">Topic</NavLink>
              </li>
              <li>
                <NavLink to="/answer">Answers</NavLink>
              </li>
            </ul>
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