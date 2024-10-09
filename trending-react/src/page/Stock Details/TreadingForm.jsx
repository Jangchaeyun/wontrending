import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const TreadingForm = () => {
  const [orderType, setOrderType] = useState("");
  const handleChange = () => {};
  return (
    <div className="space-y-10 placeholder-opacity-55">
      <div>
        <div className="flex gap-4 items-center justify-between">
          <Input
            className="py-7 focus:outline-none"
            placeholder="개수(주) 입력..."
            onChange={handleChange}
            type="number"
            name="amount"
          />
          <div>
            <p className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">
              4563
            </p>
          </div>
        </div>
        {true && (
          <h1 className="text-red-600 text-center pt-4">
            구매할 지갑 잔액이 부족합니다.
          </h1>
        )}
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <Avatar>
            <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" />
          </Avatar>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p>BTC</p>
            <DotIcon className="text-gray-400" />
            <p className="text-gray-400">비트코인</p>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-xl font-bold">₩ 6554</p>
            <p className="text-red-600">
              <span>-19129.99</span>
              <span>(-0.29803%)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>주문 유형</p>
        <p>시장 주문</p>
      </div>
      <div className="f,ex items-center justify-between">
        <p>{orderType == "BUY" ? "사용 가능한 케이스" : "사용 가능한 수량"}</p>
        <p>{orderType == "BUY" ? 9000 : 23.08}</p>
      </div>
      <div>
        <Button
          className={`w-full py-6 ${
            orderType == "SELL" ? "bg-red-600 text-white" : ""
          }`}
        >
          {orderType}
        </Button>
        <Button
          variant="link"
          className="w-full mt-5 text-xl"
          onClick={() => setOrderType(orderType == "BUY" ? "SELL" : "BUY")}
        >
          {orderType == "BUY" ? "또는 판매" : "또는 구매"}
        </Button>
      </div>
    </div>
  );
};

export default TreadingForm;
