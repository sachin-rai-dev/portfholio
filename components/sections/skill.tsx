import React from "react";
import { skill, SkillSectionData } from "@/lib/section_data";
import Image from "next/image";

function Skill() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-5">
      {SkillSectionData.map((val, i) => {
        return <Card key={i} data={val} />;
      })}
    </div>
  );
}

function Card({ data }: { data: skill }) {
  return (
    <div className="shadow rounded-lg p-5 border border-input">
      <h1 className="text-2xl font-bold">{data.Teck}</h1>
      {data.skills.map((val, i) => {
        return(
          
          <div className=" flex justify-between py-2 " key={i}>
            <h3 className="font-semibold text-lg text-center">{val.name}</h3>
            <Image src={val.icon} alt={val.name} width={30} height={30} className="rounded-lg" />
          </div>
        
        );
      })}
    </div>
  );
}

export default Skill;
