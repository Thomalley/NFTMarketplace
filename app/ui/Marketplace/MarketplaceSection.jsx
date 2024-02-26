import DiscoverMoreCard from "../DiscoverNFT/DiscoverMoreCard";
import { Divider } from '@nextui-org/react';
export default function MarkerplaceSection() {
  const firstRowItems = [
    {
      id: 1,
      title: 'Magic Mushroom 0325',
      authorName: 'Shroomie',
      img: 'https://s3-alpha-sig.figma.com/img/138c/f49a/c8b9122a6caea314c4c42023a611e74a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2PTHX3gYYWmOwvD3lMgrkQsTzH03NBADWqu4ooN3feaHT4lw4VamMTmEDCWQZUgFfMWkIFEwBx16j8lfgICiKegvyt8m5jZBDuIr5eDAJDk2rlklIz0zHkv-N8UIx~lgIysBmk0YIxWTXMWzk1N53X1p55OoAH2jg87zdjNlmlb9VQJKiYd1tqhlD9DOXC~BEQc-Y94FwqD1uFbANaiCMPwjzZHiKOv1d8leg9y~RhTaybbHXuaBR8Ixnre4qL38XxYkWrxppmFXpxZNgcrLWHKxdMkyrx~F2WW-oMKRHEvHngkI0zGZ~dFikLpx2jg8H9T0IkR1OOIBzIpKZk-zg__',
      avatar: 'https://s3-alpha-sig.figma.com/img/1319/72c5/5d373813d19d71797627818ee707c601?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MS2AU6UrPzr2cjB5OUfhGdlf8LrwWunzuJJ9NFjVvXOWrU6o4fBD6O-h7TrZYplfHf~znjCQ6R1JS8k4NRcrwu2w7XMnwFUx1fMVqlxgXq1RFsa76sQkmVmC8ibyDWEbz8hIVVlpA~k0hfdYe7rhqlN2wwUxgYZ05ctcy~mjYU78L8nIwH4tfRH6kn~E0vtgqTNhhvyvOC3-VLndIFgpvYmgRkhx1qvMkCTpNr4h~GaVisv9yNB6Jvz721mVsR5j253qdND1qp3YwygNRDqf65sB9UYW5l5zov3yuJvQtD0zhF1O3YXvBrR7WguuGTAHCxwjl~HJi4skrBzzQ9N-2g__',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 2,
      title: 'Happy Robot 032',
      authorName: 'BeKind2Robots',
      img: 'https://s3-alpha-sig.figma.com/img/df15/4235/7607a1ee4849d817ed31b7a6f61f08e2?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fo9apbL3mZqISG2xqEPGWg7myMHwRRVXW8UpO~9-vTkUQTALUR4uPot0InkuMDKUJwN~3fpxnhA5dKg6ShJu8tapV49F1kIgUffNKzdLLr5C~JKaWX9S0mHWnL5D792O8bZB0-J4jD93fgyjyOA0ZjjcsKs3OpBMszJGZaNLDb8YX9lNHV2v5ud6iSP7pdVWkJvk64~yIeh4qeFPvHf5TdApzE48ewvNRUKOTUq6O2tZAOlQBTXRFOJyUodMNuyctU7JNDolenpI7vjMEQDbBOvXKJvFkusUFNhA6ID85KuYeVKkcIE7rjqaILcuxfsWcS1faIs7zufltQW5mt4lMw__',
      avatar: 'https://s3-alpha-sig.figma.com/img/0c3d/fcc7/d16f0e211dc0f25ccfbebf04c88856cf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rv~QKp~RtqeOShLGlK0wgCasIS9wSJBaWQYEkHXKwbPYuukTtFEeGmo9szE788OA7MaKhRTTjdQzQSZZDw9dlHfeNJvPI7Hjx19M1iYa83OfIYD7-P28jUHc61AXpO1PO5jGbmFkYkIg0blm8s63H10WchJ4elOA~wQ2TKKjyw6UWJBjSVVaKxHRKUQi3molL3fnpprDQJ1rBfvJ6dJaebabpsNO3TVhKVY6gUszQRE33SSHrp3dJXoPFd9fLYJBDQnP7-f1NxJE4y2Nv2G0XoVIkL9P46BtVpM-fLDCknEd5Ymz5IBjRZRcAVyMgqjNPP2-jI1UXwcbQ~WiUnD7MQ__',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 3,
      title: 'Happy Robot 024',
      authorName: 'BeKind2Robots',
      img: 'https://s3-alpha-sig.figma.com/img/8baa/8473/38fb05f3af173d2fe841ef434a65828b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mIWEeVpMU4cz05WOkTespnHG9xSfZVy8jm7sBRFwAMhzlqz5vq7QlirUT5vfuZugx2EXaLUcPzZjSGmmUpT80swcqRnN~HqFtlXYxq3CrTdjF70WW2T-yPBWEIPoNvCet6fAySzSsQLREygXfMN0qtQaLiRtI5eYntvlQtMHJK-iBaWPgjuRjCGhJ4McgRBxkSeI4WBnDQA0gKHN64P33~cmniRd2iilAu6EWnvLn5-F10bf8AUVcA3Xs4d7eWodGdRPmF0sYkAcZhMcYpE3pQ9ty5wGNyE9-P32-aFbEwih6PDUkwEuUTc2DoL9tEnyHfYrK~UuT67WyMZUAa4~Rg__',
      avatar: 'https://s3-alpha-sig.figma.com/img/0c3d/fcc7/d16f0e211dc0f25ccfbebf04c88856cf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rv~QKp~RtqeOShLGlK0wgCasIS9wSJBaWQYEkHXKwbPYuukTtFEeGmo9szE788OA7MaKhRTTjdQzQSZZDw9dlHfeNJvPI7Hjx19M1iYa83OfIYD7-P28jUHc61AXpO1PO5jGbmFkYkIg0blm8s63H10WchJ4elOA~wQ2TKKjyw6UWJBjSVVaKxHRKUQi3molL3fnpprDQJ1rBfvJ6dJaebabpsNO3TVhKVY6gUszQRE33SSHrp3dJXoPFd9fLYJBDQnP7-f1NxJE4y2Nv2G0XoVIkL9P46BtVpM-fLDCknEd5Ymz5IBjRZRcAVyMgqjNPP2-jI1UXwcbQ~WiUnD7MQ__',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    }
  ];
  const secondRowItems = [
    {
      id: 1,
      title: 'Designer Bear',
      authorName: 'Mr Fox',
      img: 'https://s3-alpha-sig.figma.com/img/7e55/1754/df2c85a307298720a7483609e93b5fef?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kCttRq29Xkks0n9pEXil61jUukLneR0remqTkfb0TJp3a7jONUpo8PR709ujcwSbgadlTPlUKMVH4fC4LZlAE8VOE6-eMg66fa-ikBzeoodXjbF55Z8sVC35CnMqQxX1OU8xebytuAarUm7OGqqxDRqqluHA3xieb3wFGAfUZh6dfKSsR2ght2gcD8cD2Qf7KApBjUURvXVW6koa4vSpmCgL4dcy65IjVRG19n7Oj~ddSWdhTRHe1W97b0~XavAnstp~g38HFR3qLt7DPk41LK4DXsLLkqg7LFf30GRDrOOZubLjyE72EuNIjYWMVXYolEu27luS6h7My6P2sU9YxA__',
      avatar: 'https://s3-alpha-sig.figma.com/img/5f29/0aef/1589d4b7ed50db6bf310ffa8392539ea?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VepxTwB~XgsspU8TPVfBVf-8XSv~ESi1Dt4eRLO2lUdCFFXJE--iza5UnIK2O1zAPUQGG46Op1QDh3E55Xg4g35YylINk89H5H4b3rMKxNgBm4jsH9JtPTcsP7~PKOpNThbycxGeSfDkP2tihRsSLC7zEbKEtkXMUYJ9cwUrFwvLXD3TmaGCo8QFtoll70~0dV4-WqloYL5LURjs6mQ1BbI~wI-TaQGS-t0FE0zhI9wM3KEWutUshqxANcK6~Q7Zjeoh1dTk2577fci~1-A9PrEkfGv7XnShcq3R57P6wzL6t4EIs~1cTkcoITC-x6e2NJVYyVVgKsWGlUjX~D6AJQ__',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 2,
      title: 'Colorful Dog 0356',
      authorName: 'Keepitreal',
      img: 'https://s3-alpha-sig.figma.com/img/84bb/b2ea/04b29a2aed3635daed04ad3418031eb4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WRbb1INbov2l~T8ceP82VtAjkZAKJ63cqXyjJje6u6RQ4LLQzliynPCSWmHGGu28TXMc0vPUz3pM8Rl4hKti3~6GoOVqkMtOsNlCvE4GLUSgfKjOjL7rk6mFKCQ0pmut4ppF-yBJVJHubHh8K2qOAyuQvd~02mugxu6m3~DFhmO5kV41asFmgZalBmjthS0N6kpfYSjXV5A5bc4U4xGwmQh0PxPiYAgkdmnpM4ddXnns95-Dgga3AdOEYmFofFtXIttTjJ5Vhtf-inRw5yoCI0aPo8pjMYB8TpZyQd-8-Hm~ExzWmsJbU1~I-BGEjf7jMOgyW5HOcntkXxM0KpcDVA__',
      avatar: 'https://s3-alpha-sig.figma.com/img/f69e/01f4/14ef96fbca729d59b18599e7b5fe108f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CXze0wlhsGSKVAVU0g47QjdlrAzlKJi0-ZEhf-3xm2at0mp3xToCZfNW~59oNQsCOapBPCM1iOD6gQrIuF2YwILgMKJFlnwHdfEY-J5~VUx368EyRkzARxHwIJsTjeUlTxwJ~ak~0vdfZfFjcZ0P2WuHokjnes2IkK1UKuFijv1EgyQS59xHTU3joYCa~fuRTt2iJP2PspZAb934jx9j4miPP-JmO0KRcGlIx0zBkZYjIESPeIlSQvH4L6SfSdd~ZPUT7ldB9x8wMKm1axOx0BhuzqdvCvMm9QcktQXPerrCOMFFO9o-836c8psQnKEj2wWXvAOrK7ChAlcehfzvjA__',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 3,
      title: 'Dancing Robot 0312',
      authorName: 'Robotica',
      img: 'https://s3-alpha-sig.figma.com/img/d983/47e1/73b90df9823e9f0887e7106bb434691d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=imqpz3uLsswJvr9zUXEa1x4SrxAWH93oqtcCO5YFXT6uCV0A0w99fcAIy9SgI0lBFG1tepdAhrHsDCIh2p6i8~RpGhg3FCf2gLCYPZOD41B5kp3b86saCHQV5F~VoKuSzdvWQtS27MGqPX-OfhM~ow9UYWgnf-EFWVDuUjSvZH9plW8qVSb4LwCd~2Lq5SVvGJCar~NUD8myxOtCF3SSmq~ITxmpMZ8sX2mK8-FBbpQnyCIYfnF0eE-ATNp6JWOY1KcQfrI3KdHdMcv1HIoCFoqDKX0dD7lH1kU0X6pxxL3pm5o5~7wmYzzwaM6kdVSJh5QGMQcVaB6pPIFK7L83Gg__',
      avatar: 'https://s3-alpha-sig.figma.com/img/341a/ecac/80c1e6f6c1ae447f54bae66d368c972b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dJRePuKQyrXMEYMRSemwwzEw0xPUvsfz4IuxM~s8jpvaHUHlbuWrm8R0oyYZZWBpoUAPO~udKSkYwcwTrw50au6KNYV2A-wwUEZUK-KKj6kcsWKYavISbMJFKerRxdL2m5U6GDlNTmKtF6MqeruSZV2TCWT9KufBQCn61aFk7HqECU4~lZF-ypRr83BnHjHHrxpxf7VPzOBIsw17dlZMBGfKg4HuQH686EOqwdmBV-EhrtXPkZrfmqgDMo6d4Sx1SEz7z~MZUzhK3-Zt45SB7tr7J~PrxiCeANu61-4I8vFIjPUqUFmIuJZ957fgisS4rG5ebc2Sa6O6qQO8UFYQnQ__',
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    }
  ];
  return (
    <div className='flex flex-col items-start justify-arounds bg-[#3B3B3B]'>
      <div className='flex flex-row justify-around w-full bg-background h-20'>
        <div className='flex flex-col w-1/2 justify-center items-center'>
          <div className='flex flex-row mb-4'>
            <p className='pr-4 font-semibold text-lg'>NFTs</p>
            <div className='hidden md:flex bg-[#858584] rounded-xl px-2'>302</div>
          </div>
          <Divider className='h-1 w-3/4 md:w-2/3 -mb-8 bg-[#858584]' />
        </div>
        <div className='flex flex-col w-1/2 justify-center items-center'>
          <div className='flex flex-row'>
            <p className='pr-4 font-semibold text-lg text-default-500'>Collections</p>
            <div className='hidden md:flex bg-[#3B3B3B] rounded-xl px-2'>67</div>
          </div>
        </div>
      </div>
      <div className=' flex flex-col pt-12 m-auto'>
        <div className='columns-1 md:columns-3 m-auto'>
          {firstRowItems.map((i) => {
            return (
              <div className='mb-16'>
                <DiscoverMoreCard
                  item={i}
                  color='background'
                />
              </div>
            )
          })}
        </div>
        <div className='columns-1 md:columns-3 m-auto'>
          {secondRowItems.map((i) => {
            return (
              <div className='mb-16'>
                <DiscoverMoreCard
                  item={i}
                  color='background'
                />
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}