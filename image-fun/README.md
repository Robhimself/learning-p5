// ImageFun: hvordan jeg lærer p5.js og ml5.js, med kommentarer //

Det første man gjør er å tegne et 'canvas' med createCanvas(x, y).

Deretter kommer funksjonen draw(), som tegner bobler.
NB! Dette lærte jeg et par dager senere, fordi jeg ville finne ut hvorfor funksjonene blir påkalt uten å kalle på dem på "Vanilla-JS"-måten jeg vanligvis gjør:

- setup() kjører automatisk, deretter draw().
- I tillegg er draw() en loop, som da forklarer hvorfor man kan se bevegelse inne i canvaset.

Det neste jeg gjorde, var å finne ut av hvordan jeg skal få laget en "onclick". Dette har med min 'image-classifier' å gjøre. Der er koden skrevet slik at den blir kjørt fra start, og ML tar over og forsøker å klassifisere dyret som er på bildet.
Dette er jo veldig enkelt, og kjedelig, så jeg ville tegne flere bilder i canvaset og kun kjøre .predict(animal-in-img) på det bildet jeg har trykket på.

Det er mye mulig at man kan få til dette på MVC-måten, men utifra det lille jeg leste av dokumentasjonen på p5js.org så virket det som at koordinatene til musen er måten man gjør det på.

Og derfor ble en av boblene satt til mouseX,mouseY. Og det fungerer flott. Dette er læring jeg kan bruke senere!

Den neste utfordringen er å få noe til å skje når musen er over et annet objekt, og der må vi få hjelp av vår gode venn, matematikk.

Idéen er: Hver boble som er tegnet opp blir laget fra 'x' og 'y' og deretter har man 'r'-radius som vokser fra det x,y-koordinatet.

Når man vet dette, så kommer .intersects(other) inn i bildet.
Der sjekkes det om radiusen til 'this.x, this.y' + 'other.x, other.y' er mindre enn avstanden('d') mellom punktene. Hvis avstanden er mindre enn radiusen, vil det si at "kantene" overlapper. Og når dette skjer så forandrer bakgrunnsfargen seg.
