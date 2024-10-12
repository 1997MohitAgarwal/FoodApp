import React from "react"
import {useState,useEffect} from "react"
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
export default function Items(){
let data=["pexels-maria-orlova-4940719.jpg","pexels-lisa-fotios-1373915.jpg","pexels-dapur-melodi-1109197.jpg","pexels-markus-winkler-2862154.jpg"]
  return(
    <div style={{backgroundColor:"#f6f8f2"}} className="grid grid-cols-2 lg:grid-cols-4">
      {data.map((item, index) => (
        <Card className="touch" key={index}>
          <CardBody className="overflow">
            <Image
              width="100%"
              loading="lazy"
              alt="food"
              className="w-full rounded-md object-fit bg-center"
              src={item}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  )
}