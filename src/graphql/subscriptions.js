// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
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
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
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
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
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
export const onCreateCategory = `subscription OnCreateCategory {
  onCreateCategory {
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
export const onUpdateCategory = `subscription OnUpdateCategory {
  onUpdateCategory {
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
export const onDeleteCategory = `subscription OnDeleteCategory {
  onDeleteCategory {
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
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
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
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
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
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
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
export const onCreateImage = `subscription OnCreateImage {
  onCreateImage {
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
export const onUpdateImage = `subscription OnUpdateImage {
  onUpdateImage {
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
export const onDeleteImage = `subscription OnDeleteImage {
  onDeleteImage {
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
