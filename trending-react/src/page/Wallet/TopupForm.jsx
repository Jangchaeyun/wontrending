import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const TopupForm = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("STRIPE");

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">금액 입력</h1>
        <Input
          onChange={handleAmount}
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
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZVxQZ2UYa4aZMO1u_hgQPt-OVvqLq5MnoA&s"
                  alt=""
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default TopupForm;
