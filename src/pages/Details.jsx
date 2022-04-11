import React, { useState } from "react";
import * as S from '../styles/pages/Details'

import { dataItems } from "../services/sliderData";
import Accordion from "../components/Accordion";

const Details = () => {
	const NewItems = dataItems.slice(0, 5)
	const [selected, setSelected] = useState("0");

	const handleToggle = (index) => {
		if (selected === index) return setSelected('0');
		setSelected(index);
	 };

  return (
    <S.DetailsContainer className="accordion">
      {NewItems.map((items, index) => (
        <Accordion 
					key={index} 
					items={items} 
					onToggle={() => handleToggle(index)}
					active={selected === index}
				/>
      ))}
    </S.DetailsContainer>
  );
};

export default Details;