import React, { lazy, Suspense } from 'react'

import {
    // HashRouter as DefaultRouter,
    BrowserRouter as DefaultRouter,
    Route,
    Switch
} from 'react-router-dom'

const Home = lazy(() => import('@pages/home'))
const NotFound = lazy(() => import('@pages/not-found'))

interface IRouterProps {}

const Router = ({}: IRouterProps) => {
    return (
        <DefaultRouter>
            <Suspense fallback={<div />}>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </DefaultRouter>
    )
}

export default Router
