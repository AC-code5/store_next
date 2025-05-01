"use client";
import ReactPaginate from "react-paginate";
import { useRouter, useSearchParams } from "next/navigation";

function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handlePageChange = (e: { selected: number }) => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());

    const page = e.selected + 1;
    const per_page = 5;
    currentSearchParams.set("page", page.toString());
    currentSearchParams.set("per_page", per_page.toString());

    router.push(`/store?${currentSearchParams.toString()}`);
  };
  return (
    <div className="flex justify-center mt-8">
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName="flex gap-2 items-center"
        pageClassName="px-3 py-1 border rounded hover:bg-gray-100"
        activeClassName="bg-blue-500 text-white hover:bg-blue-600"
        previousClassName="px-3 py-1 border rounded hover:bg-gray-100"
        nextClassName="px-3 py-1 border rounded hover:bg-gray-100"
        disabledClassName="opacity-50 cursor-not-allowed"
        breakClassName="px-3 py-1"
        previousLabel="قبلی"
        nextLabel="بعدی"
      />
    </div>
  );
}

export default Pagination;
