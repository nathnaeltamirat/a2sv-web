"use client";
import Card from "@/components/card";
import { data } from "@/utils/helper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Jobs = () => {
  const router = useRouter();

  const [ result, setResult ] = useState<any[]>([]);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
      return;
    }
    const fetchData = async () => {
      const result = await data();
      setResult(result);
    };
    fetchData();
  }, []);

  const value = result.length;
  return (
    <>
      <div className="w-4xl mx-auto p-8 {epilogue} ">
        <header className="flex justify-between mb-8">
          <div>
            <h1 className="font-bold text-2xl">Opportunites</h1>
            <p className="opacity-50">Showing {value} result</p>
          </div>
          <div>
            <p>
              Sort by: <strong>Most relevant</strong>
            </p>
          </div>
        </header>
        <Card />
      </div>
    </>
  );
};

export default Jobs;
