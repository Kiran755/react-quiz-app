import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const questions = [
      {
        question:"What is the capital of India?",
        answerOptions:[
          {answer:"Maharashtra",isCorrect:false},
          {answer:"Hyderabad",isCorrect:false},
          {answer:"New Delhi",isCorrect:true},
          {answer:"Telangana",isCorrect:false}
        ]
      },
      {
        question:"What is at the center of an atom?",
        answerOptions:[
          {answer:"nucleus",isCorrect:true},
          {answer:"electron",isCorrect:false},
          {answer:"proton",isCorrect:false},
          {answer:"neutron",isCorrect:true},
        ]
      },
      {
        question:"Where is the largest mountain in the solar system located?",
        answerOptions:[
          {answer:"Earth",isCorrect:false},
          {answer:"Mars",isCorrect:true},
          {answer:"Venus",isCorrect:false},
          {answer:"Mercury",isCorrect:false},
        ]
      },
  ]
  const [turn,setTurn] = useState(0);
  const [end,setEnd] = useState(false);
  const [score,setScore] = useState(0);
  const HandleClicked=(answer)=>{
    if(answer===true)
    {
      setScore(score+1);
    }
    const next = turn + 1;
    if(next<questions.length)
    {
      setTurn(next);
      console.log(turn);
    }
    else
    {
      setEnd(true);
    }
    
  }
  return (
    <div className="App">
      {
        end?(<div>
            <h1>You have reached the end!</h1>
            <h2>Your score was {score}/{questions.length}</h2>
        </div>):(
              <div className="container">
              <div className="question-side">
                  {questions[turn].question}
              </div>
              <div className="Options-side">
                  {questions[turn].answerOptions.map((item,index)=>{
                      return <div className="Item" key={index} onClick={()=>HandleClicked(item.isCorrect)}
                      >{item.answer}</div>
                  })}
              </div>
        </div>
        )
      }
      
    </div>
  );
}

export default App;
