import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import { users, services, readings } from "../lib/placeholder-data";

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role VARCHAR(255) NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password, role)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.role})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedServices() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
  ALTER TABLE services
  ADD COLUMN IF NOT EXISTS country VARCHAR(255),
  ADD COLUMN IF NOT EXISTS city VARCHAR(255);
`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS services (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type VARCHAR(255) NOT NULL,
      iata_code VARCHAR(255) NOT NULL,
      iso_code VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL,
      created TIMESTAMP NOT NULL,
      last_modified TIMESTAMP NOT NULL,
      last_billed TIMESTAMP NOT NULL,
      billing_status VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL,

      user_id VARCHAR(255) NOT NULL REFERENCES users(id)
    );
  `;

  const insertedServices = await Promise.all(
    services.map(async (service) => {
      return client.sql`
      INSERT INTO services (id, name, type, iata_code, iso_code, status, created, last_modified, last_billed, billing_status, image_url, country, city, user_id)
      VALUES (${service.id}, ${service.name}, ${service.type}, ${service.iata_code}, ${service.iso_code}, ${service.status}, ${service.created}, ${service.last_modified}, ${service.last_billed}, ${service.billing_status}, ${service.image_url}, ${service.country}, ${service.city}, ${service.user_id})
      ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedServices;
}

async function seedReadings() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS readings (
      id VARCHAR(255) PRIMARY KEY,
      service_id VARCHAR(255) NOT NULL REFERENCES services(id),
      cpu_usage INT NOT NULL,
      ram_usage INT NOT NULL,
      timestamp TIMESTAMP NOT NULL
    );
  `;

  console.log("Seeding readings...");

  const insertedReadings = await Promise.all(
    readings.map(async (reading) => {
      console.log("Inserting reading:", reading);
      return client.sql`
        INSERT INTO readings (id, service_id, cpu_usage, ram_usage, timestamp)
        VALUES (${reading.id}, ${reading.service_id}, ${reading.cpu_usage}, ${reading.ram_usage}, ${reading.timestamp})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedReadings;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedServices();
    await seedReadings();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
