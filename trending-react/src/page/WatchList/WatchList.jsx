import React from "react";
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

const WatchList = () => {
  const handleRemoveToWatchlist = (value) => {
    console.log(value);
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
            <TableHead className="text-right">현재 가격</TableHead>
            <TableHead className="text-right text-red-600">제거</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>6834455792</TableCell>
              <TableCell>376962336317</TableCell>
              <TableCell>-19129.99</TableCell>
              <TableCell className="">19071.68₩</TableCell>
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
