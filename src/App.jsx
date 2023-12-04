import { useState } from 'react'
import FormInput from './components/FormInput'
import './App.css'
import Header from './components/Header';

export default function App() {

  const [locationData, setlocationData] = useState(null);

  return (
    <div>

      <Header />
      <FormInput />

    </div>

  );

}