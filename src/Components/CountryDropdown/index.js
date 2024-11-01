import React, { useContext, useEffect, useMemo, useState } from 'react';
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch, IoIosClose } from "react-icons/io";
import Slide from '@mui/material/Slide';
import { FixedSizeList as List } from 'react-window';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModel, setisOpenModel] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('Select'); 
  const context = useContext(MyContext);

  useEffect(() => {
    if (isOpenModel && context.stateList.length === 0) {
      context.getState();
    }
  }, [isOpenModel, context]);

  const filteredCities = useMemo(() => {
    return searchTerm
      ? context.stateList.filter((item) =>
          item.City.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : context.stateList;
  }, [searchTerm, context.stateList]);

  const Row = ({ index, style }) => (
    <div style={style}>
      <Button
        onClick={() => {
          setSelectedCity(filteredCities[index].City); 
          setisOpenModel(false);
        }}
        style={{
          margin: '10px 0px',
          width: '100%', 
          color: '#000',
          justifyContent: 'flex-start' 
        }}
      >
        {filteredCities[index].City}
      </Button>
    </div>
  );

  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{selectedCity}</span> 
        </div>
        <span className="ms-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog 
        open={isOpenModel}
        TransitionComponent={Transition}
        onClose={() => setisOpenModel(false)}
        className="locationModel"
      >
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setisOpenModel(false)}>
          <IoIosClose />
        </Button>

        <div className="headerSearch w-100">
          <input 
            type="text" 
            placeholder="Search for area..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>

        <div style={{ height: '400px', width: '100%' }}>
          <List
            height={400}
            itemCount={filteredCities.length}
            itemSize={50}
            width="100%"
          >
            {Row}
          </List>
        </div>

        {filteredCities.length === 0 && <p>No results found</p>}
      </Dialog>
    </>
  );
};

export default CountryDropdown;
