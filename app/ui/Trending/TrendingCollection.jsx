import CollectionCard from "./TrendingCollectionCard";
import CatImage from "../../public/CatImage.png"
import DogImage from "../../public/DogImage.png"
import FungusImage from "../../public/FungusImage.png"
import RobotImage from "../../public/RobotImage.png"
import BearImage from "../../public/BearImage.png"
import FoxAvatar from "../../public/FoxAvatar.png"
import AsianAvatar from "../../public/AsianAvatar.png"
import RobotAvatar from "../../public/RobotAvatar.png"

export default function TrendingCollection() {
  return (
    <div className='flex flex-col m-12 sm:pt-32 items-center justify-between 2xl:m-16 2xl:justify-around'>
      <div className='flex flex-col text-left w-[300px] md:w-11/12 self-center 2xl:w-5/6'>
        <p className="text-2xl md:text-4xl font-bold md:font-semibold w-full">Trending Collection</p>
        <p className="text-md md:text-lg mt-2 text-default-600">Checkout our weekly updated trending collection.</p>
      </div>
      <div className='flex flex-row w-[390px] md:w-full md:justify-around 2xl:pr-6 justify-center'>
        <CollectionCard
          className="xs:w-[400px] md:max-w-[400px] bg-background shadow-none"
          mainSrc={DogImage}
          mainAlt='dog'
          bodySrc1={CatImage}
          bodyAlt1='cat'
          bodySrc2={BearImage}
          footerSrc={FoxAvatar}
          footerTitle='DSGN Animals'
          author='MrFox'
        />
        <CollectionCard
          className="hidden md:block max-w-[400px] bg-background shadow-none"
          mainSrc={FungusImage}
          mainAlt='fungus'
          bodySrc1={FungusImage}
          bodyAlt1='fungus2'
          bodySrc2={FungusImage}
          bodyAlt2='fungus3'
          footerSrc={AsianAvatar}
          footerTitle='Magic Mushrooms'
          author='Shroomie'
        />
        <CollectionCard
          className="hidden md:block max-w-[400px] bg-background shadow-none"
          mainSrc={RobotImage}
          mainAlt='robot'
          bodySrc1={RobotImage}
          bodyAlt1='robot2'
          bodySrc2={RobotImage}
          bodyAlt2='robot3'
          footerSrc={RobotAvatar}
          footerTitle='Disco Machines'
          author='BeKind2Robots'
        />
      </div>
    </div >
  )
}