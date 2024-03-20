import { useParams } from 'react-router-dom';

export default function Hero() {
  const { id } = useParams();
  return (
    <div>
      <h1>Hero section</h1>
    </div>
  );
}
