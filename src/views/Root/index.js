import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

// components
import Landing from 'views/Landing'
import Sidebar from 'components/organisms/Sidebar'
import Recent from 'views/pages/Recent'
import ForYou from 'views/pages/ForYou'
import Popular from 'views/pages/Popular'

// srtyles
import { GlobalStyle } from 'themes/GlobalStyle'
import { Page } from './styles'

const App = () => {
    return (
        <Router>
            <Page>
                <GlobalStyle />
                <Sidebar />
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/foryou' component={ForYou} />
                    <Route path='/recent' component={Recent} />
                    <Route path='/popular' component={Popular} />
                    <Route path='/*'>
                        <h1>Jk</h1>
                    </Route>
                </Switch>
            </Page>
        </Router>
    )
}

export default App
