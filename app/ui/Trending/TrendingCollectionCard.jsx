import { Button, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from 'next/image'
export default function CollectionCard({ mainSrc, mainAlt, bodySrc1, bodyAlt1, bodySrc2, bodyAlt2, footerSrc, footerTitle, author }) {
  return (
    <Card className="max-w-[400px] bg-background shadow-none">
      <CardHeader>
        <Image
          alt={mainAlt}
          height={350}
          width={300}
          style={{ borderRadius: '10%' }}
          src={mainSrc}
        />
      </CardHeader>
      <CardBody>
        <div className='flex flex-row justify-between'>
          <Image
            alt={bodyAlt1}
            height={100}
            width={99}
            style={{ borderRadius: '10%' }}
            src={bodySrc1}
          />
          <Image
            alt={bodyAlt2}
            height={100}
            width={99}
            style={{ borderRadius: '10%' }}
            src={bodySrc2}
          />
          <Button
            color='secondary'
            className='h-100 w-120'
          >
            1025+
          </Button>
        </div>
      </CardBody>
      <CardFooter className='bg-lightGray'>
        <div className="flex flex-col">
          <p className="text-md">{footerTitle}</p>
          <div className="flex flex-row">
            <Image
              alt='avatarImage'
              height={20}
              width={20}
              style={{ borderRadius: '50%' }}
              src={footerSrc}
            />
            <p className="text-small text-default-500 pl-1">{author}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}