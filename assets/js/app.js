/* LLAMA PAJAMAS™ storefront logic — demo mode (checkout coming soon) */
const PRODUCTS = [
 {id:"lumi-chill-dark", name:"Lumi 'Chill Vibes Only' Tee", coll:"alo-chill", collName:"Alo Chill",
  price:24.95, img:"assets/img/products/lumi-dark.jpg", tag:"NEW",
  desc:"Lumi doesn't do mornings. You don't have to either. Our teen llama in her signature dusty-blue headphones, printed on buttery-soft premium cotton. The official uniform of doing absolutely nothing, beautifully.",
  details:"100% ring-spun cotton · Relaxed fit · Sizes 2T–14Y and XS–XXL"},
 {id:"lumi-chill-light", name:"Lumi 'Chill Vibes Only' Tee — Ivory", coll:"alo-chill", collName:"Alo Chill",
  price:24.95, img:"assets/img/products/lumi-light.jpg", tag:"NEW",
  desc:"Same iconic chill, lighter canvas. Lumi's half-lidded stare of supreme relaxation on a soft ivory tee that goes with everything in the drawer.",
  details:"100% ring-spun cotton · Relaxed fit · Sizes 2T–14Y and XS–XXL"},
 {id:"puff-dream-dark", name:"Puff 'Dream Big, Little Llama' Tee", coll:"alo-chill", collName:"Alo Chill",
  price:22.95, img:"assets/img/products/puff-dark.jpg", tag:"BEST SELLER",
  desc:"The baby of the herd, curled into the sleepiest little plush-ball pose. 'Dream big, little llama' — because the smallest dreams are the coziest ones.",
  details:"100% ring-spun cotton · Toddler & youth sizes · Ultra-soft hand feel"},
 {id:"puff-dream-light", name:"Puff 'Dream Big, Little Llama' Tee — Ivory", coll:"alo-chill", collName:"Alo Chill",
  price:22.95, img:"assets/img/products/puff-light.jpg", tag:"BEST SELLER",
  desc:"Puff on ivory — maximum snuggle energy. The design that started the whole herd's bedtime revolution.",
  details:"100% ring-spun cotton · Toddler & youth sizes · Ultra-soft hand feel"},
 {id:"small-dreams", name:"'Small Llama, Big Dreams' Kids Set", coll:"kids", collName:"Kids Sets",
  price:29.95, img:"assets/img/products/small-dreams.jpg", tag:"NEW",
  desc:"The whole-herd bedtime mantra. A dreamy print for kids who fall asleep planning tomorrow's adventures.",
  details:"Soft cotton blend · Two-piece pajama set · Sizes 2T–10Y"},
 {id:"fueled-ideas", name:"'Fueled by Good Ideas' School Tee", coll:"kids", collName:"Kids Sets",
  price:21.95, img:"assets/img/products/good-ideas.jpg", tag:"BACK TO SCHOOL",
  desc:"For the kid whose brain never logs off. Lio-approved explorer energy, classroom-ready.",
  details:"100% ring-spun cotton · Classic fit · Sizes 4Y–14Y"},
 {id:"read-explore", name:"'Read, Explore, Be Kind' Tee", coll:"kids", collName:"Kids Sets",
  price:21.95, img:"assets/img/products/read-explore.jpg", tag:"",
  desc:"Three rules. Zero exceptions. Lola's gentle wisdom, wearable for school, weekends, and everywhere in between.",
  details:"100% ring-spun cotton · Classic fit · Sizes 4Y–14Y"},
 {id:"school-mode", name:"'School Mode: ON' Tee", coll:"kids", collName:"Kids Sets",
  price:21.95, img:"assets/img/products/school-mode.jpg", tag:"BACK TO SCHOOL",
  desc:"Flip the switch. Lumi reluctantly approves this message — school mode looks good on everyone.",
  details:"100% ring-spun cotton · Classic fit · Sizes 4Y–14Y"},
 {id:"grandma-love", name:"Grandma 'Fueled by Love' Tee", coll:"grandma", collName:"Grandma Collection",
  price:26.95, img:"assets/img/products/grandma-love.jpg", tag:"NEW",
  desc:"The official uniform of grandmas everywhere: powered by love, hugs, and absolutely no bedtime rules. Lola sends her regards.",
  details:"Soft cotton blend · Relaxed women's fit · Sizes S–3XL"},
 {id:"grandma-squad", name:"'Grandma Squad' Matching Tee", coll:"grandma", collName:"Grandma Collection",
  price:26.95, img:"assets/img/products/grandma-squad.jpg", tag:"",
  desc:"For the grandma squad that shows up matching and leaves glitter everywhere. Family matching starts here.",
  details:"Soft cotton blend · Relaxed women's fit · Sizes S–3XL"},
 {id:"grandpa-best", name:"'Best Grandpa Ever' Tee", coll:"grandpa", collName:"Grandpa Collection",
  price:26.95, img:"assets/img/products/grandpa-best.jpg", tag:"BEST SELLER",
  desc:"Paco's official endorsement: this grandpa explored first, napped second, and spoiled the grandkids third. Certified best.",
  details:"Soft cotton blend · Classic men's fit · Sizes S–3XL"},
 {id:"grandpa-hikes", name:"'More Hikes, More Hugs' Tee", coll:"grandpa", collName:"Grandpa Collection",
  price:26.95, img:"assets/img/products/grandpa-hikes.jpg", tag:"",
  desc:"The grandpa motto, straight from Paco's adventure journal. Trail-tested, grandkid-approved.",
  details:"Soft cotton blend · Classic men's fit · Sizes S–3XL"},
];

const HERD = [
 {name:"Paco", role:"Papa Llama", img:"assets/img/herd/paco.jpg",
  bio:"Adventurous, slightly goofy dad. Navy explorer scarf, one flopped ear, always pointing toward the next adventure."},
 {name:"Lola", role:"Mama Llama", img:"assets/img/herd/lola.jpg",
  bio:"Warm, clever, stylish mom. Terracotta shawl, cream flower by the ear, and the gentle smile that fixes everything."},
 {name:"Lumi", role:"Teen Llama", img:"assets/img/herd/lumi.jpg",
  bio:"Deliberately cooler and minimal. Oversized dusty-blue headphones, half-lidded eyes, utterly relaxed at all times."},
 {name:"Lio", role:"Boy Llama", img:"assets/img/herd/lio.jpg",
  bio:"Explorer kid — mountains, stars, camping. Olive vest with a mountain-and-stars patch, flag planted, ready to go."},
 {name:"Lulu", role:"Girl Llama", img:"assets/img/herd/lulu.jpg",
  bio:"Imaginative dreamer — hearts, stars, flowers, rainbows. Rainbow scarf flowing, twirling through every day."},
 {name:"Puff", role:"Baby Llama", img:"assets/img/herd/puff.jpg",
  bio:"The cuddly baby of the herd. A perfect sleepy plush ball. Designed to be hugged — plush coming soon."},
];

const REVIEWS = [
 {t:"My daughter refuses to take the Puff shirt off. We now own three. Send help (and more).", n:"Mariana · mom of two"},
 {t:"Finally — a kids' brand where the whole family can match without anyone looking silly. Grandpa wore his proudly.", n:"James · grandpa of four"},
 {t:"The fabric is unreal. Soft like a cloud, washes perfectly, and the llama characters are adorable without being babyish.", n:"Priya · mom of a 7-year-old"},
 {t:"Bought the Grandma Squad set for my mom and aunts. They wore them to Sunday dinner. Instant family legend.", n:"Sofia · gift-giver pro"},
 {t:"Lumi is my teenager's spirit animal. The 'Chill Vibes Only' tee ended the morning battles. Worth every penny.", n:"Rachel · mom of a teen"},
];

const QUOTES = [
 {t:"A pajama brand with its own family of characters — the kind of world-building kids' apparel has been missing.", s:"The Bedtime Review"},
 {t:"Six llamas, one herd, and the softest tees we've tested this year.", s:"Family Style Weekly"},
 {t:"Llama Pajamas cracked the code: matching family sets everyone actually wants to wear.", s:"The Cozy Parent"},
];

/* ---- cart ---- */
const cart = JSON.parse(localStorage.getItem("lp_cart")||"[]");
function saveCart(){ localStorage.setItem("lp_cart", JSON.stringify(cart)); renderCart(); }
function addToCart(id, size, qty){
  const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
  const line = cart.find(x=>x.id===id && x.size===size);
  if(line) line.qty += qty; else cart.push({id, size, qty});
  saveCart(); openDrawer();
}
function setQty(i, d){
  cart[i].qty += d;
  if(cart[i].qty<=0) cart.splice(i,1);
  saveCart();
}
function cartTotal(){ return cart.reduce((s,l)=>{ const p=PRODUCTS.find(x=>x.id===l.id); return s+p.price*l.qty; },0); }
function renderCart(){
  const box = document.getElementById("cartItems");
  const n = cart.reduce((s,l)=>s+l.qty,0);
  document.querySelectorAll(".cart-count").forEach(e=>e.textContent=n);
  if(!box) return;
  if(!cart.length){ box.innerHTML = '<div class="empty-cart">Your cart is empty.<br>The herd is waiting… 🦙</div>'; }
  else box.innerHTML = cart.map((l,i)=>{
    const p = PRODUCTS.find(x=>x.id===l.id);
    return `<div class="ci"><img src="${p.img}" alt="">
      <div><div class="n">${p.name}</div><div class="p">Size ${l.size} · $${p.price.toFixed(2)}</div>
      <div class="q"><button onclick="setQty(${i},-1)">−</button><span>${l.qty}</span><button onclick="setQty(${i},1)">+</button></div></div></div>`;
  }).join("");
  const t = document.getElementById("cartTotal");
  if(t) t.textContent = "$"+cartTotal().toFixed(2);
}
function openDrawer(){ document.getElementById("drawer").classList.add("open"); document.getElementById("scrim").classList.add("on"); }
function closeDrawer(){ document.getElementById("drawer").classList.remove("open"); document.getElementById("scrim").classList.remove("on"); }

/* ---- shared chrome ---- */
function header(active){
  return `<div class="announce">🦙 <b>LAUNCH DROP IS LIVE</b> — Free shipping on orders over $50 · One herd. A million dreams.</div>
  <header class="site"><div class="nav">
    <a class="brand" href="index.html"><img src="assets/img/logo.png" alt="Llama Pajamas"><span>LLAMA PAJAMAS<small>ONE HERD · A MILLION DREAMS</small></span></a>
    <nav class="links">
      <a href="shop.html?c=new" class="${active==='new'?'active':''}">New</a>
      <a href="shop.html?c=bestsellers" class="${active==='best'?'active':''}">Best Sellers</a>
      <a href="shop.html?c=kids" class="${active==='kids'?'active':''}">Kids</a>
      <a href="shop.html?c=grandma" class="${active==='grandma'?'active':''}">Grandma</a>
      <a href="shop.html?c=grandpa" class="${active==='grandpa'?'active':''}">Grandpa</a>
      <a href="herd.html" class="${active==='herd'?'active':''}">The Herd</a>
      <a href="shop.html" class="${active==='shop'?'active':''}">Shop All</a>
    </nav>
    <div class="nav-right">
      <button class="icon-btn" onclick="openDrawer()" aria-label="Cart">🛒<span class="cart-count">0</span></button>
    </div>
  </div></header>`;
}
function footer(){
  return `<footer><div class="foot">
    <div><div class="foot-brand">🦙 LLAMA PAJAMAS™</div>
      <p>One herd. A million dreams. Original llama characters on buttery-soft apparel for the whole family — printed to order, zero waste.</p></div>
    <div><h4>Shop</h4><a href="shop.html?c=new">New Arrivals</a><a href="shop.html?c=bestsellers">Best Sellers</a><a href="shop.html?c=kids">Kids Sets</a><a href="shop.html">Shop All</a></div>
    <div><h4>Brand</h4><a href="herd.html">Meet the Herd</a><a href="index.html#promise">The Llama Promise</a><a href="index.html#story">Our Story</a></div>
    <div><h4>Help</h4><a href="#" onclick="return false">Shipping & Returns</a><a href="#" onclick="return false">Size Guide</a><a href="#" onclick="return false">Contact</a></div>
  </div><div class="copy">© 2026 Llama Pajamas™ · One herd. A million dreams. · Demo storefront — checkout coming soon.</div></footer>
  <div class="demo-note">🚧 Demo storefront — checkout opens soon. Join the newsletter for launch-day access.</div>`;
}
function drawer(){
  return `<div class="scrim" id="scrim" onclick="closeDrawer()"></div>
  <aside class="drawer" id="drawer">
    <header><h3>Your Cart 🦙</h3><button class="icon-btn" onclick="closeDrawer()">✕</button></header>
    <div class="items" id="cartItems"></div>
    <div class="foot2"><div style="display:flex;justify-content:space-between;font-weight:800;margin-bottom:12px"><span>Subtotal</span><span id="cartTotal">$0.00</span></div>
    <button class="btn" style="width:100%" onclick="alert('Checkout opens soon — join the newsletter for launch-day access! 🦙')">Checkout →</button>
    <p style="font-size:12.5px;color:var(--ink-soft);text-align:center;margin-top:10px">Demo mode — no payment is taken yet.</p></div>
  </aside>`;
}
function cardHTML(p){
  return `<div class="card" onclick="location.href='product.html?id=${p.id}'">
    <div class="ph"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
    <div class="inf">${p.tag?`<div class="tag">${p.tag}</div>`:""}<h3>${p.name}</h3>
    <div class="price">$${p.price.toFixed(2)}</div></div></div>`;
}
function inject(active){
  document.getElementById("site-header").innerHTML = header(active);
  document.getElementById("site-footer").innerHTML = footer();
  document.body.insertAdjacentHTML("beforeend", drawer());
  renderCart();
}
function filterProducts(c){
  if(!c || c==="all") return PRODUCTS;
  if(c==="new") return PRODUCTS.filter(p=>p.tag==="NEW");
  if(c==="bestsellers") return PRODUCTS.filter(p=>p.tag==="BEST SELLER");
  return PRODUCTS.filter(p=>p.coll===c);
}
