const dates =["2025-12-21","2025-02-20", "2026-03-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates); // Output: ["21/12/2025", "20/02/2025", "30/03/2026"]


function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}