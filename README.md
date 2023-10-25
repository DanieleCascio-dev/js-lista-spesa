##esercizio

Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while

##Soluione

_dati_

1. Inizializzo un array lista della spesa

_Logica_

1. Inizializzo una varabile per indicare l'indice (i = 0)
2. Inizializzo una variabile string vuota (listaSpesa = "")
3. Creo un ciclo while con la condizione che i < array.length
4. Dentro a listaSpesa creo un tag hrml <li>${array.length[i]}</i>
5. Fuori dal ciclo stampo nel ul.innerHtml listaSpesa.
