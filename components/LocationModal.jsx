'use client';

export default function LocationModal({ isOpen, cityLabel, onContinue, onSelectCity, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="location-heading">
      <div className="modal-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="glass-card modal-card modal-in">
        <h2 id="location-heading">Location Detected</h2>
        <p>We detected your city: {cityLabel}</p>

        <div className="modal-actions">
          <button type="button" className="cta-btn" onClick={onContinue}>Continue</button>
          <button type="button" className="secondary-btn" onClick={onSelectCity}>Select Your City</button>
        </div>
      </div>
    </div>
  );
}
