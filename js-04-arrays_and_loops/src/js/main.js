// Acceder al primer elemento
console.log( techStack.length ); // 3
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); 
// Accediendo al segundo elemento
console.log(`Accediendo al segundo elemento: ${ techStack[1] }` ); 
// Acceder al último elemento (longitud - 1)
console.log(`Accediendo al último elemento: ${ techStack[techStack.length - 1] }` ); 



// --- Método splice() ---
// Permite eliminar o agregar elementos en cualquier posición
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];


// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

function modificarListaDeInvitados() {
  let guestList = ["Alice", "Bob"];
  console.log("Lista inicial:", guestList); 
  guestList.splice(guestList.length, 0, "Charlie"); 
  console.log("Después de añadir al final:", guestList);
  guestList.splice(0, 0, "David"); 
  console.log("Después de añadir al principio:", guestList); 
  guestList.splice(1, 1, "Eve"); 
  console.log("Lista final:", guestList);
  
  return guestList;
}

