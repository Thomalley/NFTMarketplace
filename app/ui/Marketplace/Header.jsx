import { Input } from "@nextui-org/react";
import { CiSearch as SearchIcon } from "react-icons/ci";
export default function Header() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-start w-full p-12 md:p-24'>
        <p className='font-bold text-3xl md:text-5xl w-full'>
          Browse Marketplace
        </p>
        <p className='text-lg md:text-xl py-4'>
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>
        <div className="w-full">
          <Input
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Search your favourite NFTs"
            variant="bordered"
            endContent={
              <SearchIcon className="text-3xl text-default-600 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </div>
    </div>
  )
}