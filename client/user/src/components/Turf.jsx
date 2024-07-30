import   { useEffect, useState } from "react";
import TurfCard from "./TurfCard";
import TurfCardSkeleton from "./TurfCardSkeleton";
import useTurfData from "../hooks/useTurfData";
import SearchTurf from "./SearchTurf";

const Turf = () => {
  const { turfs, loading, error, fetchTurfData } = useTurfData();
  const [filteredTurfs, setFilteredTurfs] = useState(turfs);

  useEffect(() => {
    fetchTurfData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = turfs.filter(
      (turf) =>
        turf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        turf.sportTypes.some((sport) =>
          sport.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredTurfs(filtered);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Discover Turfs</h1>
      <SearchTurf onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <TurfCardSkeleton key={`skeleton-${index}`} />
            ))
          : (filteredTurfs.length > 0 ? filteredTurfs : turfs).map((turf) => (
              <TurfCard key={turf._id} turf={turf} />
            ))}
      </div>
    </div>
  );
};

export default Turf;
