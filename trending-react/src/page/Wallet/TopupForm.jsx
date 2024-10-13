import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { paymentHandler } from "@/State/Wallet/Action";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TopupForm = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("STRIPE");
  const dispatch = useDispatch();

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    console.log(amount, paymentMethod);
    dispatch(
      paymentHandler({
        jwt: localStorage.getItem("jwt"),
        paymentMethod,
        amount,
      })
    );
  };
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">금액 입력</h1>
        <Input
          onChange={handleChange}
          value={amount}
          className="py-7 text-lg"
          placeholder="₩ 9999"
        />
      </div>
      <div>
        <h1 className="pb-1">결제방법을 선택하세요</h1>
        <RadioGroup
          onValueChange={(value) => handlePaymentMethodChange(value)}
          className="flex"
          defaultValue="STRIPE"
        >
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9"
              value="STRIPE"
              id="r1"
            />
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 w-32">
                <img
                  className="h-9"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/768px-Stripe_Logo%2C_revised_2016.svg.png"
                  alt=""
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button onClick={handleSubmit} className="w-full py-7">
        충전
      </Button>
    </div>
  );
};

export default TopupForm;
