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
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWatchlist, getUserWatchlist } from "@/State/Watchlist/Action";

const WatchList = () => {
  const dispatch = useDispatch();
  const { watchlist } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUserWatchlist(localStorage.getItem("jwt")));
  }, []);

  const handleRemoveToWatchlist = (value) => {
    dispatch(
      addItemToWatchlist({
        coinId: value,
        jwt: localStorage.getItem("jwt"),
      })
    );
  };

  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl pb-5">관심목록</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">코인</TableHead>
            <TableHead>식별코드</TableHead>
            <TableHead>거래량</TableHead>
            <TableHead>시가총액</TableHead>
            <TableHead>24H</TableHead>
            <TableHead>현재 가격</TableHead>
            <TableHead className="text-right text-red-600">제거</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {watchlist.items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={item.image} />
                </Avatar>
                <span>{item.name}</span>
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.total_volume}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>{item.price_change_percentage_24h}</TableCell>
              <TableCell className="">{item.current_price}₩</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  onClick={() => handleRemoveToWatchlist(item.id)}
                  size="icon"
                  className="h-10 w-10"
                >
                  <BookmarkFilledIcon className="h-6 w-6" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WatchList;
