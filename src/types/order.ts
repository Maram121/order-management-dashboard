export interface Order {
  id: number
  customer_name: string
  email: string
  created_at: string
}

export interface CreateOrderData {
  customer_name: string
  email: string
}
