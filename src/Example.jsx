import PropTypes from "prop-types";
import { useEffect, useState, memo, useCallback } from "react";
import { getChars } from "./apis";

const Character = ({ name, imageUrl, index, addToFav }) => {
  return (
    <div style={{ padding: 8, border: "1px solid", margin: 8, flexShrink: 0 }}>
      {console.log("rendering index", index)}
      <img
        style={{ height: 200, width: 300, objectFit: "contain" }}
        alt={name}
        src={imageUrl}
      />
      <h2>{name}</h2>
      <button onClick={() => addToFav({ name, imageUrl })}>Add To Fav</button>
    </div>
  );
};

Character.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  index: PropTypes.number,
  addToFav: PropTypes.func,
  visibleNameFn: PropTypes.func,
};

const MemizedChar = memo(Character);

const Example = () => {
  const [chars, setChars] = useState([]);
  const [page, setPage] = useState(1);
  const [favs, setFavs] = useState([]);

  const loadChars = async () => {
    const { data } = await getChars(page);

    setChars([...chars, ...data]);
  };

  const index = 1;
  const name = "Sanjay";

  const visibleNameFn = (index, name) => {
    return `${index}. ${name}`;
  };

  const visiblename = visibleNameFn(index, name);

  const addFavorites = useCallback((obj) => {
    setFavs([...favs, obj]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = async () => {
    setPage(page + 1);
  };

  useEffect(() => {
    loadChars();
  }, [page]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {chars.map((ch, i) => (
          <MemizedChar
            key={ch["name"]}
            index={i}
            name={visiblename}
            imageUrl={ch.imageUrl}
            addToFav={addFavorites}
          />
        ))}
      </div>
      <button onClick={loadMore}>Load More</button>
    </>
  );
};

export default Example;
