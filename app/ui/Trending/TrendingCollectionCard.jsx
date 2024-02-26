import { Button, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from 'next/image'
import { spaceMono } from "../Fonts";

export default function CollectionCard({
  mainSrc,
  mainAlt,
  bodySrc1,
  bodyAlt1,
  bodySrc2,
  bodyAlt2,
  footerSrc,
  footerTitle,
  author,
  ...rest
}) {
  return (
    <Card {...rest}>
      <CardHeader>
        <Image
          alt={mainAlt}
          height={350}
          width={300}
          style={{ borderRadius: '10%', width: '100%' }}
          src={mainSrc}
        />
      </CardHeader>
      <CardBody>
        <div className='flex flex-row justify-between'>
          <Image
            alt={bodyAlt1}
            height={100}
            width={100}
            style={{ borderRadius: '15%' }}
            src={bodySrc1}
          />
          <Image
            alt={bodyAlt2}
            height={100}
            width={100}
            style={{ borderRadius: '15%' }}
            src={bodySrc2}
          />
          <Button
            color='secondary'
            className={`w-[100px] h-[100px] ${spaceMono.className} text-lg`}
            radius="lg"
          >
            1025+
          </Button>
        </div>
      </CardBody>
      <CardFooter className='bg-lightGray'>
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-medium md:text-md">{footerTitle}</p>
          <div className="flex flex-row gap-2">
            <Image
              alt='avatarImage'
              height={25}
              width={25}
              style={{ borderRadius: '50%' }}
              src={footerSrc}
            />
            <p className="text-lg md:text-sm">{author}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}