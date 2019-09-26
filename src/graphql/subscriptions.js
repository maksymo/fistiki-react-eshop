// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
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
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
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
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
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
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
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
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
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
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
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
export const onCreateImage = `subscription OnCreateImage {
  onCreateImage {
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
export const onUpdateImage = `subscription OnUpdateImage {
  onUpdateImage {
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
export const onDeleteImage = `subscription OnDeleteImage {
  onDeleteImage {
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
