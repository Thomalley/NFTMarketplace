import CollectionCard from "./TrendingCollectionCard";

export default function TrendingCollection() {
  return (
    <div className='flex flex-col m-12 mt-28 items-center justify-between 2xl:m-16 2xl:justify-around'>
      <div className='flex flex-col text-left w-[300px] md:w-11/12 self-center 2xl:w-5/6'>
        <p className="text-2xl md:text-4xl font-bold md:font-semibold w-full">Trending Collection</p>
        <p className="text-md md:text-lg mt-2 text-default-600">Checkout our weekly updated trending collection.</p>
      </div>
      <div className='flex flex-row w-[390px] md:w-full md:justify-around 2xl:pr-6 justify-center'>
        <CollectionCard
          className="xs:w-[400px] md:max-w-[400px] bg-background shadow-none"
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
        <CollectionCard
          className="hidden md:block max-w-[400px] bg-background shadow-none"
          mainSrc='https://s3-alpha-sig.figma.com/img/a6f4/3f93/50c73503d13e1fe1a0e3277804ef1192?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ni2ukh5MtiIkANc0xuQLKFAptqUENaIvNgWuFvGucnEEnUKUxnAN1ODtuCPaq0PTW2ls0HE0SBOa7~hUPFKCbP0WVqIayrwnmJsVnV2n608SBOey7t5Z98ZSafhZ2m91HNcXzJ2ZCEVWOcuvF2XqG9jBdbRuA7jWkjSl8CAHkATCKLzkMPi0Hnvflp9to-WSBYq2OrYXZb0W6TBpyQvSyhJ~6sky39HD-grUg2LIKK2vomcmqTOqes04txFQfkV9gbXCrOtgsILbqwP~ecDWI8aJpLVOZgr~TsQTb9vy5OapptehQBdRwNkdRfGGMO0l2px3NYvL0o0~o4eAWo7l-A__'
          mainAlt='fungus'
          bodySrc1='https://s3-alpha-sig.figma.com/img/138c/f49a/c8b9122a6caea314c4c42023a611e74a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2PTHX3gYYWmOwvD3lMgrkQsTzH03NBADWqu4ooN3feaHT4lw4VamMTmEDCWQZUgFfMWkIFEwBx16j8lfgICiKegvyt8m5jZBDuIr5eDAJDk2rlklIz0zHkv-N8UIx~lgIysBmk0YIxWTXMWzk1N53X1p55OoAH2jg87zdjNlmlb9VQJKiYd1tqhlD9DOXC~BEQc-Y94FwqD1uFbANaiCMPwjzZHiKOv1d8leg9y~RhTaybbHXuaBR8Ixnre4qL38XxYkWrxppmFXpxZNgcrLWHKxdMkyrx~F2WW-oMKRHEvHngkI0zGZ~dFikLpx2jg8H9T0IkR1OOIBzIpKZk-zg__'
          bodyAlt1='fungus2'
          bodySrc2='https://s3-alpha-sig.figma.com/img/8ef4/1021/aea8d3372e819451c56863985d896aa0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FAx6d6vK3DMHrDcpHT5c67GmUv~iDe23bYtLktHuMFPzlQO5Kf5FiRe7rcGKa9z6UvWXwMkg6EJgaPlzKlF-G2wI2QpunbSgn3tXF-yK3VJRqcj-jVWO6lAIFA4ThUXFOcZYSlvwqgzmg12MGyTLkeBhRAToeJJgRCejGWPD~AYYFmJgcn5Sym70ojOoIdAt4cqMCZFSj5uwhQoW6BRffmatIII3p4C5V9Mz01GNkjMMpYP6bvgy-tpEAcOBfW2-1JzKA33L5jWb6ZvCShn-QtFAcxvJp4m-PkQc-8QZmLK~pq7TkC~SA1xlGlE4Xw287b1nb431accW~ScThlGx-Q__'
          bodyAlt2='fungus3'
          footerSrc='https://s3-alpha-sig.figma.com/img/1319/72c5/5d373813d19d71797627818ee707c601?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MS2AU6UrPzr2cjB5OUfhGdlf8LrwWunzuJJ9NFjVvXOWrU6o4fBD6O-h7TrZYplfHf~znjCQ6R1JS8k4NRcrwu2w7XMnwFUx1fMVqlxgXq1RFsa76sQkmVmC8ibyDWEbz8hIVVlpA~k0hfdYe7rhqlN2wwUxgYZ05ctcy~mjYU78L8nIwH4tfRH6kn~E0vtgqTNhhvyvOC3-VLndIFgpvYmgRkhx1qvMkCTpNr4h~GaVisv9yNB6Jvz721mVsR5j253qdND1qp3YwygNRDqf65sB9UYW5l5zov3yuJvQtD0zhF1O3YXvBrR7WguuGTAHCxwjl~HJi4skrBzzQ9N-2g__'
          footerTitle='Magic Mushrooms'
          author='Shroomie'
        />
        <CollectionCard
          className="hidden md:block max-w-[400px] bg-background shadow-none"
          mainSrc='https://s3-alpha-sig.figma.com/img/e21b/d708/ab5a825e0fedd4f1daf3d715bf9577ae?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NU5QGrZQ1oXbd-NybbRpA9c5zkaD~Vn73EkCuiBUh9LnRv~OZiJ1FmRRB2Fa3eOG4VjgYZWJZ5Iau8SO5BM4wQwn91xipKmet92OFqvrShfGAwuScq8SBcQYWp0mT-En5G3-o91RVHPECP8kPfhwu0hCqjcQ~iW33vuGTsMHP~p1custybkQdOm9q1XqnPdgLDwbobkTjKVCnzFLUYGbzMqF0LyHGga6CU1kIYK0cqGDyzI8O5iSXhhAWfZPd6zwDJ~DJ~iEJKopv7jL0-QjTECrAdS0IcdOzYhwT~9wdfXILMlQ1iywo880AIQYLF-F9Pefegbnjg3slWgjb6ddJw__'
          mainAlt='robot'
          bodySrc1='https://s3-alpha-sig.figma.com/img/d983/47e1/73b90df9823e9f0887e7106bb434691d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=imqpz3uLsswJvr9zUXEa1x4SrxAWH93oqtcCO5YFXT6uCV0A0w99fcAIy9SgI0lBFG1tepdAhrHsDCIh2p6i8~RpGhg3FCf2gLCYPZOD41B5kp3b86saCHQV5F~VoKuSzdvWQtS27MGqPX-OfhM~ow9UYWgnf-EFWVDuUjSvZH9plW8qVSb4LwCd~2Lq5SVvGJCar~NUD8myxOtCF3SSmq~ITxmpMZ8sX2mK8-FBbpQnyCIYfnF0eE-ATNp6JWOY1KcQfrI3KdHdMcv1HIoCFoqDKX0dD7lH1kU0X6pxxL3pm5o5~7wmYzzwaM6kdVSJh5QGMQcVaB6pPIFK7L83Gg__'
          bodyAlt1='robot2'
          bodySrc2='https://s3-alpha-sig.figma.com/img/8b1e/419a/e7379ad5b52877ce89231d09f29bbfa1?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qqoe5Db0bXBcvVwh0JKZgKpePhaXU202qu6X-d9bGRbHtZrzTXzE8CMe-vmS8gx9UcBqsN8GUDapfMx3Lq4-DWYq~yqKqlDTkJjk674-rgGZSQ5k6dQJv89MrD7x87UYRX435pCMPPcJUfukCZFoQi3YRwcoxbBRWQfoL5yCuEdrdtk~F3YlpxTy2g5j9rUbmLgqg8XI5qJROs~nY8GqHGiSdJR2CowOddUOLzskDghp65jVIGaUxaxxXyWz1Q6BdFHkSXmNL71jC2gRnA2sEfmU0jNqs6xRp01-IJVk~s6Ut5iroZ69Z1oahvuu-shc-16a1LUoq6KwiSJKvxhtMw__'
          bodyAlt2='robot3'
          footerSrc='https://s3-alpha-sig.figma.com/img/0c3d/fcc7/d16f0e211dc0f25ccfbebf04c88856cf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rv~QKp~RtqeOShLGlK0wgCasIS9wSJBaWQYEkHXKwbPYuukTtFEeGmo9szE788OA7MaKhRTTjdQzQSZZDw9dlHfeNJvPI7Hjx19M1iYa83OfIYD7-P28jUHc61AXpO1PO5jGbmFkYkIg0blm8s63H10WchJ4elOA~wQ2TKKjyw6UWJBjSVVaKxHRKUQi3molL3fnpprDQJ1rBfvJ6dJaebabpsNO3TVhKVY6gUszQRE33SSHrp3dJXoPFd9fLYJBDQnP7-f1NxJE4y2Nv2G0XoVIkL9P46BtVpM-fLDCknEd5Ymz5IBjRZRcAVyMgqjNPP2-jI1UXwcbQ~WiUnD7MQ__'
          footerTitle='Disco Machines'
          author='BeKind2Robots'
        />
      </div>
    </div >
  )
}