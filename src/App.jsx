import HomePage from "./routes/homepage/homePage"
import SinglePage from "./routes/singlepage/singlepage";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        }
      ]
    },

  ]);
  return (


    <RouterProvider router={router} />


  )
}

export default App