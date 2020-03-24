import React, { lazy, Suspense } from 'react'

import {
    // HashRouter as DefaultRouter,
    BrowserRouter as DefaultRouter,
    Route,
    Switch
} from 'react-router-dom'

const Home = lazy(() => import('@pages/home'))
const Ranking = lazy(() => import('@pages/ranking'))
const NotFound = lazy(() => import('@pages/not-found'))

interface IRouterProps {}

const Router = ({}: IRouterProps) => {
    return (
        <DefaultRouter>
            <Suspense fallback={<div />}>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/ranking' exact component={Ranking} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </DefaultRouter>
    )
}

export default Router
