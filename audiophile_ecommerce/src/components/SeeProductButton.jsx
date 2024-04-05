import { Link } from 'react-router-dom';

const SeeProductButton = ({ classes, to }) => {
  return (
    <Link
      to={`/${to}`}
      className={`text-xs tracking-[2px] w-fit transition-all delay-100 ${classes} font-semibold px-7 py-3 sm:text-[1rem] sm:px-10 sm:py-5 lg:px-7 lg:py-3 lg:text-xs`}
    >
      SEE PRODUCT
    </Link>
  );
};
export default SeeProductButton;
