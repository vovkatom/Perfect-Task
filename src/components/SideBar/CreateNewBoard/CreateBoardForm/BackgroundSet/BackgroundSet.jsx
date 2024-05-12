import { useState } from 'react';
import css from '../BackgroundSet/BackgroundSet.module.css';

const BackgroundSet = ({ bgImages, updateBg }) => {
  const [selectedBg, setSelectedBg] = useState(null);

  //console.log(Object.keys(bgImages));

  const handleBgClick = (selectedBg) => {
    setSelectedBg(selectedBg);
    console.log(selectedBg);
    updateBg(selectedBg);
  };

  //console.log(Object.entries(bgImages));

  const imagesBG = Object.entries(bgImages).map(([key, value]) => (
    <li key={key} className={css.bgItem} onClick={() => handleBgClick(key)}>
      <img
        className={selectedBg === key ? css.imageSelected : css.image}
        src={value}
        alt={value}
      />
    </li>
  ));
  return <ul className={css.list}>{imagesBG}</ul>;
};

export default BackgroundSet;
