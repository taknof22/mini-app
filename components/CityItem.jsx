'use client';

export default function CityItem({ city, isSelected, onSelect, index }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(city)}
      className={`city-item ${isSelected ? 'city-item-selected' : ''}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <span className="pin-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="10" r="2.5" fill="currentColor" />
        </svg>
      </span>
      <span className="city-copy">
        <strong>{city.name}</strong>
        <span>{city.country}</span>
      </span>
      <span className={`selected-dot ${isSelected ? 'selected-dot-on' : ''}`} aria-hidden="true" />
    </button>
  );
}
