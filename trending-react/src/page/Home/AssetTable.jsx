import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AvatarImage } from "@radix-ui/react-avatar";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AssetTable = ({ coin, category }) => {
  const navigate = useNavigate();
  const exchangeRate = 1349;

  return (
    <ScrollArea
      className={`${
        category == "모두" ? "h-[77vh] w-full" : "h-[82vh] w-full"
      }`}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">코인</TableHead>
            <TableHead>식별코드</TableHead>
            <TableHead>거래량</TableHead>
            <TableHead>시가총액</TableHead>
            <TableHead>24H</TableHead>
            <TableHead className="text-right">현재 가격</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coin.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell
                onClick={() => navigate(`/market/${item.id}`)}
                className="font-medium flex items-center gap-2"
              >
                <Avatar className="-z-50">
                  <AvatarImage src={item.image} />
                </Avatar>
                <span>{item.name}</span>
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.total_volume}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>{item.price_change_percentage_24h}</TableCell>
              <TableCell className="text-right">
                {(item.current_price * exchangeRate).toLocaleString()}₩
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default AssetTable;
