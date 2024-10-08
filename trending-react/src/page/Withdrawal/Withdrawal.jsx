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

const Withdrawal = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl pb-5">인출</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">날짜</TableHead>
            <TableHead>방법</TableHead>
            <TableHead>개수(주)</TableHead>
            <TableHead className="text-right">상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>10 8, 2024 6:27</p>
              </TableCell>
              <TableCell>은향 계좌</TableCell>
              <TableCell>376962336317</TableCell>
              <TableCell className="text-right">345</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;
