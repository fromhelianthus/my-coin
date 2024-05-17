import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { isDarkAtom } from "./atoms";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "../theme";

interface IHistorical {
  time_open: number;
  open: string;
  high: string;
  low: string;
  close: string;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {

  const isDark = useRecoilValue(isDarkAtom);
  const theme = isDark ? darkTheme : lightTheme; // 현재 테마를 선택합니다.

  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: Array.isArray(data)
                ? data.map((price) => ({
                    x: new Date(price.time_open * 1000),
                    y: [
                      parseFloat(price.open),
                      parseFloat(price.high),
                      parseFloat(price.low),
                      parseFloat(price.close),
                    ],
                  }))
                : [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            xaxis: {
              type: "datetime",
              labels: {
                format: "dd MMM",
                style: {
                  colors: theme.textColor,
                },
              },
              axisBorder: {
                show: true,
                color: theme.textColor,
              },
              axisTicks: {
                show: true,
                color: theme.textColor,
              },
            },
            yaxis: {
              labels: {
                style: {
                  colors: theme.textColor,
                },
                formatter: function (val) {
                  return val.toFixed(3);
                },
              },
              axisBorder: {
                show: true,
                color: theme.textColor,
              },
              axisTicks: {
                show: true,
                color: theme.textColor,
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#ac0710',
                  downward: '#125aac',
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;