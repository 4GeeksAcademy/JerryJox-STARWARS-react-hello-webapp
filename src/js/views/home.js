import React, {useContext, useEffect} from "react"; //importar HOOK useContext
import { Context } from "../store/appContext"; //importar Context
import "../../styles/home.css";
import { CharactersCard } from "../component/charactersCard.js";
import { isHtmlElement } from "react-router-dom/dist/dom";

export const Home = () => {

	//!!debo llamar el array de objetos de characters "store.characters"
	
	const {store,actions} = useContext(Context); //consumir el contexto

	useEffect (() => {
		actions.fetchCharacters();
    }, []);

	return( 
		<div className="container">
			<div className="row flex-nowrap">
				<h1 className="h1">Characters</h1>
				<div id="card-view" className="d-flex overflow-auto">
					{/* aquí corresponde el mapeado de store.character para
							que me dibuje una card cada vez que itere */}
					{store.characters.map((character) => (
						<CharactersCard 
						name={character.name}
						eyes_color={character.color_eyes}
						// key={character.id} character={character}
						 />
					))}
				</div>
			</div>
		</div>
	);
};