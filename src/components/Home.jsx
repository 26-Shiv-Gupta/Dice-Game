import styled from "styled-components";
import diceImg from "../assets/dice.png"

const Home = ({ toggleIsStarted }) => {
    return (
        <HomeContainer>
            <div><img src={diceImg} alt="" /></div>
            <div>
                <h1>DICE GAME</h1>
                <button onClick={toggleIsStarted}>Play Now</button>
            </div>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    max-width: 1182px;
    height: 100vh;  
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    div {
        height: 522px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        line-height: 100px;

        img {
            height: 100%;
        }
        h1 {
            font-size: 96px;
            text-wrap: nowrap;
        }
        button {
            width: 220px;
            height: 44px;
            font-size: 16px;
            cursor: pointer;
            background-color: black;
            color: white;
            border: 1px solid transparent;
            outline: none;
            transition: 0.3s;
        }
        button:hover {
            background-color: white;
            color: black;
            border: 1px solid black;
        }
    }
`

export default Home;