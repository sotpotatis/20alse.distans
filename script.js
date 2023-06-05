/* Skript för att kolla fjärrundervisning. Nästan pinsamt enkelt. Använder SSIS själva som källa. */
$.getJSON({url: "https://api.ssis.nu/cal/?room=Hela%20skolan", success:
  function(data) { /* Loopa igenom event för hela skolan idag */
    for (i = 0; i < data.length; i++) {
      var subject = data[i].subject.toLowerCase(); /* Hämta aktuellt ämne */
      if (subject.includes("fjärrundervisning") == true) {
        if (subject.includes("a-k")) {
          $("#text").text("A-K");
        }
	else if (subject.includes("l-ö")) {
          $("#text").text("L-Ö");
        }
      }
    }
  }
  }
)
