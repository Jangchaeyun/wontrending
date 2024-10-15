import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAssetDetails } from "@/State/Asset/Action";
import { payOrder } from "@/State/Order/Action";
import { getUserWallet } from "@/State/Wallet/Action";
import { DotIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TreadingForm = () => {
  const [orderType, setOrderType] = useState("");
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { coin, wallet, asset } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const amount = e.target.value;
    setAmount(amount);
    const volume = calculateBuyCost(
      amount,
      coin.coinDetails.market_data.current_price.kwd
    );
    console.log(volume);
    setQuantity(volume);
  };

  const calculateBuyCost = (amount, price) => {
    let volume = amount / price;

    let decimalPlaces = Math.max(2, price.toString().split(".")[0].length);

    return volume.toFixed(decimalPlaces);
  };

  useEffect(() => {
    dispatch(getUserWallet(localStorage.getItem("jwt")));
    dispatch(
      getAssetDetails({
        coinId: coin.coinDetails.id,
        jwt: localStorage.getItem("jwt"),
      })
    );
  }, []);

  const handleBuyCrypto = () => {
    dispatch(
      payOrder({
        jwt: localStorage.getItem("jwt"),
        amount,
        orderData: {
          coinId: coin.coinDetails?.id,
          quantity,
          orderType,
        },
      })
    );
  };
  return (
    <div className="space-y-10 placeholder-opacity-55">
      <div>
        <div className="flex gap-4 items-center justify-between">
          <Input
            className="py-7 focus:outline-none"
            placeholder="사용할 돈 입력..."
            onChange={handleChange}
            type="number"
            name="amount"
          />
          <div>
            <p className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">
              {quantity}
            </p>
          </div>
        </div>
        {false && (
          <h1 className="text-red-600 text-center pt-4">
            구매할 지갑 잔액이 부족합니다.
          </h1>
        )}
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <Avatar>
            <AvatarImage src={coin.coinDetails.image.large} />
          </Avatar>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p>{coin.coinDetails.symbol.toUpperCase()}</p>
            <DotIcon className="text-gray-400" />
            <p className="text-gray-400">{coin.coinDetails.name}</p>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-xl font-bold">
              ₩{" "}
              {coin.coinDetails?.market_data.current_price.kwd.toLocaleString()}
            </p>
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
        <p>{orderType == "BUY" ? "사용 가능한 돈" : "사용 가능한 수량"}</p>
        <p>
          {orderType == "BUY"
            ? "₩" + wallet.userWallet?.balance.toLocaleString()
            : asset.assetDetails?.quantity || 0}
        </p>
      </div>
      <div>
        <Button
          onClick={handleBuyCrypto}
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
