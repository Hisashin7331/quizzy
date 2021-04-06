import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

// components
import Landing from 'views/Landing'
import Sidebar from 'components/organisms/Sidebar'

// styles
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
                    <Route path='/*'>
                        <h1>Jk</h1>
                    </Route>
                </Switch>
            </Page>
        </Router>
    )
}

export default App
