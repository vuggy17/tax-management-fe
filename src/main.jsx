import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import BlogDetailView from "./Blog/DetailView/BlogDetailView";
import Home from "./Home";
import QuickStart from "./QuickStart";
import BlogList from "./Blog/List/BlogList";
import { getBlogPage, getBlogs } from "./app/api/blog";
import { createRoot } from "react-dom/client";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "quick-start",
        element: <QuickStart />,
      },
      {
        path: "blog/:blogPath",
        loader: async ({ params  }) => {
          const {blogPath} = params;
          console.log("blogPath", blogPath)
          const blogs = await getBlogPage(blogPath);
          return blogs;
        },
        element: <BlogDetailView />,
      },
      {
        path: "blog",
        element: <BlogList />,
        loader: async ({ request }) => {
          const blogs = await getBlogs(request.signal);
          return blogs;
        },
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
