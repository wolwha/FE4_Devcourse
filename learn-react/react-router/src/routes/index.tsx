import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";
import Default from "../layouts/Default";
import { fetchJsonPosts, fetchJsonPostsDetail } from "./loader/posts.loader";

const router = createBrowserRouter([
  {
    element: <Default />,
    hydrateFallbackElement: <h1>Loading...</h1>, // 해당 라우트에서 새로고침할떄만 보인다. 접근할때는 미리 로드되기 때문
    children: [
      { path: "", element: <Home /> },
      {
        path: "/custom-about",
        children: [
          {
            path: "about",
            loader: fetchJsonPosts, // GET 요청을 처리하는 속성, 특정 라우트에 접근할 때마다 처리됨 loader에서 dataFetching을 할 수 있다.
            errorElement: <h1>Error!</h1>,
            element: <About />,
          },
        ],
      },
      {
        path: "/detail/:id",
        loader: fetchJsonPostsDetail,
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
