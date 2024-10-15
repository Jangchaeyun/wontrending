import React, { useEffect } from "react";
import { Avatar } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { getUserAssets } from "@/State/Asset/Action";

const Portfolio = () => {
  const dispatch = useDispatch();
  const { asset } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUserAssets(localStorage.getItem("jwt")));
  }, []);
  return (
    <div className="px-5 lg:p-20">
      <h1 className="font-bold text-3xl pb-5">포트폴리오</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">자산</TableHead>
            <TableHead>가격</TableHead>
            <TableHead>개수(주)</TableHead>
            <TableHead>평가 손익</TableHead>
            <TableHead>수익률(%)</TableHead>
            <TableHead>평가 금액</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {asset.userAssets.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={item.coin.image} />
                </Avatar>
                <span>{item.coin.name}</span>
              </TableCell>
              <TableCell>{item.coin.symbol.toUpperCase()}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.coin.price_change_24h}</TableCell>
              <TableCell>{item.coin.price_change_percentage_24h}</TableCell>
              <TableCell className="text-right">
                {item.coin.total_volume.toLocaleString()}₩
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
