import React from "react";

interface IAppProps {
  name: String;
}

export const App = ({ name }: IAppProps) => {
  return (
    <div>
      <h1>Reso Components</h1>
      <p>Hello World, {name}!</p>
    </div>
  );
};
