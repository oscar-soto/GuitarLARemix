import { getGuitar } from "~/models/guitars.server"

export const loader = async () => {
  const guitars = await getGuitar()
  
  return guitars
}

export const Tienda = () => {
  return (
    <div>tienda</div>
  )
}

export default Tienda;