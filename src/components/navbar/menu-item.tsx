const MenuItem = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className='group flex flex-col items-center justify-center'>
      <a
        href={`#${href}`}
        className='duration-250 transition-all group-hover:underline group-hover:underline-offset-4'
      >
        {title}
      </a>
    </div>
  );
};

export default MenuItem;
