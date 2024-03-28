import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots/Roots.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/Roots/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/Roots/ListedBooks/PagesToRead/PagesToRead.jsx';
import Upcoming from './components/Upcoming/Upcoming.jsx';
import Popular from './components/Popular/Popular.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import Read from './components/Read/Read.jsx';
import WishList from './components/WishList/WishList.jsx';
import { ToastContainer, toast } from 'react-toastify';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots></Roots> ,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('/fakeData.json'),
        
      },
      {
        path:'/bookDetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader:()=>fetch('/fakeData.json'),
       
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        loader:()=>fetch('/fakeData.json'),
        children:[
          {
            index:true,
            element: <Read></Read>
          },
          {
            path: 'wish',
            element: <WishList></WishList> 
          }
        ]
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>,
        loader:()=>fetch('/fakeData.json'),
      },
      {
        path: '/upcoming',
        element: <Upcoming></Upcoming>,
      },
      {
        path: '/popular',
        element: <Popular></Popular>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </React.StrictMode>,
)
