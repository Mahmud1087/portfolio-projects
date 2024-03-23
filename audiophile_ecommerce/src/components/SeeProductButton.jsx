import { Link } from 'react-router-dom';

const SeeProductButton = ({ classes }) => {
  return (
    <Link
      className={`text-xs tracking-[2px] w-fit px-7 py-3 transition-all delay-100 ${classes}`}
    >
      SEE PRODUCT
    </Link>
  );
};
export default SeeProductButton;
