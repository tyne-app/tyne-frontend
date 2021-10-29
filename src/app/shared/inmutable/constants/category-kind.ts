/** 
 * Otro                  13                    
 * Entradas              14
 * Fondos                15
 * Agregados             16
 * Bebestibles           17
 * Postres               18
 * Bebestibles Frios     19
 * Bebestibles Calientes 20
 * Sandwiches            21
 * Pasteles y Dulces     22
*/


// type CategoryIds = 13 | 14 | 15 | 16
//   | 17 | 18 | 19
//   | 20 | 21 | 22;

type CategoryTypes = 'Otro' | 'Entradas'| 'Fondos'
  | 'Agregados' | 'Bebestibles' | 'Postres'
  | 'Bebestibles Frios' | 'Bebestibles Calientes'
  | 'Sandwiches' | 'Pasteles y Dulces' ;

export const Categories : Map<number, CategoryTypes> = new Map([
    [ 13, "Otro"],
    [ 14, "Entradas"]
]);
