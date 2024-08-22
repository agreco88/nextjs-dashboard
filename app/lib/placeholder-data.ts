// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: "410544b2-4001-4271-9885-fec4b6a6442a",
    name: "Admin User",
    email: "admin@nextmail.com",
    password: "adminpass",
    role: "admin", // Role for admin
  },
  {
    id: "410544b2-4001-4271-9885-fec4b6a6442b",
    name: "Regular User One",
    email: "user1@nextmail.com",
    password: "user1pass",
    role: "user", // Role for regular user
  },
  {
    id: "410544b2-4001-4271-9885-fec4b6a6442c",
    name: "Regular User Two",
    email: "user2@nextmail.com",
    password: "user2pass",
    role: "user", // Role for regular user
  },
  // Add more users as needed
];

const services = [
  {
    user_id: "410544b2-4001-4271-9885-fec4b6a6442b",
    id: "SERVICEID001",
    name: "Menudencias SRL",
    type: "vps",
    city: "Bogota",
    country: "Colombia",
    iata_code: "bog",
    iso_code: "CO",
    status: "active",
    created: "2022-12-06",
    last_modified: "2022-12-06",
    last_billed: "2022-12-06",
    billing_status: "paid",
    image_url: "/services/icon-vps.png",
  },
  {
    user_id: "410544b2-4001-4271-9885-fec4b6a6442b",
    id: "SERVICEID002",
    name: "Choconqueso LLC",
    type: "baremetal",
    city: "Bogota",
    country: "Colombia",
    iata_code: "bog",
    iso_code: "CO",
    status: "stopped",
    created: "2022-12-06",
    last_modified: "2022-12-06",
    last_billed: "2022-12-06",
    billing_status: "paid",
    image_url: "/services/icon-baremetal.png",
  },
  {
    user_id: "410544b2-4001-4271-9885-fec4b6a6442b",
    id: "SERVICEID003",
    name: "OrbitalBase",
    type: "storage",
    city: "Buenos Aires",
    country: "Argentina",
    iata_code: "eze",
    iso_code: "AR",
    status: "active",
    created: "2022-12-06",
    last_modified: "2022-12-06",
    last_billed: "2022-12-06",
    billing_status: "paid",
    image_url: "/services/icon-storage.png",
  },

  {
    user_id: "410544b2-4001-4271-9885-fec4b6a6442b",
    id: "SERVICEID004",
    name: "OpenCarrier TTC",
    type: "storage",
    city: "Cordoba",
    country: "Argentina",
    iata_code: "cor",
    iso_code: "AR",
    status: "suspended",
    created: "2022-12-06",
    last_modified: "2022-12-06",
    last_billed: "2022-12-06",
    billing_status: "pending",
    image_url: "/services/icon-storage.png",
  },
  {
    user_id: "410544b2-4001-4271-9885-fec4b6a6442c",
    id: "SERVICEID005",
    name: "Smartpbx domain",
    type: "web hosting",
    city: "Montevideo",
    country: "Uruguay",
    iata_code: "mvd",
    iso_code: "UY",
    status: "paused",
    created: "2022-12-06",
    last_modified: "2022-12-06",
    last_billed: "2022-12-06",
    billing_status: "paid",
    image_url: "/services/icon-web-hosting.png",
  },
];

const readings = [
  {
    id: "READINGID001",
    service_id: "SERVICEID001", // Linked to Menudencias SRL
    cpu_usage: 45, // CPU usage in percentage
    ram_usage: 2048, // RAM usage in MB
    timestamp: "2024-08-20T12:00:00Z", // Time of the reading
  },
  {
    id: "READINGID002",
    service_id: "SERVICEID002", // Linked to Choconqueso LLC
    cpu_usage: 2,
    ram_usage: 1024,
    timestamp: "2024-08-20T12:00:00Z",
  },
  {
    id: "READINGID003",
    service_id: "SERVICEID003", // Linked to OrbitalBase
    cpu_usage: 12,
    ram_usage: 4096,
    timestamp: "2024-08-20T12:00:00Z",
  },
  {
    id: "READINGID004",
    service_id: "SERVICEID004", // Linked to OrbitalBase
    cpu_usage: 49,
    ram_usage: 4096,
    timestamp: "2024-08-20T12:00:00Z",
  },
  {
    id: "READINGID005",
    service_id: "SERVICEID005", // Linked to OrbitalBase
    cpu_usage: 99,
    ram_usage: 4096,
    timestamp: "2024-08-20T12:00:00Z",
  },
  // More readings...
];

export { users, services, readings };
