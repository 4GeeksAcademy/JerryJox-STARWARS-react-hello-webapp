import React, {useContext, useEffect} from "react"; //importar HOOK useContext
import { Context } from "../store/appContext"; //importar Context
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharactersCard } from "../component/charactersCard.js";

export const Home = () => {

	//!!debo llamar el array de objetos de characters "store.characters"
	
	const {store,actions} = useContext(Context) //consumir el contexto

	useEffect (() => {
		actions.fetchCharacters()
    }, [])



	return( 
	<div className="container">
		<div className="row flex-nowrap">

						{/* aquí corresponde el mapeado de store.character para
						que me dibuje una card cada vez que itere */}

			<CharactersCard />
			<CharactersCard />
			
		</div>
	</div>

)};
