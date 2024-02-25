import { Button } from "@nextui-org/react";
import DiscoverMoreCard from "./DiscoverMoreCard";
export default function DiscoverMore() {
  const items = [
    {
      id: 1,
      title: 'Distant Galaxy',
      authorName: 'MoonDancer',
      img: 'https://s3-alpha-sig.figma.com/img/1227/9881/7c4f8936a4246f91674d47fe40c14d63?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fZMf1NLUXLBL0whpRBoxaxVmW~CSdZJ8D~LVlqsDrc6XExG6tYQVfbqM-1jdBugVikABU9UhpX4TBpOzZRdPLK-UEmNMi4ELL6ooAgbNeG5Wa05zvsrgUxJE-2fd1Wjd2zCfjKKjBktjtLX3Rt~8GIUQHyepvdI-TGdbURvn4Rw8WLQFhosDE433k~OHyEr0npRUQEYAfjUfOucLD6uoe2yge9pMUTZA~Ati6FqR1m11LGVWJK9SSZjxS3O1IPZTtHu-S~u~29qJTwtpHmThgxzfZ7gk3Kf7G3Wne3hlmYLeQ-n6rtTPPWve3-k5MkF7oHoP2XhL86nKV2eNj1ba7g__',
      avatar: 'https://s3-alpha-sig.figma.com/img/a22b/2d00/bbd0f89ae89f4eae28a0eb19cb2e497a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P0yiPp44fpHAFqzoaACMxvdHicRtL3mkQ~vhnlbHYaf1thXnal3WRxCOPbYhDDHRj3MYqmmcq1U7PJiccxj-y98CEnI8Q1~lzlKYHknoDxShgllGQBDdU1CeV5WY34dMasogGOS9Eww5SFO-CFaBuYZQMKBxdWEfKeuNTLBbLjAdEWhYHz5Zq0w5OSt0OVuPPLtRCMepa2R8KgWvTjBg-g0quL7U3l1fjv3WFssjzHh-0n4TIug~0oI9AeY8Fx48EztAYwwidReBo6Em~C325CypEGM8yVTo4~aHlo-eyvatTTeSrH89bMjvITfZYbuTmiDaoOp-VvZWxuPzj5cMxA__',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 2,
      title: 'Life on Edena',
      authorName: 'NebulaKid',
      img: 'https://s3-alpha-sig.figma.com/img/d708/098d/95de438163a608988f293d376aed4b32?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pHGcqHN5QbjdPCxBbzXDthQQLomm8Q1~xKrLlm7b9ZmUF~BXJtV43qh9dxjiVDwatKYH5PgS~bUOaKgPSrDTRaLG45KDhmskhpEiLvzdtSQHmLb4EF9zGy~Q9jE-YnoaRneRvrXM0bHyQVTAcB4y18lnOP8cMpJyuLmN0bN3lEEYpkyBt2dtVzi6NCkXFZ~rnSn2egcZbUnn6jszZChJCGf5booK0gXzgwRgHN85S-1~6g-Ruib1yHa3m~gGbq6rTrHMhYJ2BAiTHThueYXWrCKWgxSZY95TKJ3XoyWctCxASJ0rL9OzE4j7wSZt0ukafE-jELxQgLjUEkeuhW9dyw__',
      avatar: 'https://s3-alpha-sig.figma.com/img/c57b/60ef/83527db5008399cfcda413ff66d8cf93?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fmjQfJgfDhA7j5lYU78QZQJgHk~tNcYTBdCfWtBJnPV4-xRvRWZTqSIEjC6zXBN6M77lnMEeowIAOhqtpSHYkkU68UjA6vR3tIuRrNcRDfhrgc-4nPrfl1mYgAcJ5N377zOEA4-S8yo3HCoFH9yQksMxpmycxYeP3HSEiVjV6ZbNOr3MZx88GLl3k4tIHilwWIJ4mIoTn-eHljvrNNx9PCm7LYcmPR6GqpfY6TO5m8ldh31qQExOXt7~s2bPmHY7ZHBzqFgAzmB~y-VEpzT6EFInYKIkt-1D~00EHTP5g4jCuSA7JQNOjkYX-TmYCjwdWii86S8TI10bOokD~PlA-Q__',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 3,
      title: 'Astro Fiction',
      img: 'https://s3-alpha-sig.figma.com/img/6f2d/fe69/21b6620c5678c5b0215637f93ef42f6f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKTKrDd82--7pUUGU0~KF04By~ku4n382tMxKrI2Qi2peMTpm21OrRxH45VCOP02ELyHzfNae0ao5C6QnCbMDKpdLZS~CgiNyNC3SVkLJGksYX3ipqEN85MXW0-OrJF436fVJY~Xdx25t8DOVZ2BGORQmwn56ogp-8I60Ij3Z7ZMhh~p2QNKPfVr11PdN8AOEkE7NnLaHZEAO~9FsWHVE9YbVfD~AqACXg86N5eGtBVpFkFAYgc-EoJWYoD1OmXmK~ADD0XrLBf-v8VGAokyVW~3ZZ1ZnnACgKSFq5hNr3p1B6jXgw9MugghB-vMQ9e-WrdhyEbBAgWWWaf2l0misw__',
      authorName: 'Spaceone',
      avatar: 'https://s3-alpha-sig.figma.com/img/f69e/01f4/14ef96fbca729d59b18599e7b5fe108f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CXze0wlhsGSKVAVU0g47QjdlrAzlKJi0-ZEhf-3xm2at0mp3xToCZfNW~59oNQsCOapBPCM1iOD6gQrIuF2YwILgMKJFlnwHdfEY-J5~VUx368EyRkzARxHwIJsTjeUlTxwJ~ak~0vdfZfFjcZ0P2WuHokjnes2IkK1UKuFijv1EgyQS59xHTU3joYCa~fuRTt2iJP2PspZAb934jx9j4miPP-JmO0KRcGlIx0zBkZYjIESPeIlSQvH4L6SfSdd~ZPUT7ldB9x8wMKm1axOx0BhuzqdvCvMm9QcktQXPerrCOMFFO9o-836c8psQnKEj2wWXvAOrK7ChAlcehfzvjA__',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
  ];
  return (
    <div className='flex flex-col items-start justify-around m-20'> 
      <div className='flex w-3/4 self-center pb-10 justify-between'>
        <div className='flex flex-col items-start'>
          <p className="text-2xl font-semibold">Discover More NFTs</p>
          <p className="text-md text-default-500">Explore new trending NFTs.</p>
        </div>
        <div>
          <Button
            color='secondary'
            variant="bordered"
            className='text-white'
            size='lg'
          >
            See All
          </Button>
        </div>
      </div>
      <div className='flex w-full flex-row justify-around'>
        {items.map((i) => {
          return <DiscoverMoreCard
            item={i}
          />
        })}
      </div>
    </div >
  )
}