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

const Activity = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl pb-5">활동</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">날짜 & 시간</TableHead>
            <TableHead>페어트레이딩</TableHead>
            <TableHead>산 가격</TableHead>
            <TableHead>판 가격</TableHead>
            <TableHead>주문 타입</TableHead>
            <TableHead>이익/손실</TableHead>
            <TableHead className="text-right">가치</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>2024/10/07</p>
                <p className="text-gray-400">12:16:45</p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>6834455792</TableCell>
              <TableCell>376962336317</TableCell>
              <TableCell>-19129.99</TableCell>
              <TableCell className="">19071.68₩</TableCell>
              <TableCell className="text-right">345</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
