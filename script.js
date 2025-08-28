const services = [
  {
    name: 'National Emergency Number',
    number: '999',
    category: 'All',
    icon: 'emergency.png'
  },
  {
    name: 'Police Helpline',
    number: '999',
    category: 'Police',
    icon: 'police.png'
  },
  {
    name: 'Fire Service',
    number: '999',
    category: 'Fire',
    icon: 'fire-service.png'
  },
  {
    name: 'Ambulance Service',
    number: '1994-999999',
    category: 'Health',
    icon: 'ambulance.png'
  },
  {
    name: 'Brac Helpline',
    number: '16445',
    category: 'NGO',
    icon: 'brac.png'
  },
  {
    name: 'Bangladesh Railway',
    number: '163',
    category: 'Travel',
    icon: 'Bangladesh-Railway.png'
  }
];

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const cardSection = document.getElementById('card-section');
const heartDisplay = document.getElementById('heart-count');
const coinDisplay = document.getElementById('coin-count');
const copyDisplay = document.getElementById('copy-count');
const callHistoryList = document.getElementById('call-history-list');
const clearHistoryButton = document.getElementById('clear-history');

function renderCards() {
  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg p-4 shadow relative';

    card.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="assets/${service.icon}" class="w-10 h-10">
        <div>
          <h3 class="text-md font-bold">${service.name}</h3>
          <p class="text-sm text-gray-500">${service.number}</p>
        </div>
      </div>
      <span class="inline-block mt-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">${service.category}</span>

      <div class="flex justify-between mt-4">
        <button class="copy-btn text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">📋 Copy</button>
        <button class="call-btn text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">📞 Call</button>
      </div>
      <span class="absolute top-2 right-2 cursor-pointer heart">💗</span>
    `;

    // Heart button
    card.querySelector('.heart').addEventListener('click', () => {
      heartCount++;
      heartDisplay.textContent = heartCount;
    });

    // Copy button
    card.querySelector('.copy-btn').addEventListener('click', () => {
      navigator.clipboard.writeText(service.number);
      alert(Copied ${service.number} to clipboard);
      copyCount++;
      copyDisplay.textContent = copyCount;
    });

    // Call button
    card.querySelector('.call-btn').addEventListener('click', () => {
      if (coinCount < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      alert(Calling ${service.name}: ${service.number});
      coinCount -= 20;
      coinDisplay.textContent = coinCount;

      const time = new Date().toLocaleTimeString();
      const li = document.createElement('li');
      li.textContent = ${service.name} - ${service.number} (${time});
      callHistoryList.appendChild(li);
    });

    cardSection.appendChild(card);
  });
}

clearHistoryButton.addEventListener('click', () => {
  callHistoryList.innerHTML = '';
});

renderCards();