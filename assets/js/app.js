/* LLAMA PAJAMAS™ storefront — real buy links (Etsy + eBay), no demo checkout */
const ETSY_SHOP = "https://www.etsy.com/shop/LatticeEcommerce";

const PRODUCTS = [
 {id:"lumi-chill-dark", name:"Lumi 'Chill Vibes Only' Tee — Dark", coll:"alo-chill", collName:"Alo Chill",
  price:24.95, img:"assets/img/products/lumi-dark.jpg", tag:"NEW", score:7.8, dark:true,
  desc:"Lumi doesn't do mornings. You don't have to either. Our teen llama in her signature dusty-blue headphones, printed for dark garments. The official uniform of doing absolutely nothing, beautifully.",
  details:"100% ring-spun cotton · Relaxed fit · Printed for dark garments", etsy:null, ebay:null},
 {id:"lumi-chill-light", name:"Lumi 'Chill Vibes Only' Tee — Ivory", coll:"alo-chill", collName:"Alo Chill",
  price:24.95, img:"assets/img/products/lumi-light.jpg", tag:"NEW", score:8.0,
  desc:"Same iconic chill, lighter canvas. Lumi's half-lidded stare of supreme relaxation on a soft ivory tee that goes with everything in the drawer.",
  details:"100% ring-spun cotton · Relaxed fit · Sizes 2T–14Y and XS–XXL", etsy:null, ebay:null},
 {id:"puff-dream-dark", name:"Puff 'Dream Big, Little Llama' — Dark", coll:"alo-chill", collName:"Alo Chill",
  price:22.95, img:"assets/img/products/puff-dark.jpg", tag:"TOP RATED", score:8.5, dark:true,
  desc:"The baby of the herd, curled into the sleepiest little plush-ball pose. 'Dream big, little llama' — because the smallest dreams are the coziest ones. Shown as printed on dark garments.",
  details:"Ultra-soft hand feel · Printed for dark garments",
  etsy:"https://www.etsy.com/listing/4575916139/llama-pajamas-dream-big-little-llama", ebay:null},
 {id:"puff-dream-light", name:"Puff 'Dream Big, Little Llama' — Ivory", coll:"alo-chill", collName:"Alo Chill",
  price:22.95, img:"assets/img/products/puff-light.jpg", tag:"TOP RATED", score:9.0,
  desc:"Puff on ivory — maximum snuggle energy. The highest-scoring design in the herd: perfect sleepy eyes, perfect plush-ball roundness.",
  details:"Ultra-soft hand feel · Infant bodysuit & tees",
  etsy:"https://www.etsy.com/listing/4575916139/llama-pajamas-dream-big-little-llama", ebay:null},
 {id:"small-dreams", name:"'Small Llama, Big Dreams'", coll:"kids", collName:"Kids Sets",
  price:29.95, img:"assets/img/products/small-dreams.jpg", tag:"NEW", score:7.5, dark:true,
  desc:"The whole-herd bedtime mantra. A dreamy print for kids who fall asleep planning tomorrow's adventures. Shown on dark garment.",
  details:"Soft cotton blend · Printed for dark garments",
  etsy:"https://www.etsy.com/listing/4575744145/llama-pajamas-infant-bodysuit-small", ebay:null},
 {id:"fueled-ideas", name:"'Fueled by Good Ideas' School Tee", coll:"kids", collName:"Kids Sets",
  price:21.95, img:"assets/img/products/good-ideas.jpg", tag:"BACK TO SCHOOL", score:7.5,
  desc:"For the kid whose brain never logs off. Lio-approved explorer energy, classroom-ready. (Note: this one's rockin' sunglasses — Lumi's influence.)",
  details:"100% ring-spun cotton · Classic fit · Sizes 4Y–14Y", etsy:null, ebay:null},
 {id:"read-explore", name:"'Read, Explore, Be Kind' Tee", coll:"kids", collName:"Kids Sets",
  price:21.95, img:"assets/img/products/read-explore.jpg", tag:"", score:8.5,
  desc:"Three rules. Zero exceptions. The reading llama — Lola's gentle wisdom, wearable for school, weekends, and everywhere in between.",
  details:"100% ring-spun cotton · Classic fit · Sizes 4Y–14Y", etsy:null, ebay:null},
 {id:"school-mode", name:"'School Mode: ON' Tee", coll:"kids", collName:"Kids Sets",
  price:21.95, img:"assets/img/products/school-mode.jpg", tag:"BACK TO SCHOOL", score:7.0, dark:true,
  desc:"Flip the switch. Lumi reluctantly approves this message — school mode looks good on everyone. Shown on dark garment.",
  details:"100% ring-spun cotton · Printed for dark garments", etsy:null, ebay:null},
 {id:"grandma-love", name:"Grandma 'Fueled by Love' Tee", coll:"grandma", collName:"Grandma Collection",
  price:26.95, img:"assets/img/products/grandma-love.jpg", tag:"NEW", score:7.8,
  desc:"The official uniform of grandmas everywhere: powered by love, hugs, and absolutely no bedtime rules. Lola sends her regards.",
  details:"Soft cotton blend · Relaxed women's fit · Sizes S–3XL", etsy:null, ebay:null},
 {id:"grandma-squad", name:"'Grandma Squad' Matching Tee", coll:"grandma", collName:"Grandma Collection",
  price:26.95, img:"assets/img/products/grandma-squad.jpg", tag:"BEST SELLER", score:8.3,
  desc:"For the grandma squad that shows up matching and leaves glitter everywhere. Family matching starts here.",
  details:"Soft cotton blend · Relaxed women's fit · Sizes S–3XL", etsy:null, ebay:null},
 {id:"grandpa-best", name:"'Best Grandpa Ever' Tee", coll:"grandpa", collName:"Grandpa Collection",
  price:26.95, img:"assets/img/products/grandpa-best.jpg", tag:"", score:6.0, dark:true,
  desc:"Paco's official endorsement: this grandpa explored first, napped second, and spoiled the grandkids third. Shown on dark garment.",
  details:"Soft cotton blend · Printed for dark garments", etsy:null, ebay:null},
 {id:"grandpa-hikes", name:"'More Hikes, More Hugs' Tee", coll:"grandpa", collName:"Grandpa Collection",
  price:26.95, img:"assets/img/products/grandpa-hikes.jpg", tag:"", score:6.8, dark:true,
  desc:"The grandpa motto, straight from Paco's adventure journal. Trail-tested, grandkid-approved. Shown on dark garment.",
  details:"Soft cotton blend · Printed for dark garments", etsy:null, ebay:null},
 {id:"grandma-mode", name:"'Grandma Mode: ON' Tee", coll:"grandma", collName:"Grandma Collection",
  price:26.95, img:"assets/img/products/grandma-mode.jpg", tag:"NEW", score:7.5,
  desc:"One switch, zero regrets. Grandma mode: activated. Snacks ready, rules optional.",
  details:"Soft cotton blend · Relaxed women's fit · Sizes S–3XL", etsy:null, ebay:null},
 {id:"grandma-days", name:"'More Good Days' Tee", coll:"grandma", collName:"Grandma Collection",
  price:26.95, img:"assets/img/products/grandma-days.jpg", tag:"", score:8.0,
  desc:"A flower-crowned wish for more good days — the kind grandmas specialize in manufacturing.",
  details:"Soft cotton blend · Relaxed women's fit · Sizes S–3XL",
  etsy:"https://www.etsy.com/listing/4575795563/llama-pajamas-adult-pajama-tee-more-good", ebay:null},
 {id:"grandma-rest", name:"'Rest, Explore, Hug, Repeat' Tee", coll:"grandma", collName:"Grandma Collection",
  price:26.95, img:"assets/img/products/grandma-rest.jpg", tag:"", score:7.5,
  desc:"The daily rhythm, perfected: rest, explore, hug, repeat. Lola's life philosophy in four words.",
  details:"Soft cotton blend · Relaxed women's fit · Sizes S–3XL", etsy:null, ebay:null},
 {id:"grandma-hugs", name:"'Small Hugs, Big Joy' Tee", coll:"grandma", collName:"Grandma Collection",
  price:26.95, img:"assets/img/products/grandma-hugs.jpg", tag:"", score:7.8,
  desc:"Proof that the smallest hugs carry the biggest joy. A herd favorite for gift season.",
  details:"Soft cotton blend · Relaxed women's fit · Sizes S–3XL",
  etsy:"https://www.etsy.com/listing/4575814538/llama-pajamas-adult-pajama-tee-small", ebay:null},
 {id:"grandpa-mode", name:"'Grandpa Mode: ON' Tee", coll:"grandpa", collName:"Grandpa Collection",
  price:26.95, img:"assets/img/products/grandpa-mode.jpg", tag:"BEST SELLER", score:8.3,
  desc:"Bold, clear, and proud — the grandpa uniform for adventure o'clock. Our top-scoring grandpa design.",
  details:"Soft cotton blend · Classic men's fit · Sizes S–3XL", etsy:null, ebay:null},
 {id:"grandpa-explorer", name:"'Little Explorer' Tee", coll:"grandpa", collName:"Grandpa Collection",
  price:26.95, img:"assets/img/products/grandpa-explorer.jpg", tag:"TOP RATED", score:8.5,
  desc:"For the grandkid who follows grandpa everywhere — mountains included. Lio's signature explorer look.",
  details:"Soft cotton blend · Youth & adult sizes",
  etsy:"https://www.etsy.com/listing/4575916255/llama-pajamas-little-explorer-infant", ebay:null},
 {id:"grandpa-still", name:"'Still Exploring' Tee", coll:"grandpa", collName:"Grandpa Collection",
  price:26.95, img:"assets/img/products/grandpa-still.jpg", tag:"", score:6.0, dark:true,
  desc:"Age is just a number; the trail keeps calling. Shown on dark garment.",
  details:"Soft cotton blend · Printed for dark garments", etsy:null, ebay:null},
 {id:"kids-kindbrave", name:"'Kind, Brave, Creative You' Tee", coll:"kids", collName:"Kids Sets",
  price:21.95, img:"assets/img/products/kids-kindbrave.jpg", tag:"TOP RATED", score:8.8,
  desc:"Heart-shaped glasses, full-hearted kid. Our joint top-scoring design — Lulu's dreamy confidence, wearable daily.",
  details:"100% ring-spun cotton · Classic fit · Sizes 4Y–14Y",
  etsy:"https://www.etsy.com/listing/4575814294/llama-pajamas-kids-lounge-tee-kind-brave", ebay:null},
 {id:"kids-explore", name:"'Explore More' Tee", coll:"kids", collName:"Kids Sets",
  price:21.95, img:"assets/img/products/kids-explore.jpg", tag:"", score:6.8, dark:true,
  desc:"Backpack on, sun out, curiosity maxed. Lio's explorer starter pack. Shown on dark garment.",
  details:"100% ring-spun cotton · Printed for dark garments",
  etsy:"https://www.etsy.com/listing/4575795657/llama-pajamas-adult-pajama-tee-explore", ebay:null},
 {id:"kids-kindpeople", name:"'Kind People, Happier Days' Tee", coll:"kids", collName:"Kids Sets",
  price:21.95, img:"assets/img/products/kids-kindpeople.jpg", tag:"", score:8.0,
  desc:"Flower-crowned and kind-hearted — the Lola lesson every kid should wear.",
  details:"100% ring-spun cotton · Classic fit · Sizes 4Y–14Y", etsy:null, ebay:null},
 {id:"kids-naps", name:"'Good Things Take Naps' Tee", coll:"kids", collName:"Kids Sets",
  price:21.95, img:"assets/img/products/kids-naps.jpg", tag:"TOP RATED", score:8.8,
  desc:"The herd's core philosophy, scientifically unproven but universally felt. Peak sleepy-llama energy.",
  details:"100% ring-spun cotton · Classic fit · Sizes 4Y–14Y",
  etsy:"https://www.etsy.com/listing/4575916211/llama-pajamas-good-things-take-naps", ebay:null},
 {id:"kids-dreamexplore", name:"'Dream, Explore, Be Kind' Tee", coll:"kids", collName:"Kids Sets",
  price:21.95, img:"assets/img/products/kids-dreamexplore.jpg", tag:"TOP RATED", score:8.8,
  desc:"The three-word herd manifesto. Clean, on-brand, and our joint top scorer — this one belongs on every kid.",
  details:"100% ring-spun cotton · Classic fit · Sizes 4Y–14Y",
  etsy:"https://www.etsy.com/listing/4575795141/llama-pajamas-kids-lounge-tee-dream", ebay:null},
 {id:"mens-pajama-pants", name:"Men's Pajama Pants — All Over Print", coll:"alo-chill", collName:"Alo Chill",
  price:53.99, img:"assets/img/products/mens-pajama-pants.jpg", tag:"BEST SELLER", score:8.0,
  desc:"All-over llama print pajama pants in rich espresso — the grown-up herd uniform. Live now on eBay and Etsy.",
  details:"Men's sizes · All-over print · Ships from print partner",
  etsy:"https://www.etsy.com/listing/4575733534/llama-pajamas-mens-pajama-pants-all-over",
  ebay:"https://www.ebay.com/itm/128082694018"},
 {id:"kids-lounge-pants", name:"Kids Lounge Pants — All Over Print", coll:"kids", collName:"Kids Sets",
  price:45.99, img:"assets/img/products/kids-lounge-pants.jpg", tag:"BEST SELLER", score:8.0,
  desc:"All-over llama print lounge pants for little dreamers. Live now on eBay and Etsy.",
  details:"Kids sizes · All-over print · Ships from print partner",
  etsy:"https://www.etsy.com/listing/4575733292/llama-pajamas-kids-lounge-pants-all-over",
  ebay:"https://www.ebay.com/itm/128082694682"},
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

/* ---- shared chrome ---- */
function header(active){
  return `<div class="announce">🦙 <b>SHOP THE REAL DROP</b> — Buy live on <a href="${ETSY_SHOP}" target="_blank" rel="noopener" style="text-decoration:underline;color:#fff">Etsy</a> & eBay · One herd. A million dreams.</div>
  <header class="site"><div class="nav">
    <a class="brand" href="index.html"><img src="assets/img/logo.png" alt="Llama Pajamas"><span>LLAMA PAJAMAS<small>ONE HERD · A MILLION DREAMS</small></span></a>
    <button class="menu-btn" onclick="document.querySelector('nav.links').classList.toggle('open')" aria-label="Menu">☰</button>
    <nav class="links">
      <a href="shop.html?c=new" class="${active==='new'?'active':''}">New</a>
      <a href="shop.html?c=bestsellers" class="${active==='best'?'active':''}">Best Sellers</a>
      <a href="shop.html?c=toprated" class="${active==='top'?'active':''}">Top Rated</a>
      <a href="shop.html?c=kids" class="${active==='kids'?'active':''}">Kids</a>
      <a href="shop.html?c=grandma" class="${active==='grandma'?'active':''}">Grandma</a>
      <a href="shop.html?c=grandpa" class="${active==='grandpa'?'active':''}">Grandpa</a>
      <a href="herd.html" class="${active==='herd'?'active':''}">The Herd</a>
      <a href="shop.html" class="${active==='shop'?'active':''}">Shop All</a>
    </nav>
    <div class="nav-right">
      <a class="btn" style="padding:10px 22px;font-size:13.5px" href="${ETSY_SHOP}" target="_blank" rel="noopener">Shop on Etsy</a>
    </div>
  </div></header>`;
}
function footer(){
  return `<footer><div class="foot">
    <div><div class="foot-brand">🦙 LLAMA PAJAMAS™</div>
      <p>One herd. A million dreams. Original llama characters on buttery-soft apparel for the whole family — printed to order, zero waste.</p>
      <p style="margin-top:10px"><a href="${ETSY_SHOP}" target="_blank" rel="noopener" style="display:inline">🛒 Etsy shop</a> · <a href="https://www.ebay.com/itm/128082694018" target="_blank" rel="noopener" style="display:inline">eBay listing</a></p></div>
    <div><h4>Shop</h4><a href="shop.html?c=new">New Arrivals</a><a href="shop.html?c=bestsellers">Best Sellers</a><a href="shop.html?c=toprated">Top Rated</a><a href="shop.html?c=kids">Kids Sets</a></div>
    <div><h4>Brand</h4><a href="herd.html">Meet the Herd</a><a href="index.html#promise">The Llama Promise</a><a href="index.html#story">Our Story</a></div>
    <div><h4>Help</h4><a href="#" onclick="return false">Shipping & Returns</a><a href="#" onclick="return false">Size Guide</a><a href="#" onclick="return false">Contact</a></div>
  </div><div class="copy">© 2026 Llama Pajamas™ · One herd. A million dreams. · Real listings on Etsy & eBay.</div></footer>`;
}
function cardHTML(p){
  return `<div class="card" onclick="location.href='product.html?id=${p.id}'">
    <div class="ph"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
    <div class="inf">${p.tag?`<div class="tag">${p.tag}</div>`:""}<h3>${p.name}</h3>
    <div class="price">from $${p.price.toFixed(2)}</div>
    <div style="font-size:12px;color:var(--terra);font-weight:700;margin-top:4px">${p.etsy||p.ebay?"✓ Buy live":"○ Coming soon"}</div></div></div>`;
}
function buyButtons(p){
  let h = "";
  if(p.etsy) h += `<a class="btn" style="flex:1;text-align:center" href="${p.etsy}" target="_blank" rel="noopener">Buy on Etsy →</a>`;
  if(p.ebay) h += `<a class="btn navy" style="flex:1;text-align:center" href="${p.ebay}" target="_blank" rel="noopener">Buy on eBay →</a>`;
  if(!p.etsy && !p.ebay) h += `<a class="btn" style="flex:1;text-align:center" href="${ETSY_SHOP}" target="_blank" rel="noopener">Find on Etsy →</a>`;
  return `<div style="display:flex;gap:10px;flex-wrap:wrap;margin:18px 0">${h}</div>
  <p style="font-size:12.5px;color:var(--ink-soft)">✓ Real listing — checkout happens securely on ${p.ebay?"eBay / ":""}Etsy. Prices shown are "from" prices; the final price is on the listing.</p>`;
}
function inject(active){
  document.getElementById("site-header").innerHTML = header(active);
  document.getElementById("site-footer").innerHTML = footer();
}
function filterProducts(c){
  if(!c || c==="all") return PRODUCTS;
  if(c==="new") return PRODUCTS.filter(p=>p.tag==="NEW");
  if(c==="bestsellers") return PRODUCTS.filter(p=>p.tag==="BEST SELLER");
  if(c==="toprated") return PRODUCTS.filter(p=>(p.score||0)>=8.5);
  return PRODUCTS.filter(p=>p.coll===c);
}
