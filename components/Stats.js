import React from "react";
import CountUp from "react-countup";



const Stats = (props) => {
  return (
    <div className="flex flex-col bg-yellow-200 gap-3 w-auto items-center py-10 font-molengo justify-center">

        <CountUp
          end={props.number}
          duration={2}
          delay={2}
          className="font-semibold text-4xl font-kanit"
          suffix={props.suffix}
        />
        <h5 className="text-2xl text-gray-800">{props.title}</h5>

    </div>
  );
};

export default Stats;
