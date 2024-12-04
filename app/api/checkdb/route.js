import db from "@/lib/db";

export async function GET(request) {
  try {
    // Test a query
    const [rows] = await db.query("SELECT 1 + 1 AS result");
    return new Response(JSON.stringify({ success: true, data: rows }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
