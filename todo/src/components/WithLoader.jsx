import axios from 'axios';
import { useEffect, useState } from 'react';

export default function WithLoader(Component, url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async() => {
      const response = await axios.get(url);
      const data = await response.data;

      setData(data);
    }

    getData();

  }, [data.length, url]);

  const cb = (props) => {
    if (!data) {
      return <><div>Loading...</div></>;
    }

    return <Component {...props} data={data} />;
  }

  return cb;
}