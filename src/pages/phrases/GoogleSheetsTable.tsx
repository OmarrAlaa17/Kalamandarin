import React, { useState, useEffect, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button"; // Added for pagination buttons
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; //Added for page size selection
import { BackUpData } from "@/data/backupData";

// Replace with your Google Sheets ID and API key
const SPREADSHEET_ID = "1JcgG_5gjsgUt5GeV8omiD6RL36Ezf6yTVVovihOhuxw";
const API_KEY = "AIzaSyDTxcEpiWonlRHFKPszqMI1ScNq2fcVQ94"; // Important:  Follow Google's best practices for API key security!
const SHEET_NAME = "CHECKED"; // Or the name of your sheet

interface GoogleSheetRow {
  [key: string]: string | number | boolean | null;
}

const GoogleSheetsTable = () => {
  const [data, setData] = useState<GoogleSheetRow[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState(""); //for search
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Default page size

  // Fetch data from Google Sheets API
  const fetchData = useCallback(async () => {
    if (!SPREADSHEET_ID || !API_KEY) {
      setError("SPREADSHEET_ID or API_KEY is not configured.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    // Construct the API URL.  See: https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        setData(BackUpData); // Or set an appropriate message
      }
      const result = await response.json();

      if (!result.values) {
        setData(BackUpData); // Or set an appropriate message
        setLoading(false);
        return;
      }

      // Process the data into an array of objects
      const headers = result.values[0];
      const rows: GoogleSheetRow[] = result.values.slice(1).map((row: any) => {
        const rowData: GoogleSheetRow = {};
        headers.forEach((header: string, index: number) => {
          rowData[header] = row[index] ?? null; // Handle null/undefined
        });
        // Select only the first 5 columns (A-E) for display
        const limitedRowData: GoogleSheetRow = {};
        Object.keys(rowData)
          .slice(0, 5)
          .forEach((key) => {
            limitedRowData[key] = rowData[key];
          });
        return limitedRowData; // Adjust the slice as needed
      });
      setData(rows);
    } catch (error: any) {
      setError(error.message);
      setData(BackUpData); // Or set an appropriate message
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Search functionality (simple string matching)
  const filteredData = data.filter((item) => {
    if (!searchTerm) return true; // Show all if search term is empty

    const searchTermLower = searchTerm.toLowerCase();
    return Object.values(item).some((value) => {
      if (value === null) return false;
      return String(value).toLowerCase().includes(searchTermLower);
    });
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search term changes
  };

  // Pagination logic
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  // Function to handle page change
  const paginate = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const handlePageSizeChange = (value: string) => {
    const newPageSize = parseInt(value, 10);
    if (!isNaN(newPageSize) && newPageSize > 0) {
      setPageSize(newPageSize);
      setCurrentPage(1); // Reset to the first page after page size change
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full p-4 space-y-4">
        <Skeleton className="w-full h-10" />
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-full h-8" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Badge variant="destructive" className="mt-4">
        Error: {error}
      </Badge>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="mt-4 text-gray-500">
        No data found in the Google Sheet.
      </div>
    );
  }

  // Get the headers dynamically from the data
  const headers = Object.keys(data[0] ?? {});

  return (
    <div className="container p-4 mx-auto">
      <div className="flex flex-col items-center justify-between mb-4 sm:flex-row sm:gap-4">
        <div className="flex flex-col items-center justify-center gap-4 mb-4 sm:flex-row">
          <Input
            type="text"
            placeholder="بحث..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="max-w-sm"
            // Increase text size for better visibility
            style={{ fontSize: "1.2rem" }}
          />
          <Badge
            variant="secondary"
            className="p-2 px-4 text-base text-black bg-gray-200 border-none md:text-lg font-primary"
          >
            <Search className="w-8 h-8 ml-2" />
            {filteredData.length} نتيجة
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg text-black font-primary">
            عدد المصطلحات:
          </span>
          <Select onValueChange={handlePageSizeChange} value={String(pageSize)}>
            <SelectTrigger className="w-32 text-lg font-primary">
              <SelectValue placeholder="Size" className="text-lg" />
            </SelectTrigger>
            <SelectContent className="font-primary">
              <SelectItem value="5" className="text-lg">
                5
              </SelectItem>
              <SelectItem value="10" className="text-lg">
                10
              </SelectItem>
              <SelectItem value="20" className="text-lg">
                20
              </SelectItem>
              <SelectItem value="50" className="text-lg">
                50
              </SelectItem>
              <SelectItem value={String(data.length)} className="text-lg">
                All
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ScrollArea className="w-full">
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header) => (
                <TableHead
                  key={header}
                  className="py-4 text-lg font-bold text-black capitalize "
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((row, index) => (
              <TableRow key={index}>
                {headers.map((header) => (
                  <TableCell
                    key={header}
                    className="text-base font-medium text-black bg-white font-chinese"
                  >
                    {row[header] ?? <span className="italic">N/A</span>}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
      <div className="flex flex-row-reverse items-center justify-center mt-4 space-x-2">
        <Button
          variant="outline"
          className="px-2"
          onClick={() => paginate(1)}
          disabled={currentPage === 1}
        >
          <ChevronsLeft className="w-4 h-4" />
          <span className="sr-only">First Page</span>
        </Button>
        <Button
          variant="outline"
          className="px-2"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="sr-only">Previous Page</span>
        </Button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          className="px-2"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="w-4 h-4" />
          <span className="sr-only">Next Page</span>
        </Button>
        <Button
          variant="outline"
          className="px-2"
          onClick={() => paginate(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronsRight className="w-4 h-4" />
          <span className="sr-only">Last Page</span>
        </Button>
      </div>
    </div>
  );
};

export default GoogleSheetsTable;
