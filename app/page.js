'use client';

import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ToggleMessage from './components/ToggleMessage';

export default function HomePage() {
  return (
    <>
     <h1 className="title">Welcome to My Front-End App</h1>
      <Welcome name="Ryan" />
      <Counter />
      <ToggleMessage />
    </>
  );
}
