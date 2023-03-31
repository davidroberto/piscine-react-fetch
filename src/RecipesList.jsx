import { useState } from "react";

const RecipesList = () => {
  // je créé une variable recipes dans le state
  // avec une valeur par défaut à false
  // au premier chargement du composant, recipes sera donc false
  // et aux chargements suivants, on récupérera la valeur de recipes dans le state
  // plutôt que la valeur par défaut (false)

  // useState nous fournit aussi une fonction pour modifier la valeur
  // de recipes dans le state
  const [recipes, setRecipes] = useState(false);

  // au chargement du composant, on fait une requête à l'API
  //
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
    // quand on récupère la réponse de l'API, on la transforme en Js lisible
    // avec la fonction json()
    .then((dataJson) => {
      return dataJson.json();
    })
    // quand la transformation est terminée, on récupère les données en Js
    // et on les stocke dans la variable recipes du state grâce
    // à la fonction setRecipes
    // cette fonction provoque aussi le rechargement du composant
    .then((dataJs) => {
      setRecipes(dataJs.meals);
    });

  return (
    <div>
      {/* 
      si recipes est pas false, ça veut dire qu'on a bien récupéré les recettes 
      donc on fait une boucle pour les afficher
    */}
      {recipes ? (
        recipes.map((recipe) => {
          return (
            <div>
              <h2>{recipe.strMeal}</h2>
            </div>
          );
        })
      ) : (
        // si recipes est false,
        // ça veut dire que la requête fetch n'est pas terminée
        // donc qu'on pas encore récupéré les recettes
        // et donc on affiche un message d'attente
        <p>En cours de chargement...</p>
      )}
    </div>
  );
};

export default RecipesList;
