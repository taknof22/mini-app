'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import StartScreen from '@/components/StartScreen';
import LocationModal from '@/components/LocationModal';

const DEFAULT_CITY = { name: 'Dublin', country: 'Ireland' };

export default function HomePage() {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  const cityValue = `${DEFAULT_CITY.name}, ${DEFAULT_CITY.country}`;

  const handleContinue = () => {
    localStorage.setItem('selectedCity', JSON.stringify(DEFAULT_CITY));
    router.push('/catalogue');
  };

  const handleSelectCity = () => {
    router.push('/select-city');
  };

  return (
    <>
      <StartScreen onStart={() => setModalOpen(true)} />
      <LocationModal
        isOpen={isModalOpen}
        cityLabel={cityValue}
        onContinue={handleContinue}
        onSelectCity={handleSelectCity}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
