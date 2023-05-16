import React, {useState, useEffect} from "react";
// import {faHeart} from ""

export const CharactersCard = () => {
    const [result, setResult] = useState(null);
  
    return(
        <div className="card card-view">
                       <div>
                <img className="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536" alt="kk" />
                <div className="card-body">
                    <h5 className="card-title">azul</h5><br></br>
                    <p className="card-text">Gender: </p>
                    <p className="card-text">Hair color: </p>
                    <p className="card-text">Eye-color: </p>
                </div>
                <div>
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-warning">Warning</button>
                </div>
            </div>
        </div>
    );
};

{/* // export const CharactersCard = () =>(
//     <div className="container">
//          <div className="card" style={{width: "200px"}}>
//             <img src="src/img/logoStartWars.png" className="card-img-top" alt="..."/>
//             <div className="card-body">
//                 <h5 className="card-title">C-3PO</h5>
//                 <p className="card-gender">Gender: SUPERPURPLE</p>
//                 <p className="card-gender">Hair color: PURPLE</p>
//                 <p className="card-gender">Eye-Color: PURPLE TOO</p>
//                 <a href="#" className="btn btn-primary">Learnmore!</a>
//                 <button type="button" className="btn btn-link">FAV
//                 ---<FontAwesomeIcon icon={faHeart} />---
//                 </button>
//             </div>
//         </div>
//     </div>
// ); */}