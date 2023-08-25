import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="py-12 mb-10">
      <div className="flex flex-row justify-center content-container">
        <Image src="/pic_logo.png"
          height="450"
          width="450"
          alt="RFX">       
        </Image>
        <div className="py-12 flex flex-col justify-center items-center text-center mb-16">
          <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
            Hand-crafted audio effects pedals, made in Adelaide.
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
