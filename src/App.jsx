import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home";
import AppMenu from "./compponents/Menu";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/menu",
      element: <AppMenu/>,
    },
  ]);
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App