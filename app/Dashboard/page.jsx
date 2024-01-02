// "use client"
// import React, { useState, useEffect } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     contact: '',
//     city: '',
//     message: ''
//   });

//   const [dataList, setDataList] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('/api/data');
//       const data = await response.json();
//       setDataList(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`/api/data/${id}`, { method: 'DELETE' });
//       // After deleting, fetch the updated data
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   };

//   // Rest of the component...

//   return (
//     <div className="container mx-auto p-8">
//       {/* ... (your form code) ... */}

//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Data in Dashboard</h2>
//         <ul>
//           {dataList.map((data) => (
//             <li key={data._id} className="mb-2">
//               {data.name}, {data.contact}, {data.city}, {data.message}
//               <button
//                 className="ml-2 text-red-500"
//                 onClick={() => handleDelete(data._id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
