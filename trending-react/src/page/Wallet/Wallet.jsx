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
  UpdateIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
import { DollarSign, WalletIcon } from "lucide-react";
import React, { useEffect } from "react";
import TopupForm from "./TopupForm";
import WithdrawalForm from "./WithdrawalForm";
import TransferForm from "./TransferForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  depositMoney,
  getUserWallet,
  getWalletTransactions,
} from "@/State/Wallet/Action";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Wallet = () => {
  const dispatch = useDispatch();
  const { wallet } = useSelector((store) => store);
  const query = useQuery();
  const orderId = query.get("order_id");
  const paymentId = query.get("payment_id");
  const navigate = useNavigate();

  useEffect(() => {
    handleFetchUserWallet();
    handleFetchWalletTransaction();
  }, []);

  useEffect(() => {
    if (orderId) {
      dispatch(
        depositMoney({
          jwt: localStorage.getItem("jwt"),
          orderId,
          paymentId,
          navigate,
        })
      );
    }
  }, [orderId, paymentId]);

  const handleFetchUserWallet = () => {
    dispatch(getUserWallet(localStorage.getItem("jwt")));
  };

  const handleFetchWalletTransaction = () => {
    dispatch(getWalletTransactions({ jwt: localStorage.getItem("jwt") }));
  };
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
                    <p className="text-gray-500 text-sm">
                      #{wallet.userWallet?.id}
                    </p>
                    <CopyIcon
                      size={12}
                      className="cursor-pointer hover:text-slate-600"
                    />
                  </div>
                </div>
              </div>
              <div>
                <ReloadIcon
                  onClick={handleFetchUserWallet}
                  className="w-6 h-6 cursor-pointer hover:text-gray-400"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-2xl font-semibold">
                ₩ {wallet.userWallet?.balance}
              </span>
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
        <div className="py-5 pt-10">
          <div className="flex gap-2 items-center pb-5">
            <h1 className="text-2xl font-semibold">기록</h1>
            <UpdateIcon className="h-7 w-7 p-0 cursor-pointer hover:text-gray-400" />
          </div>

          <div className="space-y-5">
            {[1, 1, 1, 1, 1, 1, 1].map((item, i) => (
              <div key={i}>
                <Card className="px-5 flex justify-between items-center p-2">
                  <div className="flex items-center gap-5">
                    <Avatar>
                      <AvatarFallback>
                        <ShuffleIcon className="" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h1>자산 구매</h1>
                      <p className="text-sm text-gray-500">2024-10-08</p>
                    </div>
                  </div>
                  <div>
                    <p className={`text-green-500`}>1234 ₩</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
