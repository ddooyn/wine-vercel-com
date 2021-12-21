import { Wine } from "../types/Wine";

interface WineProps {
  wineData: Wine
}

export const WineCard = ({ wineData }: WineProps) => {
  const { wine, winery, location, image } = wineData;

  return (
    <div>
        <h2>와인명: {wine}</h2>
        <img src={image}></img>
        <p>와이너리: {winery}</p>
        <small>지역: {location}</small>
    </div>
  )
}