import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">

{/* - 	IMAGEN CAÍDA */}

			<img src="../img/LOGO STAR WARS.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
			<div class="dropdown">
				<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>

{/* -	AÑADIR CÓDIGO TODOLIST
	-	CAMBIAR ICONO PAPELERA
	-	MODIFICAR ESTADO ASOCIADO AL BOTÓN FAVORITO DE LAS CARD */}
	
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</nav>
	);
};
