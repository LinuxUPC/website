/**
 * Player class implemented as a Singleton pattern
 * Ensures only one instance of the Player exists throughout the application
 */
class Player {
  // Private static instance
  static #instance = null;

  // Private constructor to prevent direct instantiation
  constructor() {
    // Prevent direct instantiation
    if (Player.#instance) {
      throw new Error("Player is a singleton class. Use Player.getInstance() instead.");
    }

    // Initialize player properties
    this.name = "";
    this.score = 0;
    this.level = 1;
    this.isPlaying = false;
  }

  /**
   * Get the singleton instance of Player
   * @returns {Player} The singleton instance
   */
  static getInstance() {
    if (!Player.#instance) {
      Player.#instance = new Player();
    }
    return Player.#instance;
  }

  /**
   * Set the player name
   * @param {string} name - The player's name
   */
  setName(name) {
    this.name = name;
  }

  /**
   * Get the player name
   * @returns {string} The player's name
   */
  getName() {
    return this.name;
  }

  /**
   * Set the player score
   * @param {number} score - The player's score
   */
  setScore(score) {
    this.score = score;
  }

  /**
   * Get the player score
   * @returns {number} The player's score
   */
  getScore() {
    return this.score;
  }

  /**
   * Increase the player score
   * @param {number} points - Points to add to the score
   */
  addScore(points) {
    this.score += points;
  }

  /**
   * Set the player level
   * @param {number} level - The player's level
   */
  setLevel(level) {
    this.level = level;
  }

  /**
   * Get the player level
   * @returns {number} The player's level
   */
  getLevel() {
    return this.level;
  }

  /**
   * Start playing
   */
  startPlaying() {
    this.isPlaying = true;
  }

  /**
   * Stop playing
   */
  stopPlaying() {
    this.isPlaying = false;
  }

  /**
   * Check if player is currently playing
   * @returns {boolean} True if playing, false otherwise
   */
  getIsPlaying() {
    return this.isPlaying;
  }

  /**
   * Reset player to initial state
   */
  reset() {
    this.name = "";
    this.score = 0;
    this.level = 1;
    this.isPlaying = false;
  }
}

// Prevent modification of the class
Object.freeze(Player);
