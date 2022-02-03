import './App.css'
import {useEffect, useState} from "react";
import Singlecard from "./components/Singlecard";

const cardImages = [
    {src: './img/helmet-1.png', matched: false},
    {src: './img/potion-1.png', matched: false},
    {src: './img/ring-1.png', matched: false},
    {src: './img/scroll-1.png', matched: false},
    {src: './img/shield-1.png', matched: false},
    {src: './img/sword-1.png', matched: false}
]

function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [choice1, setChoice1] = useState(null)
    const [choice2, setChoice2] = useState(null)

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}))

        setCards(shuffledCards)
        setTurns(0)
    }


    const handleChoice = (card) => {
        console.log(card)
        choice1 ? setChoice2(card) : setChoice1(card)

    }
    // compare two cards


    useEffect(() => {
        setDisabled(true)
        if (choice1 && choice2) {


            if (choice1.src === choice2.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choice1.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurns()
                console.log(turns + 1)
            } else {

                setTimeout(() => resetTurns(), 800)
                console.log(turns + 1)

            }
        }
    }, [choice1, choice2])

    const resetTurns = () => {
        setChoice1(null)
        setChoice2(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)

    }
    console.log(cards)

    return (
        <div className="App">
            <div className="row">
                <h1>Magic Match</h1> <br/>
                <div className="turns"><h1>{`you have attempted ${turns}`}</h1></div>
                <button onClick={shuffleCards}>New Game!!!</button>
            </div>

            <div className="card-grid">
                {cards.map(card => (
                    <Singlecard
                        key={card.id}
                        flipped={card === choice1 || card == choice2 || card.matched}
                        handleChoice={handleChoice}
                        disabled={disabled}
                        inputCard={card}/>
                ))
                }

            </div>

        </div>
    );
}

export default App