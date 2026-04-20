'use client';

import { useEffect, useState } from 'react';

export default function CataloguePage() {
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem('selectedCity');
    if (!raw) return;

    try {
      setSelectedCity(JSON.parse(raw));
    } catch {
      setSelectedCity(null);
    }
  }, []);

  return (
    <section className="onboarding-shell">
      <div className="glass-card catalogue-card">
        <h1>Catalogue</h1>
        <p>
          Current city:{' '}
          {selectedCity ? `${selectedCity.name}, ${selectedCity.country}` : 'No city selected yet.'}
        </p>
      </div>
    </section>
  );
}
