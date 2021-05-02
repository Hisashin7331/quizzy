export const quizValidation = (name, data, category, callback) => {
    const errors = []
    if (name.length < 8) {
        errors.push(`Quiz name must be at least 8 characters long`)
    }
    if (!category) {
        errors.push(`Choose category are empty`)
    }
    const areQuestionsValid = []
    const areAnswersValid = []
    const doesContainCorrectAnswer = []
    data.forEach((question, index) => {
        const isAnyAnswerCorrect = []
        if (!question) return
        if (!question.question) {
            areQuestionsValid.push(index)
        }
        question.answers.forEach(answer => {
            if (!answer.answer) {
                areAnswersValid.push(index)
            }
            if (answer.isCorrect) {
                isAnyAnswerCorrect.push(index)
            }
        })
        doesContainCorrectAnswer.push(isAnyAnswerCorrect)
    })
    if (areQuestionsValid.length > 0) {
        errors.push(`Questions cannot be empty strings`)
    }
    if (areAnswersValid.length > 0) {
        errors.push(`Answers cannot be empty strings`)
    }
    doesContainCorrectAnswer.forEach((item, index) => {
        if (item.length < 1) {
            errors.push(
                `Question ${
                    index + 1
                } must contain at least one correct answer`,
            )
        }
    })
    callback(errors)
    return errors
}
