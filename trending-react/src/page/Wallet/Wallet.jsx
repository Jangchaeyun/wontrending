import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CopyIcon,
  ReloadIcon,
  ShuffleIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
import { DollarSign, WalletIcon } from "lucide-react";
import React from "react";
import TopupForm from "./TopupForm";
import WithdrawalForm from "./WithdrawalForm";
import TransferForm from "./TransferForm";

const Wallet = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <WalletIcon size={30} />
                <div>
                  <CardTitle className="text-2xl">내 지갑</CardTitle>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-500 text-sm">#A475Ed</p>
                    <CopyIcon
                      size={12}
                      className="cursor-pointer hover:text-slate-600"
                    />
                  </div>
                </div>
              </div>
              <div>
                <ReloadIcon className="w-6 h-6 cursor-pointer hover:text-gray-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-2xl font-semibold">₩ 20000</span>
            </div>
            <div className="flex gap-7 mt-5">
              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover: text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-50 shadow-md">
                    <UploadIcon />
                    <span className="text-sm mt-2">돈 층전</span>
                  </div>
                </DialogTrigger>
                <DialogClose />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>지갑 충전</DialogTitle>
                  </DialogHeader>
                  <TopupForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover: text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-50 shadow-md">
                    <UploadIcon />
                    <span className="text-sm mt-2">출금 </span>
                  </div>
                </DialogTrigger>
                <DialogClose />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>출금 요청</DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover: text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-50 shadow-md">
                    <ShuffleIcon />
                    <span className="text-sm mt-2">전송</span>
                  </div>
                </DialogTrigger>
                <DialogClose />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl">
                      다른 지갑으로 선물
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
