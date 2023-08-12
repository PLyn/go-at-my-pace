import GetTaskDetails from "@/components/GetTaskDetails";
import GetTaskDetailsByDesc from "@/components/GetTaskDetailsByDesc";
import GetTaskDetailsByName from "@/components/GetTaskDetailsByName";
import { Task } from "@/types/Task";

const FilterSearchResults = async (debouncedValue: string) => {
  if (debouncedValue === "") {
    return await GetTaskDetails();
  } else {
    let finalFilteredResults: Task[] = [];

    const filteredByName = await GetTaskDetailsByName(debouncedValue);
    const filteredbyDesc = await GetTaskDetailsByDesc(debouncedValue);

    if (filteredByName.length !== 0) {
      Array.prototype.push.apply(finalFilteredResults, filteredByName);
    }

    if (filteredbyDesc.length !== 0) {
      Array.prototype.push.apply(finalFilteredResults, filteredbyDesc);
    }

    finalFilteredResults = Array.from(
      new Map(finalFilteredResults.map((v) => [v.id, v])).values()
    );

    return finalFilteredResults;
  }
};

export default FilterSearchResults;