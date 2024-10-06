import { Avatar } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const AssetTable = () => {
  return (
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
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>6834455792</TableCell>
              <TableCell>376962336317</TableCell>
              <TableCell>-19129.99</TableCell>
              <TableCell className="text-right">19071.68₩</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default AssetTable;
