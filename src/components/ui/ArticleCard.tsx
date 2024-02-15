import Link from 'next/link';
import Image from 'next/image';
import img from '../../../public/assets/images/fauna.png'

interface articleProps {
   id:string;
   title: string;
   content: string;
   cover: string;
   createdAt: string;
   author: string;
}

function ArticleCard(props: articleProps) {
  return (
    <li className='shadow-md w-fit rounded-md'>
      <Link href={`./geohub/${props.id}`} className='flex flex-col gap-4'>
        <Image
          src={img}
          alt='Grayscale shot of rock slide'
          className='rounded-t-md'
        />
        <div className='flex flex-col gap-2 max-w-[400px] px-4 lg:px-6 pb-4'>
          <p className='font-bold text-lg lg:text-xl'>{props.title}</p>
          <p>{props.content}</p>
          <div className='flex justify-between'>
            <p className='mt-8 text-sm font-bold'>{props.author}</p>
            <p className='mt-8 text-sm font-bold'>{props.createdAt}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ArticleCard;
