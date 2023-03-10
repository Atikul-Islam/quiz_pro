
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path : '/',
          loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element : <Home></Home>
        },
        {
          path : '/blog',
          element : <Blog></Blog>
        },
        {
          path : '/topics',
          loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element : <Topics></Topics>
        },
        {
          path : '/statistics',
          loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element : <Statistics></Statistics>
        },
        {
          path : '/topics/:topicid',
          loader : async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicid}`)},
          element : <Quiz></Quiz>
        },
        
      ]
    },
    {
      path : '/*',
      element : <div>404: This Route not found</div>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
