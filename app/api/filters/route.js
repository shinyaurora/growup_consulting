// app/api/filters/route.ts
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req) {
    try {
        const body = await req.json();
        const { budgetType, hourlyRate, selectedCategory, startdate, enddate } = body;

        let query = `SELECT * FROM gigs WHERE 1=1`;
        const values = [];

        // Add filters dynamically
        if (budgetType) {
            query += " AND budget_type = ?";
            values.push(budgetType);
        }

        if (hourlyRate && budgetType === "hourly") {
            query += " AND hourly_rate <= ?";
            values.push(hourlyRate);
        }

        if (selectedCategory) {
            query += " AND category = ?";
            values.push(selectedCategory);
        }

        if (startdate) {
            query += " AND created_at >= ?";
            values.push(startdate);
        }

        if (enddate) {
            query += " AND created_at <= ?";
            values.push(enddate);
        }

        // Execute query
        const [result] = await db.query(query, values);

        return NextResponse.json({ data: result });
    } catch (error) {
        console.error("Error fetching filtered data:", error);
        return NextResponse.json(
            { error: "Failed to fetch gigs." },
            { status: 500 }
        );
    }
}
