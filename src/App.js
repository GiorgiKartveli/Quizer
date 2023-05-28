import React, { useState } from "react";
// import classes from "./App.module.css";

// import { useHistory } from "react-router-dom"; // < use this hook to redirect users on home page after loggin

import RootPage from "./pages/RootPage";
import MainPage from "./pages/mainPage/MainPage";
import Login from "./pages/login/Login";
import TopicList from "./pages/topicList/TopicList";
import ArtTopic from "./pages/artTopic/ArtTopic";
import HistoryTopic from "./pages/historyTopic/HistoryTopic";
import MathTopic from "./pages/mathTopic/MathTopic";
import MovieTopic from "./pages/movieTopic/MovieTopic";
import MusicTopic from "./pages/musicTopic/MusicTopic";
import SportTopic from "./pages/sportTopic/SportTopic";
import TechnologyTopic from "./pages/technologyTopic/TechnologyTopic";
import ContactPage from "./pages/contact/Contact";
import AboutPage from "./pages/aboutUs/AboutUs";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TopicListRootLayout from "./pages/TopicListRoot";
// import { useState } from "react";

// const myRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootPage />,
//     children: [
//       { index: true, element: <MainPage /> },
//       { path: "login", element: <Login /> },
//       { path: "about", element: <AboutPage /> },
//       { path: "contact", element: <ContactPage /> },
//       { path: "*", element: <h1>There is no content with this path!</h1> },
//       {
//         path: "topicList",
//         element: (
//           <ProtectedRoute user={user}>
//             <TopicListRootLayout />
//           </ProtectedRoute>
//         ),
//         children: [
//           { index: true, element: <TopicList /> },
//           { path: "artTopic", element: <ArtTopic /> },
//           { path: "historyTopic", element: <HistoryTopic /> },
//           { path: "mathTopic", element: <MathTopic /> },
//           { path: "movieTopic", element: <MovieTopic /> },
//           { path: "musicTopic", element: <MusicTopic /> },
//           { path: "sportTopic", element: <SportTopic /> },
//           { path: "technologyTopic", element: <TechnologyTopic /> },
//         ],
//       },
//     ],
//   },
// ]);

function App() {
  const [user] = useState(null);

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "login", element: <Login /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "*", element: <h1>There is no content with this path!</h1> },
        {
          path: "topicList",
          element: (
            <ProtectedRoute user={user}>
              <TopicListRootLayout />
            </ProtectedRoute>
          ),
          children: [
            { index: true, element: <TopicList /> },
            { path: "artTopic", element: <ArtTopic /> },
            { path: "historyTopic", element: <HistoryTopic /> },
            { path: "mathTopic", element: <MathTopic /> },
            { path: "movieTopic", element: <MovieTopic /> },
            { path: "musicTopic", element: <MusicTopic /> },
            { path: "sportTopic", element: <SportTopic /> },
            { path: "technologyTopic", element: <TechnologyTopic /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
