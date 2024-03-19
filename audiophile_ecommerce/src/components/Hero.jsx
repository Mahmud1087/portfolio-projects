import { useParams } from 'react-router-dom';

export default function Hero() {
  const { id } = useParams();
  return <div>Hero section</div>;
}
