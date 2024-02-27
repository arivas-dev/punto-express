import { Product } from "@/app/types"
import { useEffect, useState } from "react"

type useProductList = {
    products: Product[] | []
    isLoading: boolean
    isError: Error | null
}

export function useProductList(): useProductList {
    const [data, setData] = useState<Product[] | []>([])
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch('/api/products')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setIsLoading(false)
          }).catch((error) => {
            setError(error)
            setIsLoading(false)
          })
      }, [])


    return {
        products: data,
        isLoading,
        isError: error
    }
}