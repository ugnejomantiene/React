import Form from './komponentai/Form';
import SignIn from './komponentai/SignIn';
import { useState } from 'react';

const App = () => {
  const [arPrisijunges, setArPrisijunges] = useState(false);

  return (
    <>
      {
        arPrisijunges ? 
        "Prisijunges" : 
        <SignIn 
          prijungti={setArPrisijunges}
        />
      }
      <hr />
      <Form />
    </>
  );
}

export default App;