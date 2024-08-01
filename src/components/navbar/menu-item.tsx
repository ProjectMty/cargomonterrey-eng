import Link from 'next/link';

const MenuItem = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className='group flex flex-col items-center justify-center'>
      <Link
        href={`#${href}`}
        className='duration-250 transition-all group-hover:underline group-hover:underline-offset-4'
      >
        {title}
      </Link>
    </div>
  );
};

export default MenuItem;
