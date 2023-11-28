import React, { useContext, useEffect } from 'react';
import { AppContext } from '@/layouts';

const Home: React.FC = () => {
  const context = useContext(AppContext);
  console.log(">>>>>", context)
  useEffect(() => {
    context.siderHandler(false);
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home;