/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";
import { v4 as uuidv4 } from "uuid";

import ItemList from "./ItemList";

const ShowItem = () => {
  const [inputs, dispatch] = useContext(StateContext);

  return Object.keys(inputs).length === 0 && inputs.constructor === Object
    ? " "
    : inputs.slice(1).map((person) => (
        <ItemList
          person={person}
          key={uuidv4()}
          //   onRefresh={() => handleClick}
        />
      ));
};

export default ShowItem;
