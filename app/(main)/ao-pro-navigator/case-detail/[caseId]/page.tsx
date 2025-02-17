// app/ao-pro-navigator/case-detail/[caseId]/page.tsx
"use client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function CaseDetailPage() {
  const { caseId } = useParams();
  const caseList = useSelector((state: RootState) => state.case.list);
  const foundCase = caseList.find((c) => c.caseId === caseId);

  if (!foundCase) {
    return <div>Case not found.</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Case Detail: {foundCase.title}</h1>
      <p>Status: {foundCase.status}</p>
      <p>Description: {foundCase.description}</p>
    </div>
  );
}
