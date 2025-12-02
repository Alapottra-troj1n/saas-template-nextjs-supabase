"use client";

import { fetchSportsCountries } from "@/lib/sports-api/crud";
import { useQuery } from "@tanstack/react-query";

const ReactQueryTestPage = () => {

  const result = useQuery({ queryKey: ["fetch"], queryFn: fetchSportsCountries });

  console.log("ReactQueryTestPage -> result", result);
  return (
    <div>
      <div className="text-center mt-5">React Query Test Page</div>
    </div>
  );
};

export default ReactQueryTestPage;
