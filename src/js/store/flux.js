const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: []
		},
		actions: {

			fetchCharacters: () =>{ 

			fetch("https://www.swapi.tech/api/people/")
            .then(res => res.json())
            .then(data => setStore({characters: data.results }))
            .then(error => console.log(error));},

			fetchPlanets: () => {

				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json()) // te trae una respuestas y la convierte en json
								 //setStore({propiedadDeStore:valor})
					.then(data => setStore({planets: data.results })) // esa respuesta la voy a guardar en un espacio de memoria que se llame "data" que a su vez se convertira en un objeto.
					.catch(err => console.log("request failed", err)); // si sale algo mal en alguno de los dos primeros paso
			
					
				// fetch("https://www.swapi.tech/api/planets")
				// 	.then(response => response.json()) // te trae una respuestas y la convierte en json
				// 				 //setStore({propiedadDeStore:valor})
				// 	.then(data => setStore({planets: data.results })) // esa respuesta la voy a guardar en un espacio de memoria que se llame "data" que a su vez se convertira en un objeto.
				// 	.catch(err => console.log("request failed", err)); // si sale algo mal en alguno de los dos primeros paso
			
		
				


				
			// 		// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			}
		}
	};
};

export default getState;
