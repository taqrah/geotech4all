import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DoubleArrowDownIcon } from '@radix-ui/react-icons';
import data from '@/data/data.json';
import Member from '@/components/cards/member';
import { siteConfig } from '@/app/config/site';

export const metadata: Metadata = {
  title: 'About',
  openGraph:{
    description: 'Everything Geoscience',
    images: [
      {
        url: siteConfig.ogImage,
        width: '1200',
        height: '630',
        // alt: ''
      },
    ],
  }
};

function About() {
  return (
    <>
      <section className='px-6 md:px-8 min-h-[calc(100vh-60px)] grid place-content-center'>
        <div className='flex flex-col gap-4 md:gap-6 lg:gap-10 justify-center items-center h-full'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl text-center font-bold'>
            Everything Geoscience
          </h1>
          <p className='text-center lg:mt-4 text-xl lg:text-2xl max-w-[900px]'>
            Your go-to resource center for everything geoscience. We are a team
            of geoscientists committed to making geoscience knowledge and tools
            accessible to everyone.
          </p>
          <Link
            href='#info'
            className='h-16 w-16 lg:w-20 lg:h-20 grid place-items-center border-accent border-dashed border rounded-full'
          >
            <DoubleArrowDownIcon className='down-arrow' />
          </Link>
        </div>
      </section>
      <section id='info' className='p-6 md:px-8 lg:px-24'>
        <article className='flex flex-col md:flex-row gap-6 justify-between'>
          <div className='flex flex-col gap-4 lg:gap-6 h-full max-w-[500px]'>
            <h2 className='text-lg lg:text-2xl font-bold mt-4'>The Problem</h2>
            <p className='mt-4 text-xl lg:text-2xl max-w-[50ch]'>
              The geoscience community in nigeria is plagued by a lack of access
              to knowledge & tools, and a shortage of skilled professionals.
              This has led to a gap in the industry, and a lack of innovation in
              the field.
            </p>
          </div>
          <div className='flex flex-col gap-4 lg:gap-6 h-full max-w-[500px]'>
            <h2 className='text-lg lg:text-2xl font-bold mt-4'>Our Approach</h2>
            <p className='mt-4 text-xl lg:text-2xl max-w-[50ch] '>
              We plan to bridge this gap by providing access to tools and
              resources to empower individuals and organizations with the skills
              and tools they need to succeed in the geoscience industry.
            </p>
          </div>
        </article>
      </section>
      <section className='flex flex-col gap-8 md:gap-12 lg:gap-16 px-6 md:px-8 py-10 md:px-8 lg:px-24'>
        {/* mission */}
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 lg:mt-8'>
          <div className='relative w-fit mx-auto'>
            <Image
              src={'/images/mission.jpg'}
              width={500}
              height={300}
              alt='image by rawpixel.ccom on freepik'
              className='rounded-lg w-full relative z-10'
            />
            <div
              aria-hidden='true'
              className='absolute top-2 -left-2 rounded-lg border-dashed border border-focus w-full h-full'
            ></div>
          </div>
          <div className='flex flex-col justify-center text-center lg:text-left'>
            <p className='font-bold text-2xl lg:text-4xl mb-5'>Our Mission</p>
            <p className='max-w-screen-md mx-auto lg:text-xl'>
              We are driven by the belief that geoscience holds the key to
              understanding our planet, and addressing global challenges.
            </p>
          </div>
        </div>
        {/* vision */}
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 lg:mt-8'>
          <div className='flex flex-col justify-center text-center lg:text-left'>
            <p className='font-bold text-2xl lg:text-4xl mb-5'>
              Our Vision
            </p>
            <p className='max-w-screen-md mx-auto lg:text-xl'>
              To be the leading resource center for everything geoscience from
              knowledge, to practical application and solutions.
            </p>
          </div>
          <div className='relative w-fit mx-auto max-lg:row-[1]'>
            <Image
              src={'/images/vision.jpg'}
              width={500}
              height={300}
              alt='image by freepik'
              className='rounded-lg w-full relative z-10'
            />
            <div
              aria-hidden='true'
              className='absolute top-2 -left-2 rounded-lg border-dashed border border-focus w-full h-full'
            ></div>
          </div>
        </div>
      </section>
      {/* People section */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='font-bold text-2xl lg:text-4xl mb-5'>Meet the team</h2>
        <article className='flex flex-col gap-8'>
          {data.team.map((member) => (
            <Member
              key={member.name}
              name={member.name}
              image={member.image}
              bio={member.bio}
              role={member.role}
            />
          ))}
        </article>
      </section>
    </>
  );
}

export default About;