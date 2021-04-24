import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'store'
import { ToastProvider } from 'react-toast-notifications'

// components
import Landing from 'views/Landing'
import Navbar from 'components/organisms/Navbar'
import Recent from 'views/pages/Recent'
import ForYou from 'views/pages/ForYou'
import Popular from 'views/pages/Popular'
import Creator from 'views/Creator'
import Login from 'views/Login'
import Register from 'views/Register'
import ScrollToTop from 'components/atoms/ScrollToTop'

// styles
import { GlobalStyle } from 'themes/GlobalStyle'
import { Page } from './styles'

const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <ToastProvider placement='bottom-center' autoDismiss>
                    <ScrollToTop />
                    <Page>
                        <GlobalStyle />
                        <Navbar />
                        <Switch>
                            <Route
                                exact
                                path='/'
                                component={Landing}
                            />
                            <Route
                                path='/create'
                                component={Creator}
                            />
                            <Route
                                exact
                                path='/foryou'
                                component={ForYou}
                            />
                            <Route
                                path='/recent'
                                component={Recent}
                            />
                            <Route
                                path='/popular'
                                component={Popular}
                            />
                            <Route path='/quiz/:id' />
                            <Route path='/login' component={Login} />
                            <Route
                                path='/register'
                                component={Register}
                            />
                            <Route path='/*'>
                                <h1>Jk</h1>
                            </Route>
                        </Switch>
                    </Page>
                </ToastProvider>
            </Provider>
        </Router>
    )
}

export default App
