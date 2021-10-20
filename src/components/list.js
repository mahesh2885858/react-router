import React from "react";

function list(props) {
  return (
    <>
      {props.names.map((item) => {
        return (
          <li key={item.id}>
            {item.name} {item.dateOfBirth} Age:{item.difference}
          </li>
        );
      })}
    </>
  );
}

export default list;
