import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req) {
  const body = await req.json();

  const {
    title,
    description,
    address,
    city,
    state,
    payment_type,
    budget,
    work_start_day,
    work_end_day,
    work_start_time,
    work_end_time,
    requirements,
  } = body;

  if (
    !title ||
    !description ||
    !address ||
    !city ||
    !state ||
    !payment_type ||
    !budget ||
    !work_start_day ||
    !work_end_day ||
    !work_start_time ||
    !work_end_time ||
    !requirements
  ) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const [result] = await db.execute(
      `
      INSERT INTO gigs (title, description, address, city, state, payment_type, budget, work_start_day, work_end_day, work_start_time, work_end_time, requirements) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        title,
        description,
        address,
        city,
        state,
        payment_type,
        parseFloat(budget),
        work_start_day,
        work_end_day,
        work_start_time,
        work_end_time,
        JSON.stringify(requirements), // Store as JSON
      ]
    );

    return NextResponse.json({ message: "Job added successfully!" });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to add job." }, { status: 500 });
  }
}
