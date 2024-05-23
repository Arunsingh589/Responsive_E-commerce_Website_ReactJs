import React from 'react';

const ProgressBar = ({ progress }) => {
  const steps = ['Processing', 'Dispatched', 'Delivered'];

  return (
    <div className="flex justify-between items-center mb-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center relative">
          <div className={`w-8 h-8 rounded-full ${progress >= index ? 'bg-green-500' : 'bg-blue-500'} flex items-center justify-center text-white font-bold`}>
            {index + 1}
          </div>
          <span className="mt-2 text-sm font-semibold">{step}</span>
          {index < steps.length - 1 && (
            <div className={`w-16 h-1 bg-green-500 mt-4 relative`}>
              <div className={`absolute top-0 left-0 w-full h-full ${progress > index ? 'bg-green-500' : 'bg-blue-500'}`} style={{ width: `${progress > index ? '100%' : '0'}` }}></div>
            </div>
          )}
          {index > 0 && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-500 mt-4" style={{ visibility: `${progress > index ? 'visible' : 'hidden'}` }}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;



// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// // ProgressBar Component
// const ProgressBar = ({ progress }) => {
//   const stages = ["Processing", "Dispatched", "Delivered"];
//   return (
//     <div className="mb-4">
//       <div className="relative pt-1">
//         <div className="flex mb-2 items-center justify-between">
//           <div>
//             <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
//               {stages[progress]}
//             </span>
//           </div>
//           <div className="text-right">
//             <span className="text-xs font-semibold inline-block text-blue-600">
//               {((progress + 1) / stages.length) * 100}%
//             </span>
//           </div>
//         </div>
//         <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
//           <div
//             style={{ width: `${((progress + 1) / stages.length) * 100}%` }}
//             className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };
