import Link from 'next/link';
import prisma from '@/lib/db';
import { cache } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Share from '@/components/cards/share';
import Progressbar from '@/app/(root)/blog/progressbar';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const getOpportunity = cache(async (slug: string) => {
  const opportunity = await prisma.opportunity.findUnique({
    where: {
      slug: slug,
    },
    include: { author: true },
  });
  return opportunity;
});

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const opportunity = await getOpportunity(slug);

  if (!opportunity) return {};

  return {
    metadataBase: new URL('https://www.geotech4all.com'),
    title: opportunity?.title,
    // keywords: '',
    openGraph: {
      type: 'article',
      url: `https://www.geotech4all.com/blog/${slug}`,
      title: opportunity.title,
      description: opportunity.description,
      siteName: 'Geotech4All',
      publishedTime: new Date(opportunity.createdAt).toISOString(),
      authors: [opportunity.author.name || 'Geotech4All'],
      images: [
        {
          url: opportunity.image,
          width: '1200',
          height: '630',
          // alt: ''
        },
      ],
    },
  };
}

export const generateStaticParams = async () => {
  const opportunities = await prisma.opportunity.findMany({
    include: { author: true },
  });
  return opportunities.map((opportunity) => opportunity.slug);
};

async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const opportunity = await getOpportunity(slug);
  if (!opportunity) return null;

  return (
    <>
      <Progressbar /> {/*currently tracking entire page scroll*/}
      <article className='py-10 lg:py-16 px-4 flex flex-col gap-5 max-w-screen-md mx-auto'>
        <h1 className='font-bold text-xl md:text-2xl lg:text-4xl'>
          {opportunity.title}
        </h1>
        <section className='flex items-center gap-3 py-2'>
          <Image
            src={opportunity.author.image || '/profile.svg'}
            alt={''}
            width={40}
            height={40}
            className='w-[40px] h-[40px] rounded-full'
          />
          <div className='flex items-center gap-4 leading-4 font-medium text-sm'>
            <p className='lg:text-lg'>{opportunity.author.name}</p>
            <span className='font-bold'>-</span>
            <p className='lg:text-lg'>
              {new Date(opportunity.createdAt)
                .toDateString()
                .split(' ')
                .slice(1)
                .join(' ')}
            </p>
          </div>
        </section>
        <Image
          src={opportunity.image}
          alt={opportunity.title}
          width={768}
          height={400}
          className='w-auto h-auto aspect-video rounded-lg'
        />
        <section
          className='prose prose-base lg:prose-lg xl:prose-xl mt-2 lg:mt-4'
          dangerouslySetInnerHTML={{
            __html: opportunity.description ? opportunity.description : '',
          }}
        />
      </article>
      <Share title={opportunity.title} />
      <section className='px-6 md:px-8 lg:px-24 mb-14'>
        <div className='p-6 lg:p-10 flex flex-col items-center border border-input border-dashed rounded-xl max-w-screen-md mx-auto'>
          <div className='flex flex-col gap-6 lg:gap-8 text-center items-center'>
            <h3 className=' text-2xl lg:text-4xl font-bold'>Join us</h3>
            <p className=' max-w-prose md:text-lg lg:text-xl'>
              Join our community of geoscience enthusiasts and professionals to
              share ideas, and learn from each other.
            </p>
            <Link
              href='https://chat.whatsapp.com/J7SblOAgAan7IrAsWAL3MC'
              target='_blank'
              className='w-fit flex gap-2 items-center rounded-md px-8 py-2.5 text-main bg-accent text-acceent transition duration-300 max-md:self-center'
            >
              Join
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;