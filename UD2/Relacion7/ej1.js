var textoCafe = `{
    "id": 2,
    "title": "Latte",
    "description": "As the most popular coffee drink out there the latte is made with a shot of espresso and steamed milk, with just a touch of foam. It can be ordered plain or flavored with everything from vanilla to pumpkin spice.",
    "ingredients": ["Espresso", "Steamed milk"],
    "image": "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww"
}`;

const cafe = JSON.parse(textoCafe);

console.log(cafe);

console.log(cafe.id);
console.log(cafe.title);
console.log(cafe.description);
console.log(cafe.ingredients);
console.log(cafe.image);

var fichaCafe = {
    id: cafe.id,
    nombre: cafe.title,
    ingredientes: cafe.ingredients,
    imagen: cafe.image
};

document.body.innerHTML = `
    <h1>${fichaCafe.nombre}</h1>
    <img src="${fichaCafe.imagen}" alt="${fichaCafe.nombre}" style="max-height: 300px;">
`;

var cafeSinImagen = {
    id: fichaCafe.id,
    nombre: fichaCafe.nombre,
    ingredientes: fichaCafe.ingredientes
};

var textoJSON = JSON.stringify(cafeSinImagen, null, 2);

console.log(textoJSON);

document.body.innerHTML += `
    <h2>JSON del café</h2>
    <pre>${textoJSON}</pre>
`;

var nuevoCafe = JSON.parse(textoJSON);

console.log(nuevoCafe);