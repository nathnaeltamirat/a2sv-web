'use client'
import { data } from "@/utils/helper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Opportunity {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: "inPerson" | "remote" | "hybrid";
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: "open" | "closed";
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string|null;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string[] | null;
  perksAndBenefits: string[] | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
}

const Card =  () => {

  const router = useRouter();
  const [opportunities,setOpportunites] = useState<Opportunity[]>([])
  useEffect(()=>{
    const getData = async ()=>{
      try{
        const result = await data();
        setOpportunites(result)
      }catch(err){
        console.log(err)
      }
    }
    getData();
  },[])
  const handleClick = (id: string) => {
    router.push(`job-listing/${id}`);
  };
  return (
    <>
      {opportunities.map((item) => (
        <div
          onClick={() => handleClick(item.id)}
          key={item.id}
          className="mb-4 cursor-pointer flex flex-col md:flex-row  gap-2 p-8 border border-gray-400 rounded-2xl overflow-x-hidden max-w-full"
        >
          <div>
            <img
              width={200}
              height={200}
            src={item.logoUrl && item.logoUrl.trim() !== "" ? item.logoUrl : "/default.png"}

              alt="company logo"
            />
          </div>
          <div>
            <h1 className="font-bold mb-2">{item.title}</h1>
            <p className="opacity-70 mb-2">
            {item.location}
            </p>
            <p className="mb-4">{item.description}</p>
            <div className="flex gap-2">
              <p className="bg-green-200 text-green-500  rounded-2xl p-1 px-2">
                {item.opType}
              </p>
              <div className="w-px h-7 bg-gray-400"></div>
              {item.categories.map((value, key) => (
                <p
                  key={key}
                  className="text-yellow-500 border border-yellow-500 p-1 px-2 rounded-2xl"
                >
                  {value}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
