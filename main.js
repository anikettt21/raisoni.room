// Function to save nickname to localStorage
function saveNickname() {
  const input = document.getElementById("nickname").value.trim();
  let nickname = input || "Anonymous" + Math.floor(Math.random() * 1000);
  localStorage.setItem("nickname", nickname);
}

// Load saved nickname when page loads
function loadSavedNickname() {
  const savedNickname = localStorage.getItem("nickname");
  if (savedNickname) {
    document.getElementById("nickname").value = savedNickname;
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  loadSavedNickname();
  
  // Add real-time nickname saving
  const nicknameInput = document.getElementById("nickname");
  nicknameInput.addEventListener('input', function() {
    localStorage.setItem("userNickname", this.value.trim());
  });
});
