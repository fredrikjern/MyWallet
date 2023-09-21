import { useDispatch, useSelector } from "react-redux";
import { getRandomUser } from "../redux/nameSlice";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Wallet } from "../routes/Wallet";
import Root from "../routes/Root";
import AddCard from "../routes/AddCard";

export const RouteLoader = () => {
  const fullName = useSelector((state) => state.name);

  const dispatch = useDispatch();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          index
          element={<Wallet />}
          loader={async () => {
            if (fullName === "") return dispatch(getRandomUser());
            // Denna kan bara köras inne i en React component
            return false;
          }}
        />
        <Route path="/addCard" element={<AddCard />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
