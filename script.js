// script.js – load 30 products & modal
const products = [
  {name:'Running Shoes',price:59.99,img:'https://images.unsplash.com/photo-1513105737059-ff0cf0580c39?auto=format&fit=crop&w=500&q=60',desc:'Lightweight running shoes for daily training.'},
  {name:'Gym Backpack',price:39.99,img:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=60',desc:'Spacious backpack with ventilated shoe pocket.'},
  {name:'Fitness T-Shirt',price:19.99,img:'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=500&q=60',desc:'Moisture-wicking quick-dry tee.'},
  {name:'Yoga Mat',price:24.99,img:'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=500&q=60',desc:'Non-slip eco-friendly yoga mat.'},
  {name:'Water Bottle',price:14.99,img:'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=60',desc:'BPA-free stainless bottle, 750 ml.'},
  {name:'Sports Watch',price:79.99,img:'https://images.unsplash.com/photo-1571902943205-f6e9f06f35ad?auto=format&fit=crop&w=500&q=60',desc:'GPS watch with heart-rate monitor.'},
  {name:'Baseball Cap',price:17.99,img:'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=60',desc:'Adjustable cotton cap with logo.'},
  {name:'Training Shorts',price:29.99,img:'https://images.unsplash.com/photo-1577684434961-1c398c0e8aa8?auto=format&fit=crop&w=500&q=60',desc:'4-way-stretch quick-dry shorts.'},
  // 22 more dummy items…
];

for (let i = 8; i < 30; i++) {
  products.push({
    name: `Sample Item ${i+1}`,
    price: (Math.random()*60+15).toFixed(2),
    img:`https://picsum.photos/seed/item${i}/500/500`,
    desc:'Demo description for sample item.'
  });
}

const grid = document.querySelector('.product-grid');
products.forEach(p => {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.innerHTML = `
    <img src=\"${p.img}\" alt=\"${p.name}\">
    <h3>${p.name}</h3>
    <p class=\"price\">$${p.price}</p>`;
  card.addEventListener('click', () => openModal(p));
  grid.appendChild(card);
});

const modal = document.getElementById('modal');
const mImg = document.getElementById('modal-img');
const mTitle = document.getElementById('modal-title');
const mPrice = document.getElementById('modal-price');
const mDesc = document.getElementById('modal-desc');
document.getElementById('modal-close').onclick = () => modal.classList.remove('show');

function openModal(p) {
  mImg.src = p.img;
  mTitle.textContent = p.name;
  mPrice.textContent = `$${p.price}`;
  mDesc.textContent = p.desc;
  modal.classList.add('show');
}
