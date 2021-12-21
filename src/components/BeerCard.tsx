import { Beer } from "../types/Beer";

interface BeerProps {
  beerData: Beer
}

export const BeerCard = ({ beerData }: BeerProps) => {
  const { name, price } = beerData;

  return (
    <div>
        <h2>맥주명: {name}</h2>
        <p>가격: {price}</p>
    </div>
  )
}