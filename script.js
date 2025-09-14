// Initial Values
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// DOM Elements
const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyListEl = document.getElementById("historyList");

// set initial values in Navbar
heartCountEl.textContent = heartCount;
coinCountEl.textContent = coinCount;
copyCountEl.textContent = copyCount;

// 💗 Toggle Heart (Increase / Decrease)
function toggleHeart(favEl) {
  const icon = favEl.querySelector("i");

  if (icon.classList.contains("fa-solid")) {
    // already active → remove
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
    heartCount--;
  } else {
    // inactive → add
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
    heartCount++;
  }

  heartCountEl.textContent = heartCount;
}

// 📞 Make a Call
function makeCall(serviceName, number) {
  if (coinCount < 20) {
    alert("Not enough coins to make this call!");
    return;
  }

  alert(`Calling ${serviceName} - ${number}`);

  // Deduct 20 coins
  coinCount -= 20;
  coinCountEl.textContent = coinCount;

  // Add to Call History
  const li = document.createElement("li");
  const time = new Date().toLocaleTimeString();
  li.textContent = `${serviceName} (${number}) — ${time}`;
  historyListEl.appendChild(li);
}

// 📋 Copy Number
function copyNumber(number) {
  navigator.clipboard.writeText(number)
    .then(() => {
      alert(`Number ${number} copied to clipboard!`);
      copyCount++;
      copyCountEl.textContent = copyCount;
    })
    .catch(err => {
      alert("Failed to copy number.");
      console.error(err);
    });
}

// 🗑️ Clear History
function clearHistory() {
  historyListEl.innerHTML = "";
}

// 🔗 Add click event for all fav hearts dynamically
document.querySelectorAll(".fav").forEach(fav => {
  fav.addEventListener("click", () => toggleHeart(fav));
});
