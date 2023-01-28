import { useLoaderData } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";

export const loader = async ({ params}) => {
  const {guitarUrl} = params;
  const guitar = await getGuitar(guitarUrl)
  
  return guitar.data[0].attributes
}

const Guitar = () => {

  const guitar = useLoaderData()
  console.log(guitar)
  return (
    <div>$guitarUrl</div>
  )
}

export default Guitar;