// /lib/mockData/caseData.ts

export interface CaseData {
  caseId: string;
  title: string;
  status: "Open" | "Closed";
  description: string;
}

const mockCaseList: CaseData[] = [
  {
    caseId: "001",
    title: "Case 001",
    status: "Open",
    description: "Lorem ipsum 1",
  },
  {
    caseId: "002",
    title: "Case 002",
    status: "Closed",
    description: "Lorem ipsum 2",
  },
];

export async function fetchCaseListMock(): Promise<CaseData[]> {
  // จำลอง API call ด้วย delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCaseList);
    }, 500);
  });
}
