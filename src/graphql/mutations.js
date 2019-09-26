// eslint-disable
// this is an auto generated file. This will be overwritten

export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    seo
    category
    name
    shortDescription
    description
    images {
      items {
        id
        bucket
      }
      nextToken
    }
    price
    discount
    productCode
    stock
    container
    weight
    weightUnit
    unit
    active
    createdAt
    updatedAt
  }
}
`;
export const updateProduct = `mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    id
    seo
    category
    name
    shortDescription
    description
    images {
      items {
        id
        bucket
      }
      nextToken
    }
    price
    discount
    productCode
    stock
    container
    weight
    weightUnit
    unit
    active
    createdAt
    updatedAt
  }
}
`;
export const deleteProduct = `mutation DeleteProduct($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
    id
    seo
    category
    name
    shortDescription
    description
    images {
      items {
        id
        bucket
      }
      nextToken
    }
    price
    discount
    productCode
    stock
    container
    weight
    weightUnit
    unit
    active
    createdAt
    updatedAt
  }
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    firstName
    lastName
    email
    shippingFirstName
    shippingLastName
    address1
    address2
    city
    state
    zipCode
    country
    tel
    shippingMethod
    products {
      id
      seo
      category
      name
      shortDescription
      description
      images {
        nextToken
      }
      price
      discount
      productCode
      stock
      container
      weight
      weightUnit
      unit
      active
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`;
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
    id
    firstName
    lastName
    email
    shippingFirstName
    shippingLastName
    address1
    address2
    city
    state
    zipCode
    country
    tel
    shippingMethod
    products {
      id
      seo
      category
      name
      shortDescription
      description
      images {
        nextToken
      }
      price
      discount
      productCode
      stock
      container
      weight
      weightUnit
      unit
      active
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`;
export const deleteOrder = `mutation DeleteOrder($input: DeleteOrderInput!) {
  deleteOrder(input: $input) {
    id
    firstName
    lastName
    email
    shippingFirstName
    shippingLastName
    address1
    address2
    city
    state
    zipCode
    country
    tel
    shippingMethod
    products {
      id
      seo
      category
      name
      shortDescription
      description
      images {
        nextToken
      }
      price
      discount
      productCode
      stock
      container
      weight
      weightUnit
      unit
      active
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`;
export const createImage = `mutation CreateImage($input: CreateImageInput!) {
  createImage(input: $input) {
    id
    product {
      id
      seo
      category
      name
      shortDescription
      description
      images {
        nextToken
      }
      price
      discount
      productCode
      stock
      container
      weight
      weightUnit
      unit
      active
      createdAt
      updatedAt
    }
    bucket
    fullsize {
      key
      width
      height
    }
    thumbnail {
      key
      width
      height
    }
  }
}
`;
export const updateImage = `mutation UpdateImage($input: UpdateImageInput!) {
  updateImage(input: $input) {
    id
    product {
      id
      seo
      category
      name
      shortDescription
      description
      images {
        nextToken
      }
      price
      discount
      productCode
      stock
      container
      weight
      weightUnit
      unit
      active
      createdAt
      updatedAt
    }
    bucket
    fullsize {
      key
      width
      height
    }
    thumbnail {
      key
      width
      height
    }
  }
}
`;
export const deleteImage = `mutation DeleteImage($input: DeleteImageInput!) {
  deleteImage(input: $input) {
    id
    product {
      id
      seo
      category
      name
      shortDescription
      description
      images {
        nextToken
      }
      price
      discount
      productCode
      stock
      container
      weight
      weightUnit
      unit
      active
      createdAt
      updatedAt
    }
    bucket
    fullsize {
      key
      width
      height
    }
    thumbnail {
      key
      width
      height
    }
  }
}
`;
