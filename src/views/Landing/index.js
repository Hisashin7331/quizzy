import React, { useEffect } from 'react'
import { seo } from 'functions/seo'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import Recent from 'views/Landing/pages/Recent'
import ForYou from 'views/Landing/pages/ForYou'
import Popular from 'views/Landing/pages/Popular'
import AccountTab from 'components/atoms/AccountTab'

import Content from 'components/styles/Content'
import { Column } from 'components/styles/Column'

const Landing = ({ match }) => {
    useEffect(() => {
        seo({
            title: '',
            description:
                'Quizzy is your last quiz-taking website! Create your own quiz and see if it will be trending among users!',
        })
    })
    return (
        <Content>
            <Column wide>
                <Route exact path={match.path} component={Popular} />
                <Route
                    exact
                    path={`${match.path}/recent`}
                    component={Recent}
                />
                <Route
                    exact
                    path={`${match.path}/foryou`}
                    component={ForYou}
                />
            </Column>
            <Column>
                <AccountTab />
            </Column>
        </Content>
    )
}

export default Landing

Landing.propTypes = {
    match: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string,
            PropTypes.object,
        ]),
    ).isRequired,
}
