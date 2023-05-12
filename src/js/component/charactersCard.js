import React from "react";

export const CharactersCard = () =>(
    <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">C-3PO</h5>
            <p className="card-gender">Gender: SUPERPURPLE</p>
            <p className="card-gender">Hair color: PURPLE</p>
            <p className="card-gender">Eye-Color: PURPLE TOO</p>
            <a href="#" className="btn btn-primary">Learnmore!</a>
            <button type="button" class="btn btn-link"><FontAwesomeIcon icon={faHeart} /></button>
        </div>
    </div>
);