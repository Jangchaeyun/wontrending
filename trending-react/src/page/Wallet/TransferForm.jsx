import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const TransferForm = () => {
  const [formData, setFormData] = useState({
    amount: "",
    walletId: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">금액 입력</h1>
        <Input
          name="amount"
          onChange={handleChange}
          value={formData.amount}
          className="py-7"
          placeholder="₩ 9999"
        />
      </div>
      <div>
        <h1 className="pb-1">지갑 ID</h1>
        <Input
          name="walletId"
          onChange={handleChange}
          value={formData.walletId}
          className="py-7"
          placeholder="#ADER455"
        />
      </div>
      <div>
        <h1 className="pb-1">목적</h1>
        <Input
          name="purpose"
          onChange={handleChange}
          value={formData.purpose}
          className="py-7"
          placeholder="친구에게 줄 선물..."
        />
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7">
          보내기
        </Button>
      </DialogClose>
    </div>
  );
};

export default TransferForm;
