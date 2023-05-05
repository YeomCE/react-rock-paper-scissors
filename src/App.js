import './App.css';
import Box from './component/Box';
import { useState } from 'react';


// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼 클릭 시 클릭한 값이 박스에 보인다.
// 4. 컴퓨터 : 랜덤하게 아이템 선택
// 5. 3-4의 결과를 보고 누가 이겼는지 승패 확인
// 6. 승패 결과에 따라 테두리 색상 변경 (승 - 초록 / 패 - 빨강 / 무 - 검정)

const choice = {
  rock : {
    name : "Rock",
    img : "https://mnmsoft.co.kr/aivs/images/2.png"
  },
  scissors : {
    name : "Scissors",
    img : "https://mnmsoft.co.kr/aivs/images/1.png"
  },
  paper : {
    name : "Paper",
    img : "https://mnmsoft.co.kr/aivs/images/3.png"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [ComputerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")

  const paly = (userChoice) => {
    // You Box img
    setUserSelect(choice[userChoice])

    // Computer Box img
    let componentChoice = randomChoice()
    setComputerSelect(componentChoice)

    // 결과값
    setResult(judgement(choice[userChoice], componentChoice))
  }

  const judgement = (user, com)=>{
    if(user.name === com.name){
      return "tie"
    }
    else if(user.name === 'Rock'){
      return com.name === 'Scissors' ? 'win' :  'lose';
    }
    else if(user.name === 'Scissors'){
      return com.name === 'Paper' ? 'win' :  'lose';
    }
    else if(user.name === 'Paper'){
      return com.name === 'Rock' ? 'win' :  'lose';
    }
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키 값만 뽑아 배열로 만들어준다.
    let radomItem = Math.floor(Math.random()*itemArray.length)
    let final = itemArray[radomItem]
    return choice[final]
  }

  return (
    <div>
      <div className='view-box'>
        <Box title="You" item = {userSelect} result = {result}/>
        <Box title="Computer" item = {ComputerSelect} result = {result}/>
      </div>
      <div className='button-box'>
        <button onClick={() => paly("scissors")}>가위</button>
        <button onClick={() => paly("rock")}>바위</button>
        <button onClick={() => paly("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
