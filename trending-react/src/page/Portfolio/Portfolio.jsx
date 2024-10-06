import React from "react";
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

const Portfolio = () => {
  return (
    <div className="px-5 lg:p-20">
      <h1 className="font-bold text-3xl">포트폴리오</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">자산</TableHead>
            <TableHead>가격</TableHead>
            <TableHead>유닛</TableHead>
            <TableHead>평가 손익</TableHead>
            <TableHead>수익률(%)</TableHead>
            <TableHead>평가 금액</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1].map((item, index) => (
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
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
