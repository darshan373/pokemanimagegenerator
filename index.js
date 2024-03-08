/*
let names=["a", "b", "c", "d"];
 let data={
    "name": "Darshan","age":13,"sex":"male"
 }

 let names1=JSON.stringify(names);
 console.log(names1);

 let data1=JSON.stringify(data);
 console.log(data1);
 console.log(data1);


 const arrayOfObjectsJSON = `[
    { "name": "John", "age": 30 },
    { "name": "Jane", "age": 25 },
    { "name": "Bob", "age": 35 }
]`;

const arrayOfObjects = JSON.parse(arrayOfObjectsJSON);
console.log(arrayOfObjects);


*/
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => {
    if(!response.ok){
        throw Error("no fetch");
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.log(error));

*/
async function fetchdata(){
    try {

        const pokename=document.getElementById("answer").value.toLowerCase();
        const img=document.getElementById("imgpoke")

        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
        if(!response.ok){
            img.style.display="none";
            throw Error("no fetch");
        }

        let data=await response.json();
        console.log(data);
        
        img.src=data.sprites.front_default;
        img.style.display="block"
        
    } catch (error) {
        
console.error(error);
        
    }
}

fetchdata();