"use client"

import { useState, useEffect } from "react"
import { OrdersTable } from "../../components/orders-table"
import { AddOrderModal } from "../../components/add-order-modal"
import type { Order } from "@/types/order"

export default function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders")
      if (!response.ok) {
        throw new Error("Failed to fetch orders")
      }
      const data = await response.json()
      setOrders(data)
    } catch (error) {
      console.error("Error fetching orders:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const handleOrderAdded = () => {
    fetchOrders()
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Loading orders...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Manage your orders and view order history</p>
        </div>
        <AddOrderModal onOrderAdded={handleOrderAdded} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Orders ({orders.length})</h2>
        </div>
        <OrdersTable orders={orders} />
      </div>
    </div>
  )
}
