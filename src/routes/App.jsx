import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";


export default function App(){
    const [user, setUser] = useState(null)
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
          errorElement: <NotFound />
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}