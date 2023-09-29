import { useTranslation } from 'react-i18next'
import Header from '../../components/Layout/Header'
import FlightInfoDepartures from '../../components/Layout/FlightInfoDepartures/FlightInfoDepartures';

const DeparturesPage = () => {

  const {t} = useTranslation();
  return (
    <>
     <Header title={t('SALIDAS')} /> 
    
     <FlightInfoDepartures />
    </>
  )
}

export default DeparturesPage