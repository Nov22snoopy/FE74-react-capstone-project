import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getChairList } from "../../store/quanLyDatVe/thunkAction";
import ChairList from "./ChairList";
import ResultBooking from "./ResultBooking";
const Booking = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChairList());
  }, [dispatch]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-7 col-sm-12">
          <h1 className="text-center">DAT VE XEM PHIN CYBERLEARN.VN</h1>
          <div className="screen bg-black  w-3/4 m-auto p-2 ">
            SCREEN
          </div>
            <ChairList />
        </div>
        <div className="col-xl-5 col-sm-12">
          <ResultBooking/>
        </div>
      </div>
    </div>
  );
};

export default Booking;
