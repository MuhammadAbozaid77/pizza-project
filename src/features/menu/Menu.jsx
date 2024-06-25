import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

export async function loader() {
  const menuData = await getMenu();
  return menuData;
}

//
export default function Menu() {
  const data = useLoaderData();

  return (
    <>
      <div>
        <ul>
          {data?.map((pizza, index) => (
            <MenuItem pizza={pizza} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
}
