// app/ao-pro-navigator/case-list/page.tsx
"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import {
  getCaseList,
  selectCaseList,
  selectCaseLoading,
  selectCaseError,
} from "@/store/features/caseSlice";

export default function CaseListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const caseList = useSelector(selectCaseList);
  const loading = useSelector(selectCaseLoading);
  const error = useSelector(selectCaseError);

  useEffect(() => {
    dispatch(getCaseList());
  }, [dispatch]);

  if (loading) return <div>Loading case list...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-xl font-bold">Case List</h1>
      <ul>
        {caseList.map((c) => (
          <li key={c.caseId}>
            {c.caseId} - {c.title} - {c.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
