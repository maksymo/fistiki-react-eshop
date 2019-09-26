// eslint-disable
// this is an auto generated file. This will be overwritten

export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
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
export const listProducts = `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
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
export const listOrders = `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getImage = `query GetImage($id: ID!) {
  getImage(id: $id) {
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
export const listImages = `query ListImages(
  $filter: ModelImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      product {
        id
        seo
        category
        name
        shortDescription
        description
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
    nextToken
  }
}
`;
