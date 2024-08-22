// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
// User data type
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user"; // Added role to differentiate between admin and regular users
};

// Service data type
export type Service = {
  id: string;
  name: string;
  type: string;
  iata_code: string;
  iso_code: string;
  status: string;
  created: string;
  last_modified: string;
  last_billed: string;
  billing_status: "pending" | "paid";
  image_url: string;
  city: string;
  country: string;
  user_id: string; // Linked to a specific user
};

// Reading data type
export type Reading = {
  id: string;
  service_id: string;
  cpu_usage: number;
  ram_usage: number;
  timestamp: string;
};

export type LocationInfo = {
  iata_code: string; // The IATA code for the location (e.g., 'bog')
  iso_code: string; // The ISO country code (e.g., 'CO' for Colombia)
  city: string; // The name of the city
  country: string; // The name of the country
};
