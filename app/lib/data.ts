import { sql } from "@vercel/postgres";
import { Reading, Service, User } from "./definitions";

// Fetch Services
export async function fetchServices() {
  try {
    console.log("Fetching services data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Service>`
      SELECT
        id,
        name,
        type,
        iata_code,
        created,
        status,
        last_modified,
        last_billed,
        billing_status,
        image_url,
        country,
        city,
        user_id
      FROM services
      ORDER BY name ASC
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch services.");
  }
}

// Fetch Readings
export async function fetchReadings() {
  try {
    console.log("Fetching readings data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Reading>`
      SELECT
        id,
        service_id,
        cpu_usage,
        ram_usage,
        timestamp
      FROM readings
      ORDER BY timestamp DESC
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch readings.");
  }
}

// Fetch Users
export async function fetchUsers() {
  try {
    console.log("Fetching users data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<User>`
      SELECT
        id,
        name,
        email,
        role
      FROM users
      ORDER BY name ASC
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
}

// Fetch Filtered Services
export async function fetchFilteredServices(query: string, userId: string) {
  try {
    const data = await sql<Service>`
      SELECT
        id,
        name,
        type,
        iata_code,
        iso_code,
        created,
        status,
        last_modified,
        last_billed,
        billing_status,
        image_url,
        city,
        country
        user_id
      FROM services
      WHERE
        user_id = ${userId} AND (
          name ILIKE ${`%${query}%`} OR
          type ILIKE ${`%${query}%`} OR
          iata_code ILIKE ${`%${query}%`} OR
          iso_code ILIKE ${`%${query}%`} OR
          status ILIKE ${`%${query}%`} OR
          country ILIKE ${`%${query}%`} OR
          city ILIKE ${`%${query}%`} OR
          billing_status ILIKE ${`%${query}%`}
        )
      ORDER BY name ASC
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch filtered services.");
  }
}

export async function fetchServiceById(id: string) {
  try {
    const service = await sql`SELECT * FROM services WHERE id = ${id}`;
    return service.rows[0];
  } catch (error) {
    console.error("Failed to fetch service:", error);
    return null;
  }
}

// Example of fetching data for a specific user (if needed)
export async function fetchUserServices(userId: string) {
  try {
    const data = await sql<Service>`
      SELECT
        id,
        name,
        type,
        iata_code,
        created,
        status,
        last_modified,
        last_billed,
        billing_status,
        image_url
      FROM services
      WHERE user_id = ${userId}
      ORDER BY name ASC
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch services for user.");
  }
}
