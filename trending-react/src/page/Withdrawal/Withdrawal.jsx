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
import { getWithdrawalHistory } from "@/State/Withdrawal/Action";

const Withdrawal = () => {
  const dispatch = useDispatch();
  const { wallet, withdrawal } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getWithdrawalHistory(localStorage.getItem("jwt")));
  }, []);
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
          {withdrawal.history.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>{new Date(item.date).toLocaleDateString()}</p>
              </TableCell>
              <TableCell>Bank</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell className="text-right">{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;
