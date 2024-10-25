import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { auth } = useSelector((store) => store);
  const handleEnableTwoStepVerficiation = () => {
    console.log("two step verfication");
  };
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">나의 정보</CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">이메일: </p>
                  <p className="text-gray-500">{auth.user?.email}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">이름: </p>
                  <p className="text-gray-500">{auth.user?.fullName}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">생일: </p>
                  <p className="text-gray-500">2000/11/12</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">국적: </p>
                  <p className="text-gray-500">한국</p>
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">이메일: </p>
                  <p className="text-gray-500">{auth.user?.email}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">이름: </p>
                  <p className="text-gray-500">{auth.user?.fullName}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">생일: </p>
                  <p className="text-gray-500">2000/11/12</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">국적: </p>
                  <p className="text-gray-500">한국</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
