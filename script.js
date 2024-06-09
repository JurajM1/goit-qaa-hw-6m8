// funkcja do zmiany naglowka
function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "Nowy nagłówek";
}

// funkcja do zmiany koloru
function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

//przykladowy komentarz

/*
przykladowy
komentarz
*/

console.log("jaks tam tekst");

// Zadanie 1
//analyza pliku user.json
// {
// "name": "Josh",    - Klucz "name": Wartość "Josh" to typ danych string (łańcuch znaków).
// "weight": 175,     - Klucz "weight": Wartość 175 to typ danych number (liczba).
// "age": 30,         - Klucz "age": Wartość 30 to również typ danych number (liczba).
// "eyecolor": true,  - Klucz "eyecolor": Wartość true to typ danych boolean (wartość logiczna).
// "isHappy": true,   - Klucz "isHappy": Wartość true to również typ danych boolean (wartość logiczna).
// "cars": ["Chevy", "Honda"],  - Klucz "cars": Wartość ["Chevy", "Honda"] to typ danych array (tablica). Zawiera dwie marki samochodów.
// "favoriteBook": {              - Klucz "favoriteBook": Wartość tego klucza to obiekt (object). Zawiera informacje o ulubionej książce:
// "title": "The Last Kingdom",   - "title": "The Last Kingdom" (typ danych: string)
// "author": "Bernard Cornwell",  - "author": "Bernard Cornwell" (typ danych: string)
// "rating": 8.38                 - "rating": 8.38 (typ danych: number)
//  }
// }
