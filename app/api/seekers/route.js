import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req) {

    try {
        // Parse the incoming request data
        const body = await req.json();
        const { firstname, lastname, address, city, state, Zip, birth, gender, message, seekerId } = body;

        // Generate a random 8-digit number for the ID
        const id = seekerId | Math.floor(10000000 + Math.random() * 90000000);

        if (seekerId) {
            // Update message for an existing seeker
            const query = `
                UPDATE seekers 
                SET message = ?
                    WHERE id = ?
                `;
            const values = [message, seekerId];
            await db.query(query, values);

            return NextResponse.json({
                message: "Message updated successfully!",
                id,
                status: "success"
            });
        } else {

            // Validate the data
            if (!firstname || !lastname || !address || !city || Zip === 0 || !state || !birth || !gender) {
                return new Response(JSON.stringify({ message: 'All fields are required.' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                });
            }

            // Insert the data into the database
            const query = `
            INSERT INTO seekers (id, firstname, lastname, address, city, state, Zip, birth, gender)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const values = [id, firstname, lastname, address, city, state, Zip, birth, gender];

            const [result] = await db.query(query, values);

            // Respond with success
            return NextResponse.json({ message: "Job added successfully!", id });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to add job." }, { status: 500 });
    }
}
