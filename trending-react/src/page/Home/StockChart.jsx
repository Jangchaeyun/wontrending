import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "시계열 (일일)",
    lable: "1일",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "주간 시계열",
    lable: "1주",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "월간 시계열",
    lable: "1달",
    value: 30,
  },
];

const StockChart = () => {
  const [activeLable, setActiveLable] = useState("1일");

  const searies = [
    {
      data: [
        [1725588058805, 17267.509893896862],
        [1725592682900, 17330.9601710693],
        [1725596347264, 17318.487083530486],
        [1725600211476, 17258.411069060574],
        [1725603034432, 17236.708299757305],
        [1725606656930, 17211.957160449612],
        [1725610438263, 17041.88302605566],
        [1725613302670, 17037.94516982508],
        [1725617675334, 17083.176600418854],
        [1725621646038, 17115.99471426927],
        [1725625292661, 17067.97558777615],
        [1725628670725, 17338.644740031737],
        [1725632665512, 16901.09755571569],
        [1725635934484, 16639.96081267011],
        [1725638620890, 16494.039613867437],
        [1725643404577, 16587.56378359049],
        [1725646492556, 16418.754532578587],
        [1725649971101, 16415.933959423928],
        [1725653092244, 16336.832038780489],
        [1725657945348, 16278.909676910454],
        [1725661568749, 16431.259482595244],
        [1725664277062, 16399.846341595236],
        [1725667409568, 16477.567890325852],
        [1725671071148, 16460.823206128796],
        [1725674719714, 16428.639208484412],
        [1725678936881, 16434.28670307658],
        [1725682041612, 16432.052148702845],
        [1725685737457, 16499.88082661533],
        [1725689430042, 16543.732458530652],
        [1725692776981, 16575.588686876003],
        [1725696329138, 16570.927103509006],
        [1725699990058, 16588.103983259458],
        [1725704175798, 16573.95140472945],
        [1725708023563, 16604.048056146494],
        [1725710861731, 16610.89032398601],
        [1725714267656, 16649.682137539075],
        [1725718869660, 16662.334012339208],
        [1725722658763, 16674.303034163007],
        [1725724856547, 16727.290119968962],
        [1725728549194, 16634.97182012862],
        [1725733249380, 16524.27724321107],
        [1725736173390, 16551.496763993855],
        [1725739687046, 16587.926203368497],
        [1725743630979, 16490.361892262536],
      ],
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#FF8200"],
    markers: {
      colors: ["#FFA01E"],
      strokeColor: "#FFA01E",
      strokeWidth: 1,
      strokeDashArray: 0,
      style: "hollow",
    },
    tooltip: {
      theme: "light",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityForm: 0.7,
        opaciryTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#FF8C0A",
      strokeDashArray: 4,
      show: true,
    },
  };

  const handleActiveLable = (value) => {
    setActiveLable(value);
  };
  return (
    <div>
      <div className="space-x-3">
        {timeSeries.map((item) => (
          <Button
            variant={activeLable == item.lable ? "" : "outline"}
            onClick={() => handleActiveLable(item.lable)}
            key={item.lable}
          >
            {item.lable}
          </Button>
        ))}
      </div>
      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={searies}
          height={450}
          type="area"
        />
      </div>
    </div>
  );
};

export default StockChart;
