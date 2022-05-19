import React, { useState } from "react";
import UpArrowIcon from '../../icons/UpArrowIcon.svg'
import DownArrowIcon from '../../icons/DownArrowIcon.svg'
import "./styles.css";
function DropDown({ data, setData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");
  const handleOpenHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const getIndex = (key) => {
    return data.findIndex((item) => {
      if (item.key === key) return true;
      else return false;
    });
  };

  const itemClickHandler = (key) => {
    const newData = [...data];
    if (selectedKey) {
      //set the previous selected key to false
      const y = getIndex(selectedKey);
      newData[y] = {
        ...newData[y],
        isSelected: false,
      };
    }

    if (selectedKey !== key) {
      const x = getIndex(key);
      //setting newer values to
      newData[x] = {
        ...newData[x], //setting new selected key to true
        isSelected: true,
      };
      setSelectedKey(key);
    } else {
      
      setSelectedKey("");
    }
    setData(newData);

   
  };

  return (
    <div className="drop">
      <div className={isOpen?"selectedBox":"notSelectedBox"} >
        <div>{selectedKey}</div>
        <div className="iconContainer"><img alt="open or close dropdown" className='arrow' onClick={handleOpenHandler} src={isOpen?UpArrowIcon:DownArrowIcon}/></div>
      </div>
      <div className={isOpen?'items':'itemsHide'}>
        {data.map((item) =>
          !item.isSelected || item.key === selectedKey ? (
            <div
              key={item.key}
              className={`${
                item.key === selectedKey ? "selectedIndex" : "index"
              }`}
              onClick={() => {
                itemClickHandler(item.key);
              }}
            >
              {item.key}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default DropDown;
