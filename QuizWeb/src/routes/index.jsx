import LayoutDefault from "../layout/LayoutDefault"
import Login from "../Pages/Login"
import Home from "../Pages/Home"
import Register from "../Pages/Register"
import Answer from "../Pages/Answer"
import Result from "../Pages/Result"
import Topic from "../Pages/Topic"
import Quiz from "../Pages/Quiz"
import PrivateRoute from "../components/PrivateRoute"

const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "answer",
            element: <Answer />
          },
          {
            path: "result",
            element: <Result />
          },
          {
            path: "topic",
            element: <Topic />
          },
          {
            path: "quiz",
            element: <Quiz />
          },
        ]
      }
    ]
  }
]
export default routes