"use client";
import { Users } from "phosphor-react";
import { Statistic } from "keep-react-demo";

const StatisticComponent = () => {
  return (
    <Statistic showFilter={true} showDollar={true} iconBg="primary">
      <div className="flex items-center gap-4">
        <Statistic.Icon icon={<Users size={32} color="#fff" />} />
        <div>
          <div className="flex items-center gap-2">
            <Statistic.Amount>{7381237}</Statistic.Amount>
            <Statistic.Rate>3.5</Statistic.Rate>
          </div>
          <Statistic.Title>Memebers</Statistic.Title>
        </div>
      </div>
    </Statistic>
  );
};

export default StatisticComponent;
