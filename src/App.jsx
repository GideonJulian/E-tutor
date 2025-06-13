import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/Layout";
import { About, Home, Contact, Course, BecomeInstructor } from "./pages";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />,
      },{
        path: 'courses',
        element: <Course />

      },{
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'instructor',
        element: <BecomeInstructor />
      }

    ]
  },
]);
function App() {
  return <RouterProvider router={route} />;
}
export default App;
