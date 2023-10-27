import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import "./App.css"
export default function App() {

    
    const allNewDice=()=> {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice;
    }

    
    const [dice, setDice] = React.useState(allNewDice)
    function rollDice() {
       if(tenzies ){ 
                
                setDice(allNewDice);
                setTenzies(!tenzies) }
       else{
            setDice(olddice=>olddice.map(die=>{
                return die.isHeld ? die :{
                value : Math.ceil(Math.random() * 6),
                    isHeld: false,
                    id: nanoid()
            } ;
        }))}
    }
    const [tenzies, setTenzies] = React.useState(false);
    React.useEffect(() => {
            const allHeld=  dice.every(die=>
                die.isHeld===true
            )
            const first=dice[0].value;
            const sameHeld=dice.every(die=>
                die.value===first
            )
            if(allHeld && sameHeld) {
                setTenzies(true);
               console.log("You Won")
                

            }
            
     
    }, [dice])
    
/**
 * Challenge: Update the `holdDice` function to flip
 * the `isHeld` property on the object in the array
 * that was clicked, based on the `id` prop passed
 * into the function.
 * 
 * Hint: as usual, there's > 1 way to accomplish this.
 * I'll be using `dice.map()` and checking for the `id`
 * of the die to determine which one to flip `isHeld` on,
 * but you can do whichever way makes the most sense to you.
 */
    function holdDice(id) {
        setDice(olddice=>olddice.map(die=>{
            return die.id===id ? {...die,isHeld: !die.isHeld} :die;
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <main>
            <h1>Tenzies</h1>
            <p>Roll until all dices are same.Click each die to freeze at its current value between rolls</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" :"Roll"}</button>
        </main>
    )
}