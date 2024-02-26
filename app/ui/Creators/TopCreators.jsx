import { Button } from "@nextui-org/react";
import CreatorCard from "./CreatorsCard";

export default function TopCreators() {
  const authors = [
    {
      id: 1,
      title: 'Keepitreal',
      img: 'https://s3-alpha-sig.figma.com/img/9acf/2677/568b38bc98ba36dbd43c768c40de6716?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kyPA3x6tmK81RiwzGcoFFKNRcr4gamPBRuVoVPO8Xw-aheNRsIVq78dBDwvZKy04TbRcmyZwWd0XhMeAaH-5RjnBMZBJV88zbt4YCLks89N-q3jeoYzw4yr75sqH1GiWdfiZFsnDsZJpBRcyZvyPioaEylCP5fWzAKFjGFmwhbvRcFR6sG9A-JUsLPvadolit~QWvPxro7KM0EROqUWu6ZeA8OgmskeaUsZ8~06EGcFhYFFfJ0-qz0EAjy~YbdLnDqnaHdsk3z4wbHdov7jDaBo0tD77Mo9RpNCTJKZ0wZXtqB51OVbtkWkCuY8XOqHhVWd8-CWx6uKUyDP4d3CZjg__',
      totalSales: '34.53 ETH',
    },
    {
      id: 2,
      title: 'DigiLab',
      img: 'https://s3-alpha-sig.figma.com/img/426c/ea39/cb7585dba1b58ad1b137d50b7424eb72?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YAJYBeUv9ipIUTg636AUTnL76XZamvuAlHlhTHqu4pOih85R5ZxZ-YCOUoMPgxrgvVGeZrWqWDcVXcOwfmR1hHcS9zuJQsPBhxQMVk7XOhv7NOlrH4Om-37IYwp7rqPnLRETXsTZnuAwv~eduHB8yJ34Ovs3v7V5ym3a~6WrE40uo0JEZ6o-RAfeWlbTO7iJtL0i5GmUY8Hg0H5SZPqlaJS2wyrBTqf8EpOiQ4O6~ZWXVRZTY~EQ2Q5rlSqwQwM9xRMenRSHubynrn4i0OEpDJmK6ag9qcD3aUQK~Of1NM~TDuz7ORsJcVUcYdq2-oKjy09Y-pQ1jmciZHwVviFJ7Q__',
      totalSales: '34.53 ETH',
    },
    {
      id: 3,
      title: 'GravityOne',
      img: 'https://s3-alpha-sig.figma.com/img/097d/8805/7996f61cddab0708f90589b5862464d9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMCBaze2CWYVaz6D1rA~jh7bG37dRf0sAw4bo2XohzNR0g4ZaVHXEGqiCxhZNOUkCnDuK~DDagBPdF0Eedzitbiox8TmoCFzz~GEUPuZ9nT0emkfwt5g~bstjn-023DotZWfAwL~3OLdyba8S~in04Mw2T0AYzCPh9sIDpV2sPeONvGDqa7oGeohPaF6aAi03wDq9czd3W-lgN~jhaKuTZ8gt~Z0Ywj1nEJmkKza6wR8yhNIgvMR1piik94s20PbB1gTL08rDkSCHSuPj7TqbE8UmYbiU4NnyLCpdLxrOkcfJh1EVg-ntTvJQewyEgF0vXjOMJ-mKbCYfRGZXmMl1g__',
      totalSales: '34.53 ETH',
    },
    {
      id: 4,
      title: 'Juanie',
      img: 'https://s3-alpha-sig.figma.com/img/f2ba/60e7/d0a151a8679c9019f7b2fd3280ed672a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KNiAs3KKm1-gJ8O2uqse6fe1W~aYPc62i0w0d8xZos-BIszrtMrDBwnePt5M3PwPehj4HelYdtHijuLMR8ppbisL0qGGUcnxaj0jkM6TFJJWh-A~Yk7RrnzH8XbosannykziUDPUZhX8HPwtzapDz17f~4nvj-fslpE8PDl7cEKvnOAo-w2O9aozJ8GPeiNpG5-j44-JviK33wDIZSBBO6IDsoIVejzKw2zYiedA5bwra9-nu8ei3pI5UhVpE7sbnvyRyKD93pglUCvjUDMtte~jCNbE8LYF2BqrICY-~gUfBy2D19VMhPANyywnqR8XO3Bod9jFOdU7R9BwjdDvgg__',
      totalSales: '34.53 ETH',
    },
  ];

  return (
    <div className='hidden md:flex flex-col items-start justify-around'>
      <div className='flex justify-between text-left w-[300px] md:w-11/12 self-center 2xl:w-5/6 md:px-8 pb-6'>
        <div className='flex flex-col items-start'>
          <p className="text-2xl md:text-4xl font-bold md:font-semibold w-full">Top Creators</p>
          <p className="text-md text-default-500">Checkout Top Rated Creators on the NFT Marketplace.</p>
        </div>
        <div>
          <Button
            color='secondary'
            variant="bordered"
            className='text-white'
            size='lg'
          >
            View Rankings
          </Button>
        </div>
      </div>
      <div className='flex justify-between self-center w-11/12 2xl:w-4/5 '>
        {authors.map((c) => {
          return <CreatorCard
            item={c}
          />
        })}
      </div>
    </div >
  )
}