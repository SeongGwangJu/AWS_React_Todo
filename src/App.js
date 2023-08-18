import logo from './logo.svg';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import Reset from 'reset';
import { Global } from '@emotion/react';
import * as S from "./styles/common";
function App() {
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon} /> 
      <MainLayout>

      </MainLayout>
    </>
  );
}

export default App;
