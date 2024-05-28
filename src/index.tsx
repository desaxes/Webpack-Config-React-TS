import React, { Suspense } from 'react'
import { createRoot } from "react-dom/client"
import { App } from './components/app'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
const root = createRoot(document.getElementById('root'))
const About = React.lazy(() => import("@/pages/About"))
const Shop = React.lazy(() => import("@/pages/Shop"))
if (!root) {
    throw new Error('root not found')
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense><About /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense><Shop /></Suspense>
            }
        ]
    }
])
root.render(
    <RouterProvider router={router} />
)