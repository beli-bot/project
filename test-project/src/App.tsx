import { useContext, useState, useEffect } from 'react';
import { ServiceContext } from './ServiceContext';

function App() {
  const dummyService = useContext(ServiceContext);
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (dummyService) {
        const result = await dummyService.dummyMethod();
        setData(result.data);
      }
      setLoading(false);
    };

    fetchData();
  }, [dummyService]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return <div>{data && <p>{data}</p>}</div>;
}

export default App;
