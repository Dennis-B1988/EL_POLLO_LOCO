# El Pollo Loco 🐔

A classic 2D jump & run game built with vanilla JavaScript, HTML5 Canvas, and CSS. Help Pepe navigate through a Mexican-themed world, collect coins and bottles, and defeat the crazy chicken boss!

## 🎮 Game Features

- **Classic Jump & Run Gameplay**: Move, jump, and throw bottles at enemies
- **Enemy System**: Fight chickens, small chickens, and a challenging endboss
- **Collectibles**: Gather coins and bottles throughout the levels
- **Status Bars**: Track your health, collected bottles, and coins
- **Sound Effects**: Immersive audio experience with toggle option
- **Responsive Design**: Optimized for different screen sizes

## 🕹️ How to Play

### Controls

- **Arrow Keys** or **WASD**: Move left/right and jump
- **Spacebar**: Throw bottles at enemies
- **Sound Toggle**: Click the sound icon to enable/disable audio

### Objective

1. Navigate through the level avoiding or defeating enemies
2. Collect coins and bottles for points and ammunition
3. Reach and defeat the endboss to win the game
4. Don't let your health reach zero!

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Running the Game

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Click "Start Game" to begin playing
4. Enjoy!

```bash
# If using a local server (recommended)
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

## 🏗️ Project Structure

```
EL_POLLO_LOCO/
├── index.html          # Main game file
├── css/                # Stylesheets
├── js/                 # Game logic
├── models/             # Game object classes
├── levels/             # Level configurations
└── assets/             # Images, sounds, and other media
```

## 🛠️ Technical Details

- **Language**: Vanilla JavaScript (ES6+)
- **Graphics**: HTML5 Canvas API
- **Audio**: Web Audio API
- **Architecture**: Object-oriented programming with classes
- **No external dependencies**: Pure web technologies

## 🎯 Game Classes

- `Character`: Main player character (Pepe)
- `Chicken` & `ChickenSmall`: Enemy types
- `Endboss`: Final boss enemy
- `World`: Game world and collision detection
- `ThrowableObject`: Bottle projectiles
- `StatusBar`: UI elements for health, coins, bottles

## 🎨 Assets

The game includes custom graphics and sound effects for:

- Character animations (walking, jumping, idle, hurt)
- Enemy sprites and animations
- Background landscapes
- UI elements and status bars
- Sound effects and background music

## 🌟 Features in Detail

- **Collision Detection**: Precise collision system for enemies, collectibles, and projectiles
- **Animation System**: Smooth sprite-based animations for all game objects
- **Level Design**: Carefully crafted level with strategic enemy and item placement
- **Game States**: Start screen, gameplay, win/lose conditions
- **Performance Optimized**: Efficient rendering and game loop management

## 🎵 Audio

Toggle sound on/off using the speaker icon. The game features:

- Background music
- Jump and movement sounds
- Collision and damage effects
- Victory and defeat audio cues

---

**Enjoy playing El Pollo Loco!** 🎮✨
