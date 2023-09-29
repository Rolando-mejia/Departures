import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { backend } from '/src/config.js';
import styles from './FlightInfoDepartures.module.css'

const FlightInfoDepartures = () => {


  const { t } = useTranslation();
  
  const [hora, setHora] = useState(new Date());

  const [vuelos, setVuelos] = useState([]);

  const [fechaActual, setFechaActual] = useState(new Date().toISOString().slice(0, 10));

  const currentDate = new Date();



  async function getVuelos () {

    //Trae datos del API
    const datos = await axios.get(`${backend}/api/departuresInfo`);
    setVuelos(datos.data);

    
    /*//Filtro por tipo de tabla
    const vueloSalidas = data;

     // Filtrar por fecha actual
    const vuelosdeldia = vueloSalidas.filter(vuelo => {
    const fechaVuelo = new Date(vuelo.ScheduledDepartures);
    fechaVuelo.setDate(fechaVuelo.getDate()+1);
    return (fechaVuelo.getDate() == currentDate.getDate() && fechaVuelo.getMonth() == currentDate.getMonth() && fechaVuelo.getFullYear() == currentDate.getFullYear() )
  });
    // Filtro por ordenamiento de hora 
    const vueloporHora = vuelosdeldia.sort((a, b) => {
    const horaA = parseInt(a.ScheduleTimeDepartures.replace(':',''));
    const horaB = parseInt(b.ScheduleTimeDepartures.replace(':',''));
    return horaA - horaB;
    });
    //Filtro de vuelos en las proximas 6 horas
    const now = new Date().getHours();
    const vuelos6horas = vueloporHora.filter(vuelo => {
    const [hora, minutos, segundos] = vuelo.ScheduleTimeDepartures.split(':');
    const diferencia = Math.abs(now - parseInt(hora));
    return diferencia <= 6 && diferencia >= 0;
    });
    
    
    setVuelos(vuelos6horas);
    setHora(new Date);*/
    }
    
    
   useEffect(() => { 
      const intervalo = setInterval(() => {
        getVuelos();
      }, 5000);
      return () => clearInterval(intervalo);
    }, [] )


  return (
    <div>
    <table className={styles.FlightInfoDepartures}>
      <thead>
        <tr>
            <th>{t('Aerolinea')}</th>
            <th>{t('Vuelo')}</th>
            <th>{t('Destino')}</th>
            <th>{t('Programado')}</th>
            <th>{t('Estimado')}</th>
            <th>{t('Puerta')}</th>
            <th>{t('Estado')}</th>
        </tr>
      </thead>

      <tbody>
        {vuelos.map((vuelo, index) => { 
        return <tr key={index}>
        <td>
          <a>
            <img
               alt=""
               src= {`${backend}${vuelo.idAirline.logoAirline}`}
               width="200px"
               height="50px"
               className="d-inline-block align-top"
            />
          </a>
          
        </td>
        <td>{vuelo.FlightCode}</td>
          <td className={styles.fromColor}>{vuelo.idAirportFrom.nombreAirportFrom}</td>
          <td>{vuelo.ScheduleTimeDepartures.slice(0,5)}</td>
          <td>{vuelo.EstimatedTimeDepartures.slice(0,5)}</td>
          <td>{vuelo.idGateNumber.nombreGateNumber}</td>
          <td>{t(vuelo.idStatus.nombreStatus)}</td>
        </tr>
       } ) }
      </tbody>
    </table>
    </div>
  )
}

export default FlightInfoDepartures