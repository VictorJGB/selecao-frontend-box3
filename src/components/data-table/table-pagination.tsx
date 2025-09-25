import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Button from "../button";
import Select from "../select";

type TablePaginationProps = {
  currentPage: string
  pageSize: string
  totalPages: number
  totalRegisters: number
}


export default function TablePagination({ currentPage, pageSize, totalPages, totalRegisters }: TablePaginationProps) {
  const [_, setSearchParams] = useSearchParams()

  function canGoNextPage() {
    if (Number(currentPage) + 1 > totalPages) return false

    return true
  }

  function canGoPreviousPage() {
    if (Number(currentPage) - 1 < 1) return false

    return true
  }

  function canGoFisrtPage() {
    if (Number(currentPage) === 1) return false

    return true
  }

  function canGoLastPage() {
    if (Number(currentPage) === totalPages) return false

    return true
  }

  function goToNextPage() {
    const params = {
      currentPage: String(Number(currentPage) + 1),
      pageSize,
    }
    setSearchParams(params)
  }

  function goToLastPage() {
    const params = {
      currentPage: String(Number(totalPages)),
      pageSize,
    }
    setSearchParams(params)
  }

  function goToPreviuousPage() {
    const params = {
      currentPage: String(Number(currentPage) - 1),
      pageSize,
    }
    setSearchParams(params)
  }

  function goToFirstPage() {
    const params = {
      currentPage: String(1),
      pageSize,
    }
    setSearchParams(params)
  }

  function setPageSize(size: string | number) {
    const params = {
      currentPage: String(currentPage),
      pageSize: String(size),
    }
    setSearchParams(params)
  }

  return (
    <div className="flex w-full items-center justify-center">
      <Select
        options={[
          { value: totalRegisters > 5 ? 5 : totalRegisters, label: totalRegisters > 5 ? "5" : String(totalRegisters) },
          { value: totalRegisters > 10 ? 10 : totalRegisters, label: totalRegisters > 10 ? "10" : String(totalRegisters) },
        ]}
        value={pageSize}
        onSelect={setPageSize}
      />
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" disabled={!canGoFisrtPage()} onClick={goToFirstPage}><ChevronsLeft /></Button>
          <Button variant="ghost" size="icon" disabled={!canGoPreviousPage()} onClick={goToPreviuousPage}><ChevronLeft /></Button>
        </div>
        <p>Página {currentPage} de {totalPages}</p>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" disabled={!canGoNextPage()} onClick={goToNextPage}><ChevronRight /></Button>
          <Button variant="ghost" size="icon" disabled={!canGoLastPage()} onClick={goToLastPage}><ChevronsRight /></Button>
        </div>
      </div>
    </div>
  )
}