'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import CityItem from '@/components/CityItem';

const CITIES = [
  { name: 'Dublin', country: 'Ireland' },
  { name: 'London', country: 'UK' },
  { name: 'Paris', country: 'France' },
  { name: 'Galle', country: 'Sri Lanka' },
  { name: 'Halmstad', country: 'Sweden' },
  { name: 'Rio Gallegos', country: 'Argentina' }
];

export default function SelectCityPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);

  const filteredCities = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return CITIES;

    return CITIES.filter((city) => {
      const label = `${city.name} ${city.country}`.toLowerCase();
      return label.includes(normalized);
    });
  }, [query]);

  const handleConfirm = () => {
    if (!selectedCity) return;
    localStorage.setItem('selectedCity', JSON.stringify(selectedCity));
    router.push('/catalogue');
  };

  return (
    <section className="onboarding-shell">
      <div className="glass-card select-city-card">
        <h1 className="select-title">Select your city</h1>
        <label htmlFor="city-search" className="search-wrap">
          <span className="search-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <input
            id="city-search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search cities..."
          />
        </label>

        <div className="cities-list" role="listbox" aria-label="Cities list">
          {filteredCities.map((city, index) => {
            const isSelected = selectedCity?.name === city.name && selectedCity?.country === city.country;
            return (
              <CityItem
                key={`${city.name}-${city.country}`}
                city={city}
                isSelected={isSelected}
                onSelect={setSelectedCity}
                index={index}
              />
            );
          })}

          {filteredCities.length === 0 && (
            <div className="empty-state">No cities found.</div>
          )}
        </div>

        <button type="button" className="confirm-btn" disabled={!selectedCity} onClick={handleConfirm}>
          Confirm City
        </button>
      </div>
    </section>
  );
}
