import React, { useState } from 'react';
import './styles.css'
import FetchGame from '../FetchGame/FetchGame'

//access to APIKEY for RAWG
let APIKEY = process.env.REACT_APP_RAWG_API_KEY;
console.log("here is the APIKEY, remove before deployment " + APIKEY)

// let game = "halo"

const AddToCollection = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [gameResults, setGameResults] = useState([]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let slug = searchTerm

        setGameResults([])
        fetch('https://rawg.io/api/games?search=' + slug )
        .then(resp => resp.json())
        .then(({results}) => {
            results === undefined ? alert('no games found') : setGameResults(results)
            console.log(results[0].name, results[0])
        })
        setSearchTerm("");
        
    }

    return (
        
        <div className="game-search">
            <h1>Find Game for Collection</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" value={searchTerm} onChange={handleChange} />
                    <br></br>
                    <input type="submit" />
                </form><FetchGame>
                </FetchGame>
        </div>
    )
}

export default AddToCollection;

// export default class AddToCollection extends React.Component {

//     state = {
//         loading: true,
//         game: null
//     }

//     async componentDidMount(){
//         const url = "https://rawg.io/api/games/" + game ;
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data.name);

//     }

//     render(){
//     return(<div>
        
//         <h1>Add To Collection here</h1>
//         <input type="text" id="game-search" placeholder="Search For Games" />
//         <button type="submit" id="game-search-button">Search</button>
//         {this.state.loading ? <div>loading...</div> : <div>game...</div>}
//         </div>
//         );

//     }
// }
