"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeeList,
  selectEmployeeList,
  selectEmployeeLoading,
  selectEmployeeError,
} from "@/store/features/employeeSlice";
import { AppDispatch } from "@/store";

export default function SegmentationOverview() {
  const dispatch = useDispatch<AppDispatch>();
  const employeeList = useSelector(selectEmployeeList);
  const loading = useSelector(selectEmployeeLoading);
  const error = useSelector(selectEmployeeError);

  // เมื่อ component mount ให้ dispatch action เพื่อดึงข้อมูล employee
  useEffect(() => {
    dispatch(getEmployeeList());
  }, [dispatch]);

  return (
    <div className="text-black">
      <h1 className="text-xl font-bold">Segmentation Overview</h1>
      <p className="text-red-500">Example how to use Redux</p>

      {loading && <p>Loading employee data...</p>}
      {error && <p>Error: {error}</p>}

      {employeeList.length > 0 && (
        <table className="min-w-full border mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Employee ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Position</th>
              <th className="border px-4 py-2">Workload</th>
              <th className="border px-4 py-2">Department</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((emp) => (
              <tr key={emp.employeeId}>
                <td className="border px-4 py-2">{emp.employeeId}</td>
                <td className="border px-4 py-2">{emp.name}</td>
                <td className="border px-4 py-2">{emp.position}</td>
                <td className="border px-4 py-2">{emp.workload}%</td>
                <td className="border px-4 py-2">{emp.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
