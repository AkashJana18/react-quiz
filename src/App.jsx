
import Quiz from './Quiz.jsx'
import { jsQuizz } from './constant.js'

function App() {

  return (
    <>
    <div>

      <Quiz questions={jsQuizz.questions} />
    </div>
    </>
  )
}

export default App
