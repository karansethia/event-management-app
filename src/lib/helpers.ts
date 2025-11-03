// This function is to check if id is present in the array and return the ones that dont
export const checkIdIfExists = (newIDs: number[], existingIds: number[]): number[] => {
  return newIDs.filter(id => !existingIds.includes(id));
}
