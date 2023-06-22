import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="bg-black h-[100vh] relative">
      <div className="text-black absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <Image src="/video placeholder.png"
          loading="eager"
          priority={true}
          quality={90}
          alt="video placeholder"
          className="absolute inset-0"
          draggable="false"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}>
        </Image>
      </div>
    </div>
  )
}

export default Hero
