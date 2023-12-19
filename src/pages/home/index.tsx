import React, { useContext, useEffect, useCallback, useState, useRef } from 'react';
import { AppContext } from '@/layouts';

const A = ({ onChange }) => {
  console.log(">>>>>>>a render")
  const change = (e) => {
    onChange(e.target.value);
  }

  return (
    <input type="text" onChange={change} />
  )
}



const Home: React.FC = () => {
  const context = useContext(AppContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    context.siderHandler(false);
  }, [])

  const change = () => {
    console.log(">>>>count", count)
    setCount(count + 1)
  }
  console.log(">>>>count3", count)
  const change2 = useCallback(() => {
    console.log(">>>>count2", count)
    setCount(count + 1)
  }, [])

  return (
    <div>Home
      <div>{count}</div>
      <A onChange={change2} />
    </div>
  )
}

export default Home;