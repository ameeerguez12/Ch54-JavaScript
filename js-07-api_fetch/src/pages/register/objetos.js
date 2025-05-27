const myObj = {
    key: "valor",
    _name: "SerchNeo", // propiedad interna
    firstName: "Trrs",
    email: "serchneo@matrix.com",
    password: "despertar&",
    birthdate: "2025-02-25",
    isActive: true,
    hobbies: ["Despertar personas", "Verdades incómodas", "Comer puré"],
    favoritos: {
        bebidas: ["agua", "pozol", "agua de tamarindo"],
        comidas: ["pozole", "tacos de suadero"]
    }
};
const ejecutarObjetos=()=>{
console.log(myObj);
const nombrePersona=myObj._name;
const fav=myObj.favoritos.bebidas;
const segundaBebida=favoritos[1];
/*
ma legible y corta
*/
const firstName=myObj.firstName;
/*
soporta ombres con espacio, simbolo o dinamicos
*/
const primerNom=myObj["firstName"];
}
export {ejecutarObjetos}