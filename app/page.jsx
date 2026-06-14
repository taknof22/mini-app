'use client';

import { useEffect, useMemo, useState } from 'react';
import { categories, popularProducts, products } from '@/data/products';

const supportLink = 'https://t.me/YOUR_SUPPORT_USERNAME';
const languages = ['English', 'Русский', 'Українська', 'Español', 'Deutsch', 'Français', 'Italiano', 'Polski'];
const cities = ['Dublin, Ireland', 'Navan, Ireland', 'London, United Kingdom', 'Berlin, Germany', 'Paris, France', 'Amsterdam, Netherlands', 'Madrid, Spain', 'Rome, Italy', 'Warsaw, Poland', 'Toronto, Canada', 'Sydney, Australia'];
const checkoutMethods = ['BTC', 'ETH', 'USDT', 'BNB', 'TRX', 'TON', 'XRP', 'MATIC', 'LTC'];
const disabledMethods = ['SOL', 'DOGE', 'ADA'];
const liveNames = ['Alex', 'Sarah', 'Mika', 'Daniel', 'Emma'];

function openTelegram(url) {
  if (typeof window === 'undefined') return;
  const tg = window.Telegram?.WebApp;
  if (tg?.openTelegramLink) tg.openTelegramLink(url);
  else window.open(url, '_blank');
}

export default function HomePage() {
  const [started, setStarted] = useState(false);
  const [tab, setTab] = useState('home');
  const [category, setCategory] = useState('popular');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('none');
  const [sortOpen, setSortOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [method, setMethod] = useState('delivery');
  const [location, setLocation] = useState('');
  const [checkout, setCheckout] = useState('cart');
  const [checkoutMethod, setCheckoutMethod] = useState('BTC');
  const [notice, setNotice] = useState('');
  const [profilePage, setProfilePage] = useState(null);
  const [city, setCity] = useState('Dublin, Ireland');
  const [citySearch, setCitySearch] = useState('');
  const [language, setLanguage] = useState('English');
  const [languageSearch, setLanguageSearch] = useState('');
  const [activeNow, setActiveNow] = useState(12847);
  const [ordersToday, setOrdersToday] = useState(247);
  const [liveTrend, setLiveTrend] = useState('+2.4%');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNow((value) => {
        const move = Math.floor(Math.random() * 19) - 7;
        return Math.max(12380, Math.min(13240, value + move));
      });
      setOrdersToday((value) => value + (Math.random() > 0.38 ? 1 : 0));
      setLiveTrend(Math.random() > 0.42 ? '+2.4%' : '+1.8%');
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const catalogue = useMemo(() => {
    let list = category === 'popular' ? popularProducts : category === 'all' ? products : products.filter((item) => item.category.toLowerCase() === category);
    if (query.trim()) {
      const text = query.toLowerCase();
      list = list.filter((item) => `${item.title} ${item.category} ${item.description}`.toLowerCase().includes(text));
    }
    if (sort === 'high') list = [...list].sort((a, b) => b.usdPrice - a.usdPrice);
    if (sort === 'low') list = [...list].sort((a, b) => a.usdPrice - b.usdPrice);
    return list;
  }, [category, query, sort]);

  const cartItems = cart.map((entry) => ({ ...products.find((item) => item.id === entry.id), qty: entry.qty })).filter(Boolean);
  const total = cartItems.reduce((sum, item) => sum + item.usdPrice * item.qty, 0);

  const addToCart = (product, qty = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) return current.map((item) => item.id === product.id ? { ...item, qty: item.qty + qty } : item);
      return [...current, { id: product.id, qty }];
    });
  };

  const updateQty = (id, change) => setCart((current) => current.map((item) => item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item));
  const removeItem = (id) => setCart((current) => current.filter((item) => item.id !== id));

  if (!started) {
    return <main className="app-bg splash-wrap"><section className="splash-card"><div className="cube"><span>◆</span></div><p className="eyebrow">Premium Mini Store</p><h1>NESTIX</h1><p>Matte black beauty shopping mini app with fast local flow and premium product cards.</p><button className="primary-action" onClick={() => setStarted(true)}>Get Started</button></section></main>;
  }

  const renderHome = () => {
    const featured = catalogue.slice(0, 40);
    const heroCats = [
      { id: 'makeup', label: 'Makeup', icon: '✦', count: 68 },
      { id: 'exclusive', label: 'Exclusive', icon: '◇', count: 15 },
      { id: 'accessories', label: 'Accessories', icon: '▣', count: 71 }
    ];
    const liveActivity = liveNames.slice(0, 3).map((name, index) => ({ name, text: index === 0 ? 'added item' : index === 1 ? 'opened cart' : 'changed city', time: `${index + 1}m ago` }));

    return <section className="home-screen"><header className="home-hero"><div className="hero-top"><button className="city-chip" onClick={() => { setTab('profile'); setProfilePage('city'); }}>⌖ {city}</button><button className="bell-btn">⌁</button></div><div className="brand-block"><p className="eyebrow">Private Marketplace</p><h1>NESTIX</h1><span>2 hour delivery</span></div><div className="live-panel"><div className="live-main"><span className="live-dot"></span><div><b>{activeNow.toLocaleString()} Online Now</b><small>Live community • updated now</small></div><em>{liveTrend}</em></div><div className="mini-wave"><i></i><i></i><i></i><i></i><i></i></div></div><div className="live-row"><div><b>{ordersToday}</b><span>orders today</span></div><div><b>~45m</b><span>pickup ETA</span></div><div><b>1 min</b><span>support avg.</span></div></div></header><section className="search-row premium-search"><div className="search-box"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." />{query && <button onClick={() => setQuery('')}>×</button>}</div><div className="sort-box"><button className="glass-btn filter-btn" onClick={() => setSortOpen(!sortOpen)}>☷</button>{sortOpen && <div className="sort-menu">{[['none', 'No sorting'], ['high', 'Price: High to Low'], ['low', 'Price: Low to High']].map(([id, label]) => <button key={id} className={sort === id ? 'active' : ''} onClick={() => { setSort(id); setSortOpen(false); }}>{sort === id ? '✓ ' : ''}{label}</button>)}</div>}</div></section><section className="home-category-cards">{heroCats.map((item) => <button key={item.id} className={category === item.id ? 'home-cat active' : 'home-cat'} onClick={() => setCategory(item.id)}><span>{item.icon}</span><b>{item.label}</b><small>{item.count}</small></button>)}</section><section className="category-stack compact-cats"><div className="pill-line accent-line">{categories.filter((item) => item.accent).map((item) => <button key={item.id} className={category === item.id ? 'pill active' : 'pill'} onClick={() => setCategory(item.id)}>{item.label} {item.count}</button>)}</div><div className="pill-line">{categories.filter((item) => !item.accent).map((item) => <button key={item.id} className={category === item.id ? 'pill active' : 'pill'} onClick={() => setCategory(item.id)}>{item.label} {item.count}</button>)}</div></section><section className="section-title-row"><div><h2>Top Picks</h2><p>Live catalogue selection</p></div><button onClick={() => setCategory('all')}>View all →</button></section>{featured.length === 0 ? <div className="empty-state">⌕×<br />No products found</div> : <section className="product-grid">{featured.map((product) => <ProductCard key={product.id} product={product} onOpen={setSelected} onAdd={addToCart} />)}</section>}<section className="activity-card"><div><b>Live Activity</b><small>Simulated dashboard activity</small></div>{liveActivity.map((item) => <article key={item.name}><span>{item.name[0]}</span><p><b>{item.name}</b> {item.text}<br /><small>{item.time}</small></p></article>)}</section></section>;
  };

  const renderCart = () => {
    if (checkout === 'notice') return <Panel title="Secure Checkout"><p>Orders are processed through a protected demo checkout flow.</p><p>Your order will only move to processing after confirmation.</p><p>Never share sensitive details in chat.</p><button className="primary-action wide" onClick={() => setCheckout('checkout')}>Continue</button></Panel>;
    if (checkout === 'checkout') return <Panel title="Demo Checkout"><div className="coin-grid">{checkoutMethods.map((item) => <button className={checkoutMethod === item ? 'active' : ''} onClick={() => { setCheckoutMethod(item); setNotice(''); }} key={item}>{item}</button>)}{disabledMethods.map((item) => <button className="disabled" onClick={() => setNotice('Network maintenance. Please choose another option.')} key={item}>{item}</button>)}</div>{notice && <p className="notice">{notice}</p>}<div className="payment-box"><p>Amount: ${total}</p><p>Option: {checkoutMethod}</p><p>Reference: demo-placeholder-reference</p><button className="glass-btn">Copy reference</button></div><button className="primary-action wide" onClick={() => setCheckout('processing')}>I have confirmed</button></Panel>;
    if (checkout === 'processing') return <ProcessingScreen onDone={() => setCheckout('accepted')} />;
    if (checkout === 'accepted') return <Panel title="Order Accepted"><p>First message template: Hello, my order is accepted. I am ready to confirm details.</p><button className="primary-action wide" onClick={() => openTelegram(supportLink)}>Open Telegram support</button></Panel>;
    return <section className="panel-page"><h2>Cart</h2>{cartItems.length === 0 ? <div className="empty-state">Cart is empty</div> : cartItems.map((item) => <article className="cart-card" key={item.id}><div className={`mini-visual ${item.tone}`}></div><div><h3>{item.title}</h3><p>{item.demoPrice}</p><small>Qty {item.qty}</small></div><div className="cart-actions"><button onClick={() => updateQty(item.id, -1)}>-</button><button onClick={() => updateQty(item.id, 1)}>+</button><button className="danger" onClick={() => removeItem(item.id)}>Delete</button></div></article>)}<input className="field" placeholder="Promo code" /><div className="method-grid"><button className={method === 'delivery' ? 'method active' : 'method'} onClick={() => setMethod('delivery')}>Delivery<br /><span>ETA ~2 hours</span></button><button className={method === 'pickup' ? 'method active' : 'method'} onClick={() => setMethod('pickup')}>Pickup Point<br /><span>ETA ~45 min</span></button></div><input className="field" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter your approximate location" /><p className="helper">{method === 'delivery' ? 'The exact delivery address can be confirmed after checkout.' : 'After arriving at the pickup point, support will guide you there.'}</p><button className="primary-action wide" disabled={!cartItems.length} onClick={() => setCheckout('notice')}>Continue • ${total}</button></section>;
  };

  const renderCommunity = () => <section className="panel-page"><h2>Community Dashboard</h2><div className="stat-grid"><Stat label="Active Now" value={activeNow.toLocaleString()} /><Stat label="Orders Today" value={ordersToday} /><Stat label="Users" value="14,372" /></div><p className="helper">Demo/simulated activity • Avg 15+ Orders</p></section>;
  const renderProfile = () => {
    if (profilePage === 'city') return <CityScreen city={city} setCity={setCity} search={citySearch} setSearch={setCitySearch} onBack={() => setProfilePage(null)} />;
    if (profilePage === 'language') return <LanguageScreen language={language} setLanguage={setLanguage} search={languageSearch} setSearch={setLanguageSearch} onBack={() => setProfilePage(null)} />;
    if (profilePage === 'support') return <SupportScreen onBack={() => setProfilePage(null)} />;
    if (profilePage === 'about') return <InfoScreen title="About" onBack={() => setProfilePage(null)} items={['Premium marketplace focused on speed, privacy and reliability.', 'Fast Delivery', 'Pickup Point', 'Live Support', 'Secure Payments', 'Version 1.0']} />;
    if (profilePage === 'terms') return <InfoScreen title="Terms" onBack={() => setProfilePage(null)} items={['Comply with local laws.', 'Products must be legal in selected location.', 'Checkout screens are demo placeholders.', 'Delivery times are estimates.', 'Availability may vary.', 'Orders may be cancelled before assignment.']} />;
    if (profilePage === 'orders') return <InfoScreen title="Order History" onBack={() => setProfilePage(null)} items={['Order NX-1042 • Accepted • Today • $126 • Delivery', 'Order NX-0977 • Completed • Yesterday • $74 • Pickup Point']} />;
    const cards = [
      { key: 'city', icon: '⌖', title: 'City', value: city, note: 'Service area' },
      { key: 'language', icon: '文', title: 'Language', value: language, note: 'App interface' },
      { key: 'orders', icon: '◎', title: 'Order History', value: '2 demo orders', note: 'Recent activity' },
      { key: 'support', icon: '✦', title: 'Support', value: 'Contact center', note: 'Help and questions' },
      { key: 'about', icon: '◈', title: 'About', value: 'NESTIX 1.0', note: 'Product info' },
      { key: 'terms', icon: '✓', title: 'Terms', value: 'Rules', note: 'Legal notes' }
    ];
    return <section className="profile-screen"><div className="profile-hero"><div className="avatar-ring"><span>N</span></div><div><p className="eyebrow">Private member</p><h2>NESTIX Profile</h2><p>{city} • {language}</p></div></div><div className="profile-stats"><div><b>{cart.length}</b><span>Cart items</span></div><div><b>{ordersToday}</b><span>Orders today</span></div><div><b>~2h</b><span>Delivery ETA</span></div></div><div className="profile-quick"><button onClick={() => setProfilePage('city')}><span>⌖</span><div><b>Selected city</b><small>{city}</small></div></button><button onClick={() => setProfilePage('support')}><span>✦</span><div><b>Live support</b><small>Telegram contact</small></div></button></div><div className="profile-card-grid">{cards.map((item) => <button key={item.key} className="profile-tile" onClick={() => setProfilePage(item.key)}><span className="tile-icon">{item.icon}</span><b>{item.title}</b><small>{item.value}</small><em>{item.note}</em></button>)}</div></section>;
  };

  return <main className="app-bg"><section className="phone-shell"><div className="app-scroll">{tab === 'home' && renderHome()}{tab === 'cart' && renderCart()}{tab === 'community' && renderCommunity()}{tab === 'profile' && renderProfile()}</div>{selected && <ProductOverlay product={selected} onClose={() => setSelected(null)} onAdd={addToCart} />}<nav className="bottom-nav"><button className={tab === 'home' ? 'active' : ''} onClick={() => setTab('home')}>⌂<span>Home</span></button><button className={tab === 'cart' ? 'active' : ''} onClick={() => { setTab('cart'); setCheckout('cart'); }}>🛒<span>Cart</span>{cart.length > 0 && <b>{cart.reduce((sum, item) => sum + item.qty, 0)}</b>}</button><button className={tab === 'profile' ? 'active' : ''} onClick={() => setTab('profile')}>◉<span>Profile</span></button></nav></section></main>;
}

function ProductCard({ product, onOpen, onAdd }) { return <article className="product-card" onClick={() => onOpen(product)}><div className={`product-visual ${product.tone}`}>{product.isNew && <span>New</span>}</div><div className="product-info"><p>{product.category}</p><h3>{product.title}</h3><small>{product.description}</small><div><strong>{product.demoPrice}</strong><button onClick={(e) => { e.stopPropagation(); onAdd(product); }}>Add</button></div></div></article>; }
function ProductOverlay({ product, onClose, onAdd }) { const [qty, setQty] = useState(1); return <div className="overlay"><div className="details"><button className="back" onClick={onClose}>‹ Product Details</button><div className={`large-visual ${product.tone}`}></div><div className="tag-row">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><h2>{product.title}</h2><p>{product.description}</p><ul>{product.characteristics.map((item) => <li key={item}>{item}</li>)}</ul><div className="sticky-buy"><div><button onClick={() => setQty(Math.max(1, qty - 1))}>-</button><b>{qty}</b><button onClick={() => setQty(qty + 1)}>+</button></div><button className="primary-action" onClick={() => onAdd(product, qty)}>Add to Cart</button></div></div></div>; }
function Panel({ title, children }) { return <section className="panel-page"><h2>{title}</h2>{children}</section>; }
function ProcessingScreen({ onDone }) { useEffect(() => { const timer = setTimeout(onDone, 5500); return () => clearTimeout(timer); }, [onDone]); return <section className="panel-page center"><div className="loader"></div><p>Verifying confirmation...</p><p>Preparing order...</p><p>Preparing support handoff...</p></section>; }
function Stat({ label, value }) { return <div className="stat"><b>{value}</b><span>{label}</span></div>; }
function SupportScreen({ onBack }) { return <section className="panel-page"><button className="back" onClick={onBack}>‹ Back</button><h2>Support Center</h2>{['Order Status', 'Checkout Issue', 'Delivery Question'].map((item) => <button className="list-button" key={item}>{item}<span>visual</span></button>)}<button className="list-button active" onClick={() => openTelegram(supportLink)}>Contact Support<span>›</span></button></section>; }
function CityScreen({ city, setCity, search, setSearch, onBack }) { const found = cities.filter((item) => item.toLowerCase().includes(search.toLowerCase())); return <section className="panel-page"><button className="back" onClick={onBack}>‹ Back</button><h2>City</h2><input className="field" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search city" />{found.length ? found.map((item) => <button className="list-button" key={item} onClick={() => { setCity(item); onBack(); }}>{item}<span>{city === item ? '✓' : ''}</span></button>) : <p>City not found in list<br />Try a different search term</p>}</section>; }
function LanguageScreen({ language, setLanguage, search, setSearch, onBack }) { const list = languages.filter((item) => item.toLowerCase().includes(search.toLowerCase())); return <section className="panel-page"><button className="back" onClick={onBack}>‹ Back</button><h2>Select Language</h2><input className="field" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search languages" />{list.map((item) => <button className="list-button" key={item} onClick={() => setLanguage(item)}>{item}<span>{language === item ? '✓' : ''}</span></button>)}</section>; }
function InfoScreen({ title, items, onBack }) { return <section className="panel-page"><button className="back" onClick={onBack}>‹ Back</button><h2>{title}</h2>{items.map((item) => <div className="info-card" key={item}>{item}</div>)}{title === 'Terms' && <button className="primary-action wide" onClick={onBack}>I Understand</button>}</section>; }
