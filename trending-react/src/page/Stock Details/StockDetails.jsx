import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  DotIcon,
} from "@radix-ui/react-icons";
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TreadingForm from "./TreadingForm";
import StockChart from "../Home/StockChart";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "@/State/Coin/Action";
import { addItemToWatchlist } from "@/State/Watchlist/Action";
import { existInWatchlist } from "@/State/utils/existInWatchlist";
import { getUserWallet } from "@/State/Wallet/Action";

const StockDetails = () => {
  const { watchlist, coin } = useSelector((store) => store);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(
      fetchCoinDetails({ coinId: id, jwt: localStorage.getItem("jwt") })
    );
    dispatch(getUserWallet(localStorage.getItem("jwt")));
  }, [id]);

  const handleAddToWatchlist = () => {
    dispatch(
      addItemToWatchlist({
        coinId: coin.coinDetails?.id,
        jwt: localStorage.getItem("jwt"),
      })
    );
  };

  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div>
            <Avatar>
              <AvatarImage src={coin.coinDetails?.image.large} />
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>{coin.coinDetails?.symbol}</p>
              <DotIcon className="text-gray-400" />
              <p className="text-gray-400">{coin.coinDetails?.name}</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold">
                ₩{" "}
                {coin.coinDetails?.market_data.current_price.kwd.toLocaleString()}
              </p>
              <p>
                <span className="text-red-600">
                  <span>
                    -{coin.coinDetails?.market_data.market_cap_change_24h}
                  </span>
                  <span>
                    (-
                    {
                      coin.coinDetails?.market_data
                        .market_cap_change_percentage_24h
                    }
                    %)
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button onClick={handleAddToWatchlist}>
            {existInWatchlist(watchlist.items, coin.coinDetails) ? (
              <BookmarkFilledIcon className="h-6 w-6" />
            ) : (
              <BookmarkIcon className="h-6 w-6" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">구매 및 팔기</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>얼마나 구매하시겠습니까?</DialogTitle>
              </DialogHeader>
              <TreadingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-10">
        <StockChart coinId={id} />
      </div>
    </div>
  );
};

export default StockDetails;
