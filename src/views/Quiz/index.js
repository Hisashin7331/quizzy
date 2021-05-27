/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { config } from 'config'
import { getQuiz, incrementViews } from 'api/quizzes'
import Loader from 'react-loader-spinner'
import { useToasts } from 'react-toast-notifications'

import Numbers from 'components/atoms/Numbers'
import TakeQuiz from 'components/organisms/TakeQuiz'

import Content from 'components/styles/Content'
import {
    Mobile,
    Wrapper,
    Column,
    Image,
    NumbersWrapper,
    Info,
    TakeButton,
    QuizName,
    QuizAuthor,
    Category,
} from './styles'

const Quiz = () => {
    const history = useHistory()
    const { addToast } = useToasts()
    const [isFetching, setIsFetching] = useState(true)
    const { id } = useParams()
    const [quiz, setQuiz] = useState(null)
    const [isUserTakingQuiz, setIsUserTakingQuiz] = useState(false)
    useEffect(() => {
        getQuiz(id).then(response => {
            if (!response.error) {
                incrementViews(id)
                setQuiz(response)
                setIsFetching(false)
            } else {
                setTimeout(() => {
                    history.push('/')
                }, 3000)
                addToast(
                    `${response.error}. You will be redirected to the main page`,
                    { appearance: 'warning' },
                )
            }
        })
    }, [id])
    return (
        <Content justify>
            {!isFetching && quiz ? (
                <Wrapper>
                    {isUserTakingQuiz ? (
                        <TakeQuiz questions={quiz.data} />
                    ) : (
                        <>
                            <Column>
                                <Image src={quiz.thumbnail} />
                                <NumbersWrapper>
                                    <Numbers
                                        number={quiz.data.length}
                                        description='questions'
                                    />
                                    <Numbers
                                        number={quiz.views}
                                        description='views'
                                    />
                                    <Numbers
                                        number={0}
                                        description='likes'
                                    />
                                </NumbersWrapper>
                            </Column>
                            <Column wide>
                                <Mobile>
                                    <Image
                                        src={`${config.apiURL}/images?image=${quiz.thumbnail}`}
                                    />
                                </Mobile>
                                <Info>
                                    <span>
                                        <QuizName>
                                            {quiz.name}
                                        </QuizName>
                                        <QuizAuthor>
                                            <b>Author: </b>
                                            {quiz.author}
                                        </QuizAuthor>
                                    </span>
                                    <span>
                                        <Category>
                                            <b>Category:</b>{' '}
                                            {quiz.category}
                                        </Category>
                                    </span>
                                </Info>
                                <Mobile>
                                    <NumbersWrapper>
                                        <Numbers
                                            number={quiz.data.length}
                                            description='questions'
                                        />
                                        <Numbers
                                            number={quiz.views}
                                            description='views'
                                        />
                                        <Numbers
                                            number={0}
                                            description='likes'
                                        />
                                    </NumbersWrapper>
                                </Mobile>
                                <TakeButton
                                    onClick={() =>
                                        setIsUserTakingQuiz(true)
                                    }
                                >
                                    Take quiz!
                                </TakeButton>
                            </Column>
                        </>
                    )}
                </Wrapper>
            ) : (
                <Loader
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                    type='Circles'
                    height={80}
                    width={80}
                />
            )}
        </Content>
    )
}

export default Quiz
