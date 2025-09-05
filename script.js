// Emergency Service Data
const services = [
  { title: "National Emergency Number", type: "National Emergency", number: "999", icon: "🚨" },
  { title: "Police Helpline Number", type: "Police", number: "999", icon: "👮" },
  { title: "Fire Service Number", type: "Fire Service", number: "999", icon: "🚒" },
  { title: "Ambulance Service", type: "Ambulance", number: "1994-999999", icon: "🚑" },
  { title: "Women & Child Helpline", type: "Women & Child", number: "109", icon: "👩‍👧" },
  { title: "Anti-Corruption Helpline", type: "Govt.", number: "106", icon: "⚖️" },
  { title: "Electricity Helpline", type: "Electricity Outage", number: "16216", icon: "💡" },
  { title: "Brac Helpline", type: "NGO", number: "16445", icon: "🏥" },
  { title: "Bangladesh Railway Helpline", type: "Travel", number: "163", icon: "🚂" }
];

// Insert cards dynamically
const cardSection = document.getElementById("card-section");

services.forEach(service => {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded shadow hover:shadow-lg transition";

  card.innerHTML = `
    <div class="flex items-center gap-2 mb-2 text-green-700 text-lg">
      <span>${service.icon}</span>
      <h2 class="font-semibold">${service.title}</h2>
    </div>
    <p class="text-gray-600 text-sm">${service.type}</p>
    <p class="text-2xl font-bold mt-2">${service.number}</p>
    <div class="flex justify-between gap-2 mt-3">
      <button class="flex-1 bg-gray-200 text-gray-700 py-1 rounded hover:bg-gray-300 copy-btn">📋 Copy</button>
      <button class="flex-1 bg-green-600 text-white py-1 rounded hover:bg-green-700 call-btn">📞 Call</button>
    </div>
  `;

  // Copy event
  card.querySelector(".copy-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(service.number);
    alert(`Copied: ${service.number}`);
  });

  // Call event
  card.querySelector(".call-btn").addEventListener("click", () => {
    addToHistory(service);
  });

  cardSection.appendChild(card);
});

// Call History
const historyList = document.getElementById("call-history-list");

function addToHistory(service) {
  const li = document.createElement("li");
  const now = new Date();
  const time = now.toLocaleTimeString();
  li.textContent = `${service.title} (${service.number}) - ${time}`;
  historyList.prepend(li); // latest on top
}

// Clear History
document.getElementById("clear-history").addEventListener("click", () => {
  historyList.innerHTML = "";
});

