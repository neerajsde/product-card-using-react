import "./App.css";
import React, { useState } from 'react';
import InputProductDetails from "./components/InputProductDetails";
import ProductConatiner from "./components/ProductContainer";

const _data = [
  {
    name: "Surf Excel",
    desc: "This is Good",
    date: {
      month: "March",
      year: "2024",
      day: "14",
    },
  },
  {
    name: "Nirma",
    desc: "This is Good",
    date: {
      month: "September",
      year: "2022",
      day: "10",
    },
  },
  {
    name: "Feena",
    desc: "This is Good",
    date: {
      month: "January",
      year: "2023",
      day: "8",
    },
  },
  {
    name: "Wheel",
    desc: "This is Excelent",
    date: {
      month: "June",
      year: "2015",
      day: "25",
    },
  }
];


function App() {
  const [data, updateData] = useState(_data);

  function getInputData(newData) {
    const newDataArray = [...data];
    newDataArray.unshift(newData);
    updateData(newDataArray);
  }
  return (
    <div className="App">
      <InputProductDetails getDataFun={getInputData}></InputProductDetails>
      <ProductConatiner productData={data}></ProductConatiner>
    </div>
  );
}

export default App;
