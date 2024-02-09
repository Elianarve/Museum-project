// import React, { useState, useEffect } from 'react';
// import Data from '../../server/db.json';

// // const Animal = () => {
// //   const [data, setData] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(Data);

// //         if (!response.ok) {
// //           throw new Error('Error al obtener los datos');
// //         }

// //         const result = await response.json();

// //         setData(result);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error:', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []); 

// //   return (
// //     <div>
// //       {loading ? (
// //         <p>Cargando...</p>
// //       ) : (
// //         <div>
// //           <p>Datos de la API: {JSON.stringify(data.name)}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// //  };

// // export default Animal;

// const Animal = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   document.getElementById('animal');
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Cambiado de fetch(Data) a simplemente referenciar el objeto Data directamente
//         setData(Data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); 

//   return (
//     <div>
//       {loading ? (
//         <p>Cargando...</p>
//       ) : (
//         <div>
//           {/* Accede directamente a las propiedades del objeto Data */}
//           <p dangerouslySetInnerHTML={{ __html: `Datos de la API: ${Data.name}` }} />
//           {/* <p>Datos de la API: {JSON.stringify(Data.name)}</p> */}
//         </div>
//       )}
//     </div>
//   );
//  };

// export default Animal;