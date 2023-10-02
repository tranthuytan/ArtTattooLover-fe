import {
  Home,
  Newspaper,
} from "icons/solid";

const size = 18;

export const routes = [
  {
    path: "/",
    name: "dashboard",
    icon: <Home width={size} height={size} />,
  },
  {
    divider: true,
    name: 'visualization'
  },
  {
    path: "/blank",
    name: "blank",
    icon: <Newspaper width={size} height={size} />,
  }
];
