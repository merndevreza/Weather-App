import heartIcon from "../../assets/heart.svg";
const Favorites = ({onToggle}) => {
  return (
    <button className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all" onClick={onToggle}>
      <img src={heartIcon} alt="Favorite Icon" />
      <span>Favorite Locations</span>
    </button>
  );
};

export default Favorites;
