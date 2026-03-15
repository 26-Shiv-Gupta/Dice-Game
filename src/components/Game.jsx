import styled from "styled-components";
import dice1 from '../assets/dice_1.png'
import dice2 from '../assets/dice_2.png'
import dice3 from '../assets/dice_3.png'
import dice4 from '../assets/dice_4.png'
import dice5 from '../assets/dice_5.png'
import dice6 from '../assets/dice_6.png'
import { use, useDebugValue, useState } from "react";

const Game = () => {

    let num = [1, 2, 3, 4, 5, 6];
    const diceImg = [dice1, dice2, dice3, dice4, dice5, dice6];

    const [selectedNum, setSelectedNum] = useState(undefined);
    const [randomNum, setRandomNum] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState(false);
    const [rules, setRules] = useState(false);

    const generateRandomNum = () => {

        if (selectedNum === undefined) {
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 750);

            return;
        }

        setRandomNum(((Math.floor(Math.random() * 10)) % 6) + 1);

        findScore();
        return;
    }

    const findScore = () => {
        randomNum === selectedNum ? setScore(prev => (prev + selectedNum)) : setScore(prev => (prev - selectedNum));
        setSelectedNum(undefined)
    }

    const showRules = () => {
        setRules(true);

        setTimeout(() => {
            setRules(false);
        }, 3000)
    }

    return (
        <GameContainer>
            <div className="topContainer">
                <div className="score">
                    <h2>{score}</h2>
                    <p>Total Score</p>
                </div>
                <div className="numContainer">
                    <div className="numbers">
                        {
                            num.map((value, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSelectedNum(value)}
                                    className={value == selectedNum ? 'selected' : ''}
                                >
                                    {value}
                                </div>
                            ))
                        }
                    </div>
                    <p>Select Number</p>
                    {error ? <h5>Please Select any number first!!</h5> : ''}
                </div>
            </div>
            <div className="diceContainer">
                <img src={diceImg[randomNum - 1]} alt="dice" onClick={generateRandomNum} />
                <p>Click on Dice to roll</p>
                <button onClick={() => setScore(0)}>Reset Score</button>
                <button onClick={showRules}>Show Rules</button>
                {
                    rules ? <div className="rules">
                        <ul>
                            <li>Select a Number first</li>
                            <li>Then roll the Dice</li>
                            <li>If your selected Number is same on Dice you got points</li>
                            <li>else you loose points</li>
                        </ul>
                    </div> : ''
                }
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
        h5 {
            color: red;
            font-size: 15px;
        }
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
        .selected {
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
        margin: auto;
        position: relative;

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

        .rules {
            position: absolute;
            background-color: black;
            padding: 30px;
            width: 500px;
            height: 395px;
            text-align: center;
            opacity: 0.9;
            color: white;
            border-radius: 10px;

            li{
                list-style: none;
                font-size: 24px;
                margin-bottom: 30px;
                font-weight: 500;
            }
        }
    }

`

export default Game;