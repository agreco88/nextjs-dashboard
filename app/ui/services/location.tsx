// Location.tsx
import React from "react";
import ReactCountryFlag from "react-country-flag";

interface LocationProps {
  city: string;
  country: string;
  isoCode: string;
}

const Location: React.FC<LocationProps> = ({ city, country, isoCode }) => {
  return (
    <span className="text-sm flex gap-2 text-dark-theme-subtitle dark:text-dark-theme-text items-center tracking-tighter">
      <ReactCountryFlag
        countryCode={isoCode}
        svg
        style={{
          width: "1.5em", // Adjust the width as needed
          height: "1.5em", // Adjust the height as needed
        }}
      />
      {city}, {country}
    </span>
  );
};

export default Location;
