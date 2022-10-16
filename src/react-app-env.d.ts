/// <reference types="react-scripts" />
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

type Todo = {
  id: number | null;
  name: string;
  description: string;
  checked: boolean;
};
