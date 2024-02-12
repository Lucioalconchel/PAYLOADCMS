import { CollectionConfig } from 'payload/types'

const Products: CollectionConfig = {
  slug: 'products',
  
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'categoria',
      type: 'text'
    },
    {
      name: 'description',
      type: 'text'
    },
    {
      name: 'marca',
      type: 'text'
    },
    {
      name: 'precio',
      type: 'number'
    },
    {
      name: 'stock',
      type: 'number'
    },
    {
      name: 'descuento',
      type: 'number'
    },
    {
      name: 'imagen',
      type: 'upload',
      relationTo: 'media',
    }
  ],
}

export default Products
