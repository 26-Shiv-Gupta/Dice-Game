import styled from "styled-components";
import dice1 from '../assets/dice_1.png'
import dice2 from '../assets/dice_2.png'
import dice3 from '../assets/dice_3.png'
import dice4 from '../assets/dice_4.png'
import dice5 from '../assets/dice_5.png'
import dice6 from '../assets/dice_6.png'
import { useState } from "react";

const Game = () => {

    let num = [1, 2, 3, 4, 5, 6];
    const diceImg = [dice1, dice2, dice3, dice4, dice5, dice6];

    const [randomNum, setRandomNum] = useState(1);

    const generateRandomNum = () => {
        setRandomNum(((Math.floor(Math.random()*10))%6)+1);
        return;
    }

    return (
        <GameContainer>
            <div className="topContainer">
                <div className="score">
                    <h2>0</h2>
                    <p>Total Score</p>
                </div>
                <div className="numContainer">
                    <div className="numbers">
                        {
                            num.map((value, i) => (
                                <div key={i}>{value}</div>
                            ))
                        }
                    </div>
                    <p>Select Number</p>
                </div>
            </div>
            <div className="diceContainer">
                <img src={diceImg[randomNum-1]} alt="dice" onClick={generateRandomNum}/>
                <p>Click on Dice to roll</p>
                <button>Reset Score</button>
                <button>Show Rules</button>
            </div>
        </GameContainer>
    )
}

const GameContainer = styled.div`

    font-style: poppins;
    
    .topContainer{
        display: flex;
        justify-content: space-between;
        margin: 50px 100px;
    }
    .score {
        text-align: center;
        line-height: 60px;
        h2{
            font-size: 100px;
            font-weight: 500;
        }
        p{
            font-size: 24px;
        }
    }

    .numbers {
        display: flex;
        gap: 10px;

        div {
            height: 72px;
            width: 72px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: 700;
            cursor: pointer;
        }
        div:hover {
            color: white;
            background-color: black;
        }
    }
    .numContainer{
        line-height: 50px;
        p{
            float: right;
            font-size: 24px;
            font-weight: 700;
        }
    }

    .diceContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 250px;
        margin: auto;

        img {
            width: 250px;
            height: 250px;
            cursor: pointer;
        }

        p{
            font-size: 24px;
            margin: 30px 0;
        }

        button{
            padding: 10px 18px;
            width: 220px;
            height: 44px;
            margin-bottom: 20px;
            border-radius: 5px;
            background-color: white;
            cursor: pointer;
        }
    }

`

export default Game;