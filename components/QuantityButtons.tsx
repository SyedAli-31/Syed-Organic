import React from 'react'
import { Product } from "@/sanity.types";
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
interface Props {
    product: Product;
    className?: string;
  }
const QuantityButtons = ({ }: Props) => {
    const itemCount=4
  return (
    <div>
        <Button>
            <Minus/>
        </Button>
        <span>{itemCount} </span>
        <Button>
            <Plus/>
        </Button>
    </div>
  )
}

export default QuantityButtons