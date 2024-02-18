import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Roadmap = () => {

  const [currId, setCurrId] = useState(localStorage.getItem("CurrId"))

  // useEffect(() => {
  //   const menuItemElement = document.querySelector('.menuItem');
  //   if (menuItemElement) {
  //     menuItemElement.style.marginTop = '13%';
  //     menuItemElement.style.color = 'white';
  //     menuItemElement.style.fontSize = '20px';
  //     menuItemElement.style.textAlign = 'center';
  //   }

    // Move the following block inside the useEffect
    // const menuHomeElement = document.getElementById(currId);
    // if (menuHomeElement) {
    //   menuHomeElement.style.textAlign = 'center';
    //   menuHomeElement.style.width = '90%';
    //   menuHomeElement.style.display = 'block';
    //   menuHomeElement.style.margin = 'auto';
    //   menuHomeElement.style.padding = '4% 0%';
    //   menuHomeElement.style.fontSize = '20px';
    //   menuHomeElement.style.borderRadius = '10px';
    //   menuHomeElement.style.marginTop = '3%';
    //   menuHomeElement.style.cursor = 'pointer';
    //   menuHomeElement.style.backgroundColor = 'var(--material)';
    //   menuHomeElement.style.color = 'white';
    //   menuHomeElement.style.textDecoration = 'none';
    //   menuHomeElement.style.marginTop = '10%';
    // }
  // }, [currId]);

  return (
    <div>
      <Navbar />
      {/* Your remaining JSX for Roadmap component */}
    </div>
  );
};

export default Roadmap;
