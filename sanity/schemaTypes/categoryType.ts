import {TagIcon} from '@sanity/icons'
import { title } from 'process'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      type:"image",
      name:"image",
      title:"Category",
      options:{
        hotspot:true,
      }
    }),
  ],
  preview:{
    select:{
      title:"title",
      subtitle:"description",
      media:"image"
    }
  }
})
