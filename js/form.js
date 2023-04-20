// Creazione di un oggetto vuoto per salvare i dati
var datiRaccolti = {};

// Funzione per la gestione del click sul pulsante "Avanti"
function avanti() {
  // Otteniamo i valori dei campi del form
  var nome = document.getElementById('nome').value;
  var cognome = document.getElementById('cognome').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;

  // Salviamo i dati nell'oggetto datiRaccolti
  datiRaccolti.nome = nome;
  datiRaccolti.cognome = cognome;
  datiRaccolti.email = email;
  datiRaccolti.telefono = telefono;

  // Passiamo all'elemento successivo (ad esempio, un'altra pagina o un'altra sezione del form)
  // Implementa la logica appropriata per il tuo caso specifico
  // ...

  // Restituiamo false per prevenire il comportamento predefinito del pulsante (opzionale)
  console.log(datiRaccolti);
  return false;
}

// Associamo la funzione avanti() al pulsante "Avanti" mediante l'evento click
document.getElementById('btnAvanti').addEventListener('click', avanti);
