import Homepage from "./components/Homepage";
import PlayerDetail from "./components/pages/PlayerDetail";
import Sign_in from "./components/pages/Sign_in";
import Sign_up from "./components/pages/Sign_up";
export const routes = [
  {
    path: "/",
    element: <Homepage />,
    index: true,
  },
  {
    path: "/Sign_in",
    element: <Sign_in />,
    index: false,
  },
  {
    path: "/Sign_up",
    element: <Sign_up />,
    index: false,
  },
  {
    path: "/player-detail/:id",
    element: <PlayerDetail />,
    index: false

  }
];

