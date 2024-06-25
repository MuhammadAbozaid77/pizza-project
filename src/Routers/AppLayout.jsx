import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/layouts/Header";
import CartOverview from "../features/cart/CartOverview";
import SpinnerLoading from "../components/ui/spinnerLoading/SpinnerLoading";

//
export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  //
  return (
    <>
      {isLoading && <SpinnerLoading />}
      <div >
        <div>
          <Header />
        </div>
        <div>
          <main>
            <Outlet />
          </main>
        </div>
        <div>
          <CartOverview />
        </div>
      </div>
    </>
  );
}
