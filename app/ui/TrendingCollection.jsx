import { Button, Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import CollectionCard from "./TrendingCollectionCard";
export default function TrendingCollection() {
  return (
    <div className='flex flex-col w-full items-start justify-center'>
      <div>
        <p className="text-xl">Trending Collections</p>
        <p className="text-small text-default-500">Checkout our weekly updated trending collection.</p>
      </div>
      <div className='flex w-full flex-row justify-around'>
        <CollectionCard
          mainSrc='https://s3-alpha-sig.figma.com/img/a792/ddc0/c4e1193ffd08cf4918e6f696bbc8d8fe?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K6LMn5glDDFZPnwjK3iIKueSHD5oHJ1Fw61tIaYJdzbQPVrVRYSt3jet9gpoURF8~gRhSrpD~6tHh5hn1nK53Gx1wpb6D1XfHF77bUvTlwh2ejrB7hgMKbz4uz4JlsDG8LxctT-w-XshSNrRFkUTutSCHtn0M7P7hOSRfDmrL0ulzjBXYbEkq2G6WLhj84j~QO2uK5Q5WA73sOp6gIYfm7ld3Ef5-Os4OFirO~igxQ0ChJeQ3LYZ1gOIMUROuZdpeDA7pLSSLPVD4qqvXPq1Zg4EckjAqZfE5gze1Yl54pfu~BJSiBejM-gsAegXquh6IOdwAVekU41EnXUy0QQc3g__'
          mainAlt='dog'
          bodySrc1='https://s3-alpha-sig.figma.com/img/4eec/8eba/54b2d345dc1480b247b05bb6f0d1f429?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vmnnos-~Sv2VE7qQDM-Ctoubg~oJ5k~peBMLC38XrNE28-KO51h1tuzhlWzbhtwyIWe9WFBqIbwCzPzMPlt7-oOfI7eHAKAN3k~Zd3wWEr-H3-3GqOSS7FokXZWPDDHQqqyG0aNSZkdnTDZrx~rJYEjSZ9piu2LrcdDh8SsW~H82bmkZp98XmoQH~XIFg3cGWKsPa1NIvQNV1nTiaV1tSmX38ZPlO0h0MWzn7DzHqPslbI2Iw2yhAMOick-oMVIxFe6Z8UHBlN5z-nC8A5ALrf6qVjOV83VV~B~FQo1m6BOLfQFiBjDV7aolIXbsbYdId2OPpTirHEC2ESrRZEC-Bw__'
          bodyAlt1='cat'
          bodySrc2='https://s3-alpha-sig.figma.com/img/7e55/1754/df2c85a307298720a7483609e93b5fef?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kCttRq29Xkks0n9pEXil61jUukLneR0remqTkfb0TJp3a7jONUpo8PR709ujcwSbgadlTPlUKMVH4fC4LZlAE8VOE6-eMg66fa-ikBzeoodXjbF55Z8sVC35CnMqQxX1OU8xebytuAarUm7OGqqxDRqqluHA3xieb3wFGAfUZh6dfKSsR2ght2gcD8cD2Qf7KApBjUURvXVW6koa4vSpmCgL4dcy65IjVRG19n7Oj~ddSWdhTRHe1W97b0~XavAnstp~g38HFR3qLt7DPk41LK4DXsLLkqg7LFf30GRDrOOZubLjyE72EuNIjYWMVXYolEu27luS6h7My6P2sU9YxA__'
          bodyAlt2='bear'
          footerSrc='https://s3-alpha-sig.figma.com/img/5f29/0aef/1589d4b7ed50db6bf310ffa8392539ea?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VepxTwB~XgsspU8TPVfBVf-8XSv~ESi1Dt4eRLO2lUdCFFXJE--iza5UnIK2O1zAPUQGG46Op1QDh3E55Xg4g35YylINk89H5H4b3rMKxNgBm4jsH9JtPTcsP7~PKOpNThbycxGeSfDkP2tihRsSLC7zEbKEtkXMUYJ9cwUrFwvLXD3TmaGCo8QFtoll70~0dV4-WqloYL5LURjs6mQ1BbI~wI-TaQGS-t0FE0zhI9wM3KEWutUshqxANcK6~Q7Zjeoh1dTk2577fci~1-A9PrEkfGv7XnShcq3R57P6wzL6t4EIs~1cTkcoITC-x6e2NJVYyVVgKsWGlUjX~D6AJQ__'
          footerTitle='DSGN Animals'
          author='MrFox'
        />
        <div className='p-20'>hola</div>
        <div className='p-20'>hola</div>
      </div>
    </div >
  )
}