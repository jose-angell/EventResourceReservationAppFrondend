import { RouterProvider } from 'react-router/dom'
import { AppRouter } from './router/app.router'

export const BookitApp = () => {
  return (
    <>
        <RouterProvider router={AppRouter}/>
    </>
  )
}
