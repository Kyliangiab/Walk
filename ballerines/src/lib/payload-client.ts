import { getPayloadClient } from './payload'

export async function getProducts() {
  const payload = await getPayloadClient()
  
  try {
    const products = await payload.find({
      collection: 'products',
      where: {
        isActive: {
          equals: true,
        },
      },
      limit: 100,
      sort: '-createdAt',
    })
    
    return products.docs
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function getProductBySlug(slug: string) {
  const payload = await getPayloadClient()
  
  try {
    const products = await payload.find({
      collection: 'products',
      where: {
        slug: {
          equals: slug,
        },
        isActive: {
          equals: true,
        },
      },
      limit: 1,
    })
    
    return products.docs[0] || null
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function getCategories() {
  const payload = await getPayloadClient()
  
  try {
    const categories = await payload.find({
      collection: 'categories',
      where: {
        isActive: {
          equals: true,
        },
      },
      sort: 'sortOrder',
    })
    
    return categories.docs
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function getOrdersByUser(userId: string) {
  const payload = await getPayloadClient()
  
  try {
    const orders = await payload.find({
      collection: 'orders',
      where: {
        customer: {
          equals: userId,
        },
      },
      sort: '-createdAt',
    })
    
    return orders.docs
  } catch (error) {
    console.error('Error fetching orders:', error)
    return []
  }
}

export async function createOrder(orderData: any) {
  const payload = await getPayloadClient()
  
  try {
    const order = await payload.create({
      collection: 'orders',
      data: orderData,
    })
    
    return order
  } catch (error) {
    console.error('Error creating order:', error)
    throw error
  }
}

export async function updateProductStock(productId: string, variantSku: string, quantity: number) {
  const payload = await getPayloadClient()
  
  try {
    const product = await payload.findByID({
      collection: 'products',
      id: productId,
    })
    
    const updatedVariants = product.variants.map((variant: any) => {
      if (variant.sku === variantSku) {
        return {
          ...variant,
          stock: Math.max(0, variant.stock - quantity),
        }
      }
      return variant
    })
    
    const updatedProduct = await payload.update({
      collection: 'products',
      id: productId,
      data: {
        variants: updatedVariants,
      },
    })
    
    return updatedProduct
  } catch (error) {
    console.error('Error updating product stock:', error)
    throw error
  }
}
