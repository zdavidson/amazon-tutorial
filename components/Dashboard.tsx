"use client";
import { useSupabase } from "@/hooks/useSupabase";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";
import DashboardSmallCard from "./DashboardSmallCard";
import DashboardLargeCard from "./DashboardLargeCard";

const Dashboard = () => {
  const { products, getProducts } = useSupabase();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <DashboardSmallCard />
        <DashboardSmallCard />
        <DashboardSmallCard />
        <DashboardSmallCard />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <DashboardLargeCard />
        <DashboardLargeCard />
        <DashboardLargeCard />
        <DashboardLargeCard />
      </Box>
    </Box>
  );
};

export default Dashboard;
