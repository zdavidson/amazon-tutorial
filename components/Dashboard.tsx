"use client";
import { useSupabase } from "@/hooks/useSupabase";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DashboardSmallCard from "./DashboardSmallCard";
import DashboardLargeCard from "./DashboardLargeCard";

const Dashboard = () => {
  const {
    clothing,
    getClothing,
    electronics,
    getElectronics,
    jewelry,
    getJewelry,
    womensClothing,
    getWomensClothing,
  } = useSupabase();

  useEffect(() => {
    getClothing();
    getElectronics();
    getJewelry();
    getWomensClothing();
  }, [getClothing, getElectronics, getJewelry, getWomensClothing]);

  return (
    <Box>
      <Box>
        <Image
          src={"/dashboard-1.jpg"}
          width={1150}
          height={450}
          alt={"dashboard-image"}
        />
      </Box>
      <Box sx={{ transform: "translateY(-250px)" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <DashboardSmallCard
            title="Top Deal"
            image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            link="1"
          />
          <DashboardSmallCard
            title="Available Now"
            image="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
            link="9"
          />
          <DashboardSmallCard
            title="Editor's Pick"
            image="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
            link="16"
          />
          <DashboardSmallCard
            title="For You"
            image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            link="1"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <DashboardLargeCard
            title="Best Sellers in Clothing"
            products={clothing}
          />
          <DashboardLargeCard
            title="Best Sellers in Electronics"
            products={electronics}
          />
          <DashboardLargeCard
            title="Best Sellers in Jewelry"
            products={jewelry}
          />
          <DashboardLargeCard
            title="Best Sellers in Women's Clothing"
            products={womensClothing}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
