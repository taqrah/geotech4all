import Image from 'next/image';
import geohub from '../../../public/assets/icons/geohub.jpg';
import Link from 'next/link';
import { Metadata } from 'next';
import { DoubleArrowDownIcon, ArrowRightIcon } from '@radix-ui/react-icons';

export const metadata: Metadata = {
  title: 'Services',
};
const Services: React.FC = () => {
  return (
    <>
      <section className='px-6 md:px-8 lg:px-24 py-10 min-h-[85vh] grid place-items-center'>
        <div className='flex flex-col gap-6 lg:gap-10 justify-center items-center'>
          <h1 className='text-4xl lg:text-8xl text-center font-bold'>
            Tailor-made solutions for your geoscience needs
          </h1>
          <p className='text-center mt-4 text-xl lg:text-2xl max-w-[900px]'>
            From large enterprises to academia – we help the community solve geo
            problems.
          </p>
          <Link
            href='#showcase'
            className='w-[60px] h-[60px] lg:h-[100px] lg:w-[100px]  grid place-items-center border-accent border-dashed border rounded-full'
          >
            <DoubleArrowDownIcon className='down-arrow' />
          </Link>
        </div>
      </section>
      <section id='services' className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='text-2xl lg:text-4xl font-bold mb-16'>Our Services</h2>
        <ul className='grid gap-8 lg:gap-32 mt-5 grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))]'>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>
              Geological Services
            </h3>
            <p className='lg:text-xl'>
              Our geological services encompass a wide range of expertise
              including geological mapping, mineral exploration, and site
              characterization.
            </p>
            <Link
              href={`/services/geological-services`}
              className='w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
            >
              Details
              <ArrowRightIcon aria-hidden='true' />
            </Link>
          </li>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>
              Project Writing
            </h3>
            <p className='lg:text-xl'>
              Our project writing services offer professional assistance in
              preparing high-quality project proposals, reports and research
              papers.
            </p>
            <Link
              href={`/services/geological-services`}
              className='w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
            >
              Details
              <ArrowRightIcon aria-hidden='true' />
            </Link>
          </li>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>Field Mapping</h3>
            <p className='lg:text-xl'>
              Our field mapping services combine fieldwork expertise with
              advanced mapping technologies to facilitate accurate geological
              surveys.
            </p>
            <Link
              href={`/services/geological-services`}
              className='w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
            >
              Details
              <ArrowRightIcon aria-hidden='true' />
            </Link>
          </li>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>
              Software Training
            </h3>
            <p className='lg:text-xl'>
              Our software training programs provide hands-on instruction in
              popular geological software incliding ArcGis, Petrel and Surfer.
            </p>
            <Link
              href={`/services/geological-services`}
              className='w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
            >
              Details
              <ArrowRightIcon aria-hidden='true' />
            </Link>
          </li>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>
              Equipment sales
            </h3>
            <p className='lg:text-xl'>
              We offer a comprehensive selection of high quality geological
              equipments to support fieldwork, research, and exploration
              activities.
            </p>
            <Link
              href={`/services/geological-services`}
              className='w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
            >
              Details
              <ArrowRightIcon aria-hidden='true' />
            </Link>
          </li>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>
              Geopysical survey
            </h3>
            <p className='lg:text-xl'>
              Our geophysical survey services utilize state-of-the-art equipment
              to conduct non-invasive subsurface investigations
            </p>
            <Link
              href={`/services/geological-services`}
              className='w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
            >
              Details
              <ArrowRightIcon aria-hidden='true' />
            </Link>
          </li>
        </ul>
      </section>
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='text-2xl lg:text-4xl font-bold mb-16'>Products</h2>
        <ul className='grid gap-8 lg:gap-32 mt-5 grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))]'>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>
              Geological Services
            </h3>
            <p className='lg:text-xl'>
              Our geological services encompass a wide range of expertise
              including geological mapping, mineral exploration, and site
              characterization.
            </p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-accent w-fit rounded-md'
            >
              <span className='uppercase font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                Details
              </span>
              <span className='absolute top-0 left-0 w-full h-full bg-accent origin-left group-hover:origin-right group-hover:scale-x-0 transition duration-300'></span>
            </button>
          </li>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>
              Research Assistance
            </h3>
            <p className='lg:text-xl'>
              Our project writing services offer professional assistance in
              preparing high-quality project proposals, reports and research
              papers.
            </p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-accent w-fit rounded-md'
            >
              <span className='uppercase font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                Details
              </span>
              <span className='absolute top-0 left-0 w-full h-full bg-accent origin-left group-hover:origin-right group-hover:scale-x-0 transition duration-300'></span>
            </button>
          </li>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>Field Mapping</h3>
            <p className='lg:text-xl'>
              Our field mapping services combine fieldwork expertise with
              advanced mapping technologies to facilitate accurate geological
              surveys.
            </p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-accent w-fit rounded-md'
            >
              <span className='uppercase font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                Details
              </span>
              <span className='absolute top-0 left-0 w-full h-full bg-accent origin-left group-hover:origin-right group-hover:scale-x-0 transition duration-300'></span>
            </button>
          </li>
        </ul>
      </section>
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <div>
          <h3 className='text-2xl lg:text-4xl font-bold mb-10'>Powered by</h3>
          <div className='grid grid-cols-2 gap-20'>
            <div>
              <Image src={geohub} alt='partners log' className='w-[150px]' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
