import styles from './FaqPage.module.scss'

// Components
import FaqQuestion from '../faq-question/faq-question.component'

interface FaqPageProps {
    questions: [
    {
        question: string,
        answer: string
    }
]
}

const FaqPage: React.FC <FaqPageProps> = ({questions}) => {
    return (
        <div className={styles.faqPageContainer}>
            <h1>Frequently Asked Questions</h1>
            {
                questions.map((question: { question: string, answer: string}, index: number) => {
                    return (
                        <FaqQuestion question={question.question} answer={question.answer} key={index}/>
                    )
                })
            }
        </div>
    );
};

export default FaqPage;