async function getrecipes(){
  const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`);
  const data = await response.json();
  const count  = data.results;
  const recipes = data.data.recipes;

  const results = recipes.map(function(element){
    return `
    <div class=recipe>
    <h2>Title:${element.title}</h2>
    <img src="${element.image_url}"/>
    </div>
    `;
  }).join('');


  document.querySelector(".recipes .count").textContent=`Number Of Recipes:${count}`;
  document.querySelector(".recipes").innerHTML += results;
 

}
getrecipes();