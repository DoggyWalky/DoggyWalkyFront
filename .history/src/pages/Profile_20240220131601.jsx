import React from 'react';

export default function Profile() {
  return <>
  <Banner />
  <Introduce />
</>;
}
import React from 'react';
import Introduce from '../components/Introduce';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <>
      <Banner />
      <Introduce />
    </>
  );
}
