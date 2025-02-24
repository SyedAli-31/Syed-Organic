import { requiredUser } from '@/hooks/requiredUser'
import React from 'react'


const OrdersPage =async () => {
await requiredUser()
  return (
    <div>
      orders page
       </div>
  )
}

export default OrdersPage