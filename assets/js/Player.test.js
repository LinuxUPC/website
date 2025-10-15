/**
 * Test file for Player singleton class
 * This file demonstrates that the Player class correctly implements the singleton pattern
 */

// Import is not needed for script tags, but this would be the ES6 way:
// import Player from './Player.js';

/**
 * Test 1: Verify that getInstance returns the same instance
 */
function testSingletonInstance() {
  const player1 = Player.getInstance();
  const player2 = Player.getInstance();
  
  console.assert(player1 === player2, "FAIL: getInstance should return the same instance");
  console.log("✓ Test 1 PASSED: getInstance returns the same instance");
}

/**
 * Test 2: Verify that direct instantiation throws an error
 */
function testDirectInstantiationPrevention() {
  try {
    const player = new Player();
    console.error("✗ Test 2 FAILED: Direct instantiation should throw an error");
  } catch (error) {
    console.assert(
      error.message.includes("singleton"),
      "FAIL: Error message should mention singleton"
    );
    console.log("✓ Test 2 PASSED: Direct instantiation correctly prevented");
  }
}

/**
 * Test 3: Verify that state is shared across instances
 */
function testSharedState() {
  const player1 = Player.getInstance();
  const player2 = Player.getInstance();
  
  player1.setName("TestPlayer");
  player1.setScore(100);
  player1.setLevel(5);
  
  console.assert(player2.getName() === "TestPlayer", "FAIL: Name should be shared");
  console.assert(player2.getScore() === 100, "FAIL: Score should be shared");
  console.assert(player2.getLevel() === 5, "FAIL: Level should be shared");
  console.log("✓ Test 3 PASSED: State is correctly shared across instances");
}

/**
 * Test 4: Verify player methods work correctly
 */
function testPlayerMethods() {
  const player = Player.getInstance();
  player.reset();
  
  player.setName("Alice");
  console.assert(player.getName() === "Alice", "FAIL: setName/getName");
  
  player.setScore(50);
  console.assert(player.getScore() === 50, "FAIL: setScore/getScore");
  
  player.addScore(25);
  console.assert(player.getScore() === 75, "FAIL: addScore");
  
  player.setLevel(3);
  console.assert(player.getLevel() === 3, "FAIL: setLevel/getLevel");
  
  console.assert(player.getIsPlaying() === false, "FAIL: Initial isPlaying should be false");
  player.startPlaying();
  console.assert(player.getIsPlaying() === true, "FAIL: startPlaying");
  player.stopPlaying();
  console.assert(player.getIsPlaying() === false, "FAIL: stopPlaying");
  
  console.log("✓ Test 4 PASSED: All player methods work correctly");
}

/**
 * Test 5: Verify reset functionality
 */
function testReset() {
  const player = Player.getInstance();
  
  player.setName("Bob");
  player.setScore(999);
  player.setLevel(10);
  player.startPlaying();
  
  player.reset();
  
  console.assert(player.getName() === "", "FAIL: Name should be empty after reset");
  console.assert(player.getScore() === 0, "FAIL: Score should be 0 after reset");
  console.assert(player.getLevel() === 1, "FAIL: Level should be 1 after reset");
  console.assert(player.getIsPlaying() === false, "FAIL: isPlaying should be false after reset");
  
  console.log("✓ Test 5 PASSED: Reset works correctly");
}

/**
 * Run all tests
 */
function runAllTests() {
  console.log("\n=== Running Player Singleton Tests ===\n");
  
  testSingletonInstance();
  testDirectInstantiationPrevention();
  testSharedState();
  testPlayerMethods();
  testReset();
  
  console.log("\n=== All tests completed ===\n");
}

// Auto-run tests when page loads (if in browser)
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', runAllTests);
}

// Export for Node.js testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runAllTests };
}
