import { useState } from "react"

export default function Batsman(){
    // state diclar and must need a value 
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)
    const [fours, setFours] = useState(0)
    const [threes, setThrees] = useState(0)
    const [doubles, setDoubles] = useState(0)
    const [single, setSingle] = useState(0)
 
    // handelar add (1/6)

// single
    const handleSingle = ()=>{
        const updateSingleRuns = runs+ 1;
        setRuns(updateSingleRuns)
        // number of singles
        const updateNumberSingle= single + 1;
        setSingle(updateNumberSingle)
    }

// Double
const handleDouble = ( ) =>{
    const updateDoubleRuns = runs +2;
    setRuns(updateDoubleRuns)
    //  number of doubles
     const updateNumberDoubles= doubles + 1;
    setDoubles(updateNumberDoubles)
}

// Tripplr
const handleTripple = () =>{
    const updateTrippleRuns = runs + 3;
    setRuns(updateTrippleRuns)
    //  number of threes
    const updateNumberThrees = threes + 1;
    setThrees(updateNumberThrees)
}

// 4
const handleFour = () =>{
    const updateFourRuns = runs + 4;
    setRuns(updateFourRuns)

    const updateNumberFours = fours + 1;
    setFours(updateNumberFours)
}
// 6
const handleSix = () =>{
    const updateSixRuns = runs + 6;
    setRuns(updateSixRuns)

    const updateNumberSixes = sixes + 1;
    setSixes(updateNumberSixes)
}

    // css for div
    const batsmanStyle = {
        border: '2px solid pink'
        
    }
    return(
        <div style={batsmanStyle}>
            <p>Number of single: {single}</p>
            <p>Number of doubles: {doubles}</p>
            <p>Number of threes: {threes}</p>
            <p>Number of fours: {fours}</p>
            <p>Number of Sixes: {sixes}</p>

            
            <h3>Scor:{runs} </h3>
            <button onClick={handleSingle} >Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleTripple}>Tripple</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}