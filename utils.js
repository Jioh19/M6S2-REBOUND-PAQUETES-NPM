// En el archivo utils.j, crea una función que devuelva la concatenación de dos cadenas de
// texto, o el largo de caracteres resultante de la concatenación de las dos cadenas de texto,
// dependiendo de un valor booleano.

export function stringCatLen(string1, string2, largo) {
	if (largo) {
		return (string1 + string2).length;
	} else {
		return string1 + string2;
	}
}
