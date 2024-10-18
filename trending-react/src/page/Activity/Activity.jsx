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
import { getAllOrderForUser } from "@/State/Order/Action";
import { calculateProfite } from "@/State/utils/calculateProfite";

const Activity = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getAllOrderForUser({ jwt: localStorage.getItem("jwt") }));
  }, []);

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
          {order.orders.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>{new Date(item.timestamp).toLocaleDateString()}</p>
                <p className="text-gray-400">
                  {new Date(item.timestamp).toLocaleTimeString()}
                </p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={item.orderItem.coin.image} />
                </Avatar>
                <span>{item.orderItem.coin.name}</span>
              </TableCell>
              <TableCell>{item.orderItem.buyPrice}₩</TableCell>
              <TableCell>{item.orderItem.sellPrice}₩</TableCell>
              <TableCell>{item.orderType}</TableCell>
              <TableCell className="">{calculateProfite(item)}</TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
