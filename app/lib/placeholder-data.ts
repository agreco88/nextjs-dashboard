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
    iata_code: "bog",
    iso_code: "COL",
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
    iata_code: "bog",
    iso_code: "COL",
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
    iata_code: "eze",
    iso_code: "ARG",
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
    iata_code: "cor",
    iso_code: "ARG",
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
    iata_code: "mvd",
    iso_code: "URY",
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
    serviceId: "SERVICEID001", // Linked to Menudencias SRL
    cpu_usage: 45, // CPU usage in percentage
    ram_usage: 2048, // RAM usage in MB
    timestamp: "2024-08-20T12:00:00Z", // Time of the reading
  },
  {
    id: "READINGID002",
    serviceId: "SERVICEID002", // Linked to Choconqueso LLC
    cpu_usage: 2,
    ram_usage: 1024,
    timestamp: "2024-08-20T12:00:00Z",
  },
  {
    id: "READINGID003",
    serviceId: "SERVICEID003", // Linked to OrbitalBase
    cpu_usage: 12,
    ram_usage: 4096,
    timestamp: "2024-08-20T12:00:00Z",
  },
  {
    id: "READINGID004",
    serviceId: "SERVICEID004", // Linked to OrbitalBase
    cpu_usage: 49,
    ram_usage: 4096,
    timestamp: "2024-08-20T12:00:00Z",
  },
  {
    id: "READINGID005",
    serviceId: "SERVICEID005", // Linked to OrbitalBase
    cpu_usage: 99,
    ram_usage: 4096,
    timestamp: "2024-08-20T12:00:00Z",
  },
  // More readings...
];

// const customers = [
//   {
//     id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
//     name: "Evil Rabbit",
//     email: "evil@rabbit.com",
//     image_url: "/customers/evil-rabbit.png",
//   },
//   {
//     id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
//     name: "Delba de Oliveira",
//     email: "delba@oliveira.com",
//     image_url: "/customers/delba-de-oliveira.png",
//   },
//   {
//     id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
//     name: "Lee Robinson",
//     email: "lee@robinson.com",
//     image_url: "/customers/lee-robinson.png",
//   },
//   {
//     id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
//     name: "Michael Novotny",
//     email: "michael@novotny.com",
//     image_url: "/customers/michael-novotny.png",
//   },
//   {
//     id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
//     name: "Amy Burns",
//     email: "amy@burns.com",
//     image_url: "/customers/amy-burns.png",
//   },
//   {
//     id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
//     name: "Balazs Orban",
//     email: "balazs@orban.com",
//     image_url: "/customers/balazs-orban.png",
//   },
// ];

// const invoices = [
//   {
//     customer_id: customers[0].id,
//     amount: 15795,
//     status: "pending",
//     date: "2022-12-06",
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 20348,
//     status: "pending",
//     date: "2022-11-14",
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 3040,
//     status: "paid",
//     date: "2022-10-29",
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 44800,
//     status: "paid",
//     date: "2023-09-10",
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 34577,
//     status: "pending",
//     date: "2023-08-05",
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 54246,
//     status: "pending",
//     date: "2023-07-16",
//   },
//   {
//     customer_id: customers[0].id,
//     amount: 666,
//     status: "pending",
//     date: "2023-06-27",
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 32545,
//     status: "paid",
//     date: "2023-06-09",
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 1250,
//     status: "paid",
//     date: "2023-06-17",
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8546,
//     status: "paid",
//     date: "2023-06-07",
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 500,
//     status: "paid",
//     date: "2023-08-19",
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8945,
//     status: "paid",
//     date: "2023-06-03",
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 1000,
//     status: "paid",
//     date: "2022-06-05",
//   },
// ];

// const revenue = [
//   { month: "Jan", revenue: 2000 },
//   { month: "Feb", revenue: 1800 },
//   { month: "Mar", revenue: 2200 },
//   { month: "Apr", revenue: 2500 },
//   { month: "May", revenue: 2300 },
//   { month: "Jun", revenue: 3200 },
//   { month: "Jul", revenue: 3500 },
//   { month: "Aug", revenue: 3700 },
//   { month: "Sep", revenue: 2500 },
//   { month: "Oct", revenue: 2800 },
//   { month: "Nov", revenue: 3000 },
//   { month: "Dec", revenue: 4800 },
// ];

// export { users, customers, invoices, revenue, services };
export { users, services, readings };
