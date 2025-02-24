import { type SchemaTypeDefinition } from 'sanity'


import {categoryType} from './categoryType'
import { prodType } from './productType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType,prodType],
}
