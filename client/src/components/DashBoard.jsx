import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';


const DashBoard = () => {
  return (
    <div>
    <Navbar/>
    </div>
  )
}

export default DashBoard


// const BarChart = () => {
//   const chartRef = useRef();

//   useEffect(() => {
//     // Sample data
//     const data = {
//       labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//       datasets: [{
//         label: 'Sample Data',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
//         hoverBorderColor: 'rgba(75, 192, 192, 1)',
//         data: [65, 59, 80, 81, 56, 55],
//       }],
//     };

//     // Chart options
//     const options = {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     };

//     // Get the canvas element using the ref
//     const ctx = chartRef.current.getContext('2d');

//     // Create a bar chart
//     new window.Chart(ctx, {
//       type: 'bar',
//       data: data,
//       options: options,
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Chart.js Example</h1>
//       <canvas ref={chartRef} width="400" height="200"></canvas>
//     </div>
//   );
// };

// export default BarChart;
