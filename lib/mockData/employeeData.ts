// /lib/mockData/employeeData.ts

export interface EmployeeData {
  employeeId: string;
  name: string;
  position: "Junior" | "Mid" | "Senior" | "Manager";
  workload: number; // คิดเป็นเปอร์เซ็นต์หรือหน่วยที่ต้องการ
  department: string;
}

const mockEmployeeList: EmployeeData[] = [
  {
    employeeId: "E001",
    name: "Alice",
    position: "Junior",
    workload: 70,
    department: "Sales",
  },
  {
    employeeId: "E002",
    name: "Bob",
    position: "Manager",
    workload: 90,
    department: "Marketing",
  },
  {
    employeeId: "E003",
    name: "Charlie",
    position: "Senior",
    workload: 80,
    department: "Finance",
  },
];

export async function fetchEmployeeListMock(): Promise<EmployeeData[]> {
  // จำลอง API call โดยใช้ setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEmployeeList);
    }, 500);
  });
}
