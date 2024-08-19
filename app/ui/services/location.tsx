import React from "react";
import ReactCountryFlag from "react-country-flag";

const locationMap: { [key: string]: LocationInfo } = {
  bog: { city: "Bogota, Colombia", countryCode: "co" },
  eze: { city: "Buenos Aires, Argentina", countryCode: "ar" },
  mvd: { city: "Montevideo, Uruguay", countryCode: "uy" },
  cor: { city: "Cordoba, Argentina", countryCode: "ar" },
  // Add more mappings here
};

interface LocationProps {
  iataCode: string;
}

const Location: React.FC<LocationProps> = ({ iataCode }) => {
  const location = locationMap[iataCode.toLowerCase()] || "Unknown location";

  return (
    <span className="text-sm flex gap-2 items-center text-gray-400 tracking-tighter">
      <ReactCountryFlag countryCode={location.countryCode} svg />
      {location.city}
    </span>
  );
};

export default Location;
