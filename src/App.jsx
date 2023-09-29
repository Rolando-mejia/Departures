
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React, { useEffect } from 'react';
import i18n from './i18n';
import DeparturesPage from './pages/DeparturesPage';



const App = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    }, 5 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <DeparturesPage />
    {/* <GridExample /> */}
    </>
    );
};

export default App;
