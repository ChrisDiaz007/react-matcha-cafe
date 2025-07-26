import "./CafeList.css";
import Cafe from "../Cafe/Cafe";

// rsc + Tab ===? give a React component

const CafeList = ({ cafeDatas }) => {

  return (
    <div className="cafe-list">
      { cafeDatas.map((cafeData) => <Cafe key={cafeData.title} cafeData={cafeData} /> ) }
    </div>
  );
};

export default CafeList;
