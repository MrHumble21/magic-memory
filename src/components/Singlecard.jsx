import React from "react";


const SingleCard = ({inputCard, handleChoice, flipped, disabled}) => {
    const handleClick = () => {
        handleChoice(inputCard)
    }

    return (
        <>
            <div className='card' key={inputCard.id}>
                <div className={flipped ? 'flipped' : ''}>
                    <img src={inputCard.src}
                         className='front' alt="front"/>
                    <img
                        src='./img/cover.png'
                        className='back'
                        disabled={disabled}
                        onClick={handleClick}
                        alt="front"/>
                </div>
            </div>
        </>
    )
}

export default SingleCard