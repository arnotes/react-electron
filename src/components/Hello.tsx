import * as React from "react";
import { execSync } from "child_process";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => {
  const onClick = () => {
    const r = execSync('node --version');
    console.log(r.toString());//
  }
  return <h1>
    Hello from {props.compiler} and {props.framework}!
    <button onClick={onClick}>test</button>
  </h1>;
}