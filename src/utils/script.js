

async function getAnimals(){
    const result = await fetch('http://localhost:3000/animals');
    const data = await result.json();
    return data;
}

let listAnimals = document.getElementById('animal');

export default getAnimals;