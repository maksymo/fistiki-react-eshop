// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    firstName
    lastName
    email
    address1
    address2
    city
    state
    zipCode
    country
    tel
    orders {
      items {
        id
        firstName
        lastName
        address1
        address2
        city
        state
        zipCode
        country
        tel
        shippingMethod
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    firstName
    lastName
    email
    address1
    address2
    city
    state
    zipCode
    country
    tel
    orders {
      items {
        id
        firstName
        lastName
        address1
        address2
        city
        state
        zipCode
        country
        tel
        shippingMethod
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    firstName
    lastName
    email
    address1
    address2
    city
    state
    zipCode
    country
    tel
    orders {
      items {
        id
        firstName
        lastName
        address1
        address2
        city
        state
        zipCode
        country
        tel
        shippingMethod
      }
      nextToken
    }
  }
}
`;
export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    seo
    category {
      id
      seo
      name
      products {
        nextToken
      }
    }
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
  }
}
`;
export const updateProduct = `mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    id
    seo
    category {
      id
      seo
      name
      products {
        nextToken
      }
    }
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
  }
}
`;
export const deleteProduct = `mutation DeleteProduct($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
    id
    seo
    category {
      id
      seo
      name
      products {
        nextToken
      }
    }
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
  }
}
`;
export const createCategory = `mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) {
    id
    seo
    name
    products {
      items {
        id
        seo
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
      }
      nextToken
    }
  }
}
`;
export const updateCategory = `mutation UpdateCategory($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
    id
    seo
    name
    products {
      items {
        id
        seo
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
      }
      nextToken
    }
  }
}
`;
export const deleteCategory = `mutation DeleteCategory($input: DeleteCategoryInput!) {
  deleteCategory(input: $input) {
    id
    seo
    name
    products {
      items {
        id
        seo
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
      }
      nextToken
    }
  }
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    firstName
    lastName
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
      category {
        id
        seo
        name
      }
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
    }
    user {
      id
      firstName
      lastName
      email
      address1
      address2
      city
      state
      zipCode
      country
      tel
      orders {
        nextToken
      }
    }
  }
}
`;
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
    id
    firstName
    lastName
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
      category {
        id
        seo
        name
      }
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
    }
    user {
      id
      firstName
      lastName
      email
      address1
      address2
      city
      state
      zipCode
      country
      tel
      orders {
        nextToken
      }
    }
  }
}
`;
export const deleteOrder = `mutation DeleteOrder($input: DeleteOrderInput!) {
  deleteOrder(input: $input) {
    id
    firstName
    lastName
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
      category {
        id
        seo
        name
      }
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
    }
    user {
      id
      firstName
      lastName
      email
      address1
      address2
      city
      state
      zipCode
      country
      tel
      orders {
        nextToken
      }
    }
  }
}
`;
export const createImage = `mutation CreateImage($input: CreateImageInput!) {
  createImage(input: $input) {
    id
    product {
      id
      seo
      category {
        id
        seo
        name
      }
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
      category {
        id
        seo
        name
      }
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
      category {
        id
        seo
        name
      }
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
