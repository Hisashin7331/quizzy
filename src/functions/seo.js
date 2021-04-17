export const seo = ({
    title = '',
    description = 'Quizzy - your best quizzes site. Create, take and evaluate Quizzes!',
}) => {
    document.title = `${title} Quizzy`
    document
        .querySelector('meta[name="description"]')
        .setAttribute('content', description)
}
