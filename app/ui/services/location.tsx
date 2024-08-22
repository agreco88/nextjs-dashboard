// Location.tsx
import React from "react";
import ReactCountryFlag from "react-country-flag";

interface LocationProps {
  iataCode: string;
  isoCode?: string;
}

const Location: React.FC<LocationProps> = ({ iataCode, isoCode }) => {
  // Define the location map within the component
  const locationMap: {
    [key: string]: { city: string; isoCode: string; country: string };
  } = {
    bog: { city: "Bogota", isoCode: "CO", country: "Colombia" },
    eze: { city: "Buenos Aires", isoCode: "AR", country: "Argentina" },
    mvd: { city: "Montevideo", isoCode: "UY", country: "Uruguay" },
    cor: { city: "Cordoba", isoCode: "AR", country: "Argentina" },
    // Add more mappings as needed
  };

  // Determine location based on iataCode first, then isoCode
  const location = locationMap[iataCode?.toLowerCase()] || {
    city: "Unknown",
    isoCode: isoCode || "ZZ",
  };

  return (
    <span className="text-sm flex gap-1.5 text-dark-theme-subtitle dark:text-dark-theme-text items-center tracking-tighter">
      <ReactCountryFlag countryCode={location.isoCode} svg />
      {location.city}, {location.country}
    </span>
  );
};

export default Location;
