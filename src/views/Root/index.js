import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'store'
import { ToastProvider } from 'react-toast-notifications'

// components
import Landing from 'views/Landing'
import Navbar from 'components/organisms/Navbar'

import Creator from 'views/Creator'
import Login from 'views/Login'
import Register from 'views/Register'
import Quiz from 'views/Quiz'
import E404 from 'views/404'
import ScrollToTop from 'components/atoms/ScrollToTop'

// styles
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import 'react-circular-progressbar/dist/styles.css'
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
                            <Redirect exact from='/' to='/browse' />
                            <Route
                                path='/browse'
                                component={Landing}
                            />
                            <Route
                                path='/create'
                                component={Creator}
                            />
                            <Route
                                path='/quiz/:id'
                                component={Quiz}
                            />
                            <Route path='/login' component={Login} />
                            <Route
                                path='/register'
                                component={Register}
                            />
                            <Route path='/*' component={E404} />
                        </Switch>
                    </Page>
                </ToastProvider>
            </Provider>
        </Router>
    )
}

export default App
