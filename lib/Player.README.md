# Player Singleton Class

## Descripció

La classe `Player` implementa el patró de disseny **Singleton**, assegurant que només existeixi una instància única del jugador a tota l'aplicació.

## Característiques

- **Una sola instància**: Només pot existir una instància de Player a l'aplicació
- **Accés global**: Accés a la instància mitjançant `Player.getInstance()`
- **Prevenció d'instanciació directa**: No es pot crear amb `new Player()`
- **Classe congelada**: La classe està congelada per prevenir modificacions

## Ús

### Obtenir la instància

```javascript
const player = Player.getInstance();
```

### Mètodes disponibles

#### Gestió del nom
```javascript
player.setName("LinuxUPC");
const name = player.getName();
```

#### Gestió de la puntuació
```javascript
player.setScore(100);
const score = player.getScore();
player.addScore(50);  // Afegeix punts a la puntuació actual
```

#### Gestió del nivell
```javascript
player.setLevel(5);
const level = player.getLevel();
```

#### Estat del joc
```javascript
player.startPlaying();
player.stopPlaying();
const isPlaying = player.getIsPlaying();
```

#### Reiniciar
```javascript
player.reset();  // Reinicia a l'estat inicial
```

## Exemple d'ús

```javascript
// Obtenir la instància del jugador
const player1 = Player.getInstance();
player1.setName("Alice");
player1.setScore(100);

// En qualsevol altra part del codi
const player2 = Player.getInstance();
console.log(player2.getName());  // "Alice"
console.log(player2.getScore()); // 100

// player1 i player2 són el mateix objecte
console.log(player1 === player2); // true
```

## Demo

Pots veure una demostració interactiva del patró Singleton obrint el fitxer `player-demo.html` en un navegador.

## Proves

El fitxer `Player.test.js` conté proves per verificar:
- Que getInstance() retorna sempre la mateixa instància
- Que la instanciació directa està previnguda
- Que l'estat es comparteix entre referències
- Que tots els mètodes funcionen correctament
- Que el reset funciona com s'espera

## Patró Singleton

El patró Singleton assegura que:
1. Una classe només tingui una única instància
2. Proporciona un punt d'accés global a aquesta instància
3. L'instància es crea de manera lazy (només quan es necessita)

Aquest patró és útil quan necessitem exactament un objecte per coordinar accions a través del sistema, com ara:
- Gestió de configuració
- Gestió d'estat del jugador en un joc
- Connexions a bases de dades
- Gestors de recursos compartits
