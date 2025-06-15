import { type NextRequest, NextResponse } from "next/server"
import mysql from "mysql2/promise"

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "order_management",
})

export async function GET() {
  try {
    const db = await connection
    const [rows] = await db.execute("SELECT * FROM orders ORDER BY created_at DESC")

    return NextResponse.json(rows)
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customer_name, email } = body

    if (!customer_name || !email) {
      return NextResponse.json({ error: "Customer name and email are required" }, { status: 400 })
    }

    const db = await connection
    const [result] = await db.execute("INSERT INTO orders (customer_name, email) VALUES (?, ?)", [customer_name, email])

    const insertResult = result as mysql.ResultSetHeader

    // Fetch the created order
    const [newOrder] = await db.execute("SELECT * FROM orders WHERE id = ?", [insertResult.insertId])

    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
