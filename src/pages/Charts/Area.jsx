// import React from 'react';
// import { ChartComponent, SeriesCollectionDirective,
// SeriesDirective, Inject, SplineAreaSeries, DateTime,
// Legend } from '@syncfusion/ej2-react-charts';

// import { Header } from '../../components';
// import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy';
// import { useStateContext } from '../../contexts/ContextProvider';

// const Area = () => {
// const { currentMode } = useStateContext();

//   return (

//     <div className="m-4 md:m-10 mt-24 p-10 bg-white
//     dark:bg-secondary-dark-bg rounded-3xl">
//      <Header category="Area" title="Inflation Rate in Percentage" />

//     <ChartComponent
//       id="area-chart"
//       height="420px"
//       primaryXAxiz={areaPrimaryXAxis}
//       primaryYAxiz={areaPrimaryYAxis}
//       chartArea={{border: { width:0 }}}
//       tooltip={{ enable: true }}
//       background={currentMode === 'Dark' ? '#33373E' : '#fff'}
//     >
//       <Inject services={[SplineAreaSeries, DateTime,
//       Legend]} />
//       <SeriesCollectionDirective>
//         {areaCustomSeries.map((item, index) =>
//         <SeriesDirective key={index} {...item} />)}
//       </SeriesCollectionDirective>
//     </ChartComponent> 
//     </div>
     
//   )
// }

// export default Area

import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';

import { ChartsHeader } from '../../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Area" title="Inflation Rate in percentage" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;