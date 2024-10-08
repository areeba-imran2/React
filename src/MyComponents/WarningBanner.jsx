import React from 'react';

export function WarningBanner({ warn }) {
  if (!warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

export default WarningBanner;
