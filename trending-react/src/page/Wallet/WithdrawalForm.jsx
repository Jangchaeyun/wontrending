import { Button } from "@/components/ui/button";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { withdrawalRequest } from "@/State/Withdrawal/Action";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const WithdrawalForm = () => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const { wallet, withdrawal } = useSelector((store) => store);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(withdrawalRequest({ amount, jwt: localStorage.getItem("jwt") }));
    console.log(amount);
  };
  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md bg-slate-100 text-xl font-bold px-5 py-4">
        <p>출금 가능한 잔액</p>
        <p>₩ 9999</p>
      </div>
      <div className="flex flex-col items-center">
        <h1>출금 금액 입력</h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            className="withdrawalInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center"
            placeholder="₩9999"
            type="number"
          />
        </div>
      </div>
      <div>
        <p className="pb-2">계좌번호</p>
        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <img
            className="h-8 w-8"
            src="https://cdn-icons-png.flaticon.com/512/1052/1052854.png"
            alt=""
          />
          <div>
            <p className="text-xl font-bold">
              {withdrawal.paymentDetails?.bankName}
            </p>
            <p className="text-xs">
              {withdrawal.paymentDetails?.accountNumber}
            </p>
          </div>
        </div>
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7 text-xl">
          출금
        </Button>
      </DialogClose>
    </div>
  );
};

export default WithdrawalForm;
