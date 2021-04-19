import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

// components
import Landing from 'views/Landing'
import Navbar from 'components/organisms/Navbar'
import Recent from 'views/pages/Recent'
import ForYou from 'views/pages/ForYou'
import Popular from 'views/pages/Popular'
import Creator from 'views/Creator'
import Login from 'views/Login'
import ScrollToTop from 'components/atoms/ScrollToTop'

// srtyles
import { GlobalStyle } from 'themes/GlobalStyle'
import { Page } from './styles'

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Page>
                <GlobalStyle />
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/create' component={Creator} />
                    <Route exact path='/foryou' component={ForYou} />
                    <Route path='/recent' component={Recent} />
                    <Route path='/popular' component={Popular} />
                    <Route path='/quiz/:id' />
                    <Route path='/login' component={Login} />
                    <Route path='/*'>
                        <h1>Jk</h1>
                    </Route>
                </Switch>
            </Page>
        </Router>
    )
}

export default App
