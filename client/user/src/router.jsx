import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
 import Turf from "./components/turf/Turf";
import TurfDetails from "./components/turf/TurfDetails";
import BecomeOwner from "./features/becomeOwner/BecomeOwner";
import ProtectedLayout from "./layouts/ProtectedLayout";
// import Reservation from "./pages/Reservation";
import Reservation from "./components/Reservation";
import TurfBookingHistory from "./components/turf/TurfBookingHistory";
import TurfBookingHistorySkeleton from "./components/ui/TurfBookingHistorySkeleton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <div>Error</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "turfs",
        element: <Turf />,
      },
      {
        path: "turf/:id",
        element: <TurfDetails />,
      },
    ],
  },
  {
    path: "/auth",
    element: <ProtectedLayout />,
    // errorElement: <div>Error</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "turfs",
        element: <Turf />,
      },
      {
        path: "turf/:id",
        element: <TurfDetails />,
      },

      {
        path: "reserve/:id",
        // element: <Reservation />,
        element: <Reservation />,
      },
      {
        path: "become-owner",
        element: <BecomeOwner />,
      },
      {
        path:"booking-history",
        // element: <TurfBookingHistory />
        element: <TurfBookingHistorySkeleton />
      }
    ],
  },
]);

export default router;
