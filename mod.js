// Erstelle eine Instanz des Mutation Observers
const observer = new MutationObserver(function(mutations) {
  // Iteriere durch alle Mutationen
  mutations.forEach(function(mutation) {
    // Finde alle Input-Felder mit dem Attribut "data-vv-name" gleich "checkin" oder "checkout"
    const inputFields = document.querySelectorAll('input[data-vv-name="checkin"], select[id="nights"], input[data-vv-name="checkout"]');

    // Iteriere durch alle gefundenen Input-Felder
    inputFields.forEach(function(inputField) {
      // Überprüfe, ob das Input-Feld deaktiviert ist
      if (inputField.disabled) {
        // Entferne das "disabled"-Attribut
        inputField.removeAttribute("disabled");
      }
    });
  });
});

// Konfiguration des Mutation Observers
const config = {
  attributes: true, // Überwache Änderungen an Attributen
  childList: true, // Überwache das Hinzufügen oder Entfernen von Kindknoten
  subtree: true // Überwache Veränderungen im gesamten Unterbaum
};

// Starte den Mutation Observer
observer.observe(document.body, config);
