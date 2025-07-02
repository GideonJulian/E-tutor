import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/Layout";
import { About, Home, Contact, Course, BecomeInstructor } from "./pages";
import Category from "./pages/Category";

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
      },{
        path: 'category',
        element: <Category />
      }

    ]
  },
]);
function App() {
  return <RouterProvider router={route} />;
}
export default App;
