import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowSubFooter = ({ children }) => {
  const [showSubfooter, setShowSubfooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === '/checkout'
      ? setShowSubfooter(false)
      : setShowSubfooter(true);
  }, [location]);

  return <div>{showSubfooter && children}</div>;
};
export default ShowSubFooter;
