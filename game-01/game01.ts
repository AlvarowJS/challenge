interface SeenNumbers {
    [key: number]: boolean;
}
interface SubsetResult {
    subset: [number, number] | null;
    message: string;
}

interface SubsetFinder {
    (M: number[], N: number): SubsetResult;
}

const posibleSum: SubsetFinder = (M, N) => {  
    const seen: SeenNumbers = {};
    
    for(const num of M){
        const complement = N - num        
        if(seen[complement]){
            // return `[${complement}, ${num}]`;
            return {
                subset: [complement, num],
                message: "Subset found successfully!",
            };
        }
        seen[num] = true
    }
    return {
        subset: null,
        message: "No subset found that sums to the target value.",
    };
}


console.log(posibleSum([5, 2, 10, 1], 12))