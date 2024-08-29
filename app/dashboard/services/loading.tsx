"use client";
// components/ui/skeletons/loading.tsx
import { motion } from "framer-motion";
import SkeletonBreadcrumbs from "@/components/ui/skeletons/SkeletonBreadcrumbs";
import SkeletonSearch from "@/components/ui/skeletons/SkeletonSearchBar";
import SkeletonTable from "@/components/ui/skeletons/SkeletonTable";

const Loading = () => {
  return (
    <motion.main
      className="w-full flex flex-col p-8 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }} // Adjust the duration as needed
    >
      <SkeletonBreadcrumbs />
      <SkeletonSearch />
      <SkeletonTable />
    </motion.main>
  );
};

export default Loading;
