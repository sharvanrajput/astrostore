import HistoryHeader from "@/components/HistoryHeader";
import React, { useState } from "react";
import { View } from "react-native";
import {
  DataTable,
  Chip,
  Portal,
  Button,
  Dialog,
  Text,
} from "react-native-paper";

type RowData = {
  id: number;
  clientName: string;
  duration: string;
  amount: number;
  status: "Pending" | "Completed" | "Cancelled";
};

const data: RowData[] = [
  { id: 1, clientName: "Rahul Sharma", duration: "30 min", amount: 500, status: "Completed" },
  { id: 2, clientName: "Amit Verma", duration: "45 min", amount: 750, status: "Pending" },
  { id: 3, clientName: "Neha Singh", duration: "60 min", amount: 1000, status: "Completed" },
  { id: 4, clientName: "Priya Patel", duration: "30 min", amount: 400, status: "Cancelled" },
  { id: 5, clientName: "Rohit Mehta", duration: "90 min", amount: 1500, status: "Completed" },
  { id: 6, clientName: "Sneha Kapoor", duration: "45 min", amount: 700, status: "Pending" },
  { id: 7, clientName: "Vikas Yadav", duration: "60 min", amount: 900, status: "Completed" },
  { id: 8, clientName: "Anjali Gupta", duration: "30 min", amount: 350, status: "Completed" },
  { id: 9, clientName: "Karan Malhotra", duration: "120 min", amount: 2000, status: "Pending" },
  { id: 10, clientName: "Pooja Nair", duration: "45 min", amount: 650, status: "Completed" },
  { id: 11, clientName: "Arjun Rana", duration: "60 min", amount: 950, status: "Cancelled" },
  { id: 12, clientName: "Simran Kaur", duration: "30 min", amount: 450, status: "Completed" },
  { id: 13, clientName: "Mohit Bansal", duration: "75 min", amount: 1200, status: "Pending" },
  { id: 14, clientName: "Ritika Joshi", duration: "45 min", amount: 600, status: "Completed" },
  { id: 15, clientName: "Sandeep Chawla", duration: "60 min", amount: 850, status: "Completed" },
  { id: 16, clientName: "Nisha Arora", duration: "30 min", amount: 400, status: "Pending" },
  { id: 17, clientName: "Deepak Thakur", duration: "90 min", amount: 1400, status: "Completed" },
  { id: 18, clientName: "Kavita Mishra", duration: "45 min", amount: 700, status: "Cancelled" },
  { id: 19, clientName: "Manish Kulkarni", duration: "60 min", amount: 950, status: "Completed" },
  { id: 20, clientName: "Ayesha Khan", duration: "30 min", amount: 500, status: "Pending" },
];

export default function EarningHistory() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 12;

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  const [visible, setVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);

  const showDialog = (row: RowData) => {
    setSelectedRow(row);
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  return (
    <View className="flex-1">
      <HistoryHeader text="Earning History" />

      <View className="px-2 mt-2">
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Amount</DataTable.Title>
            <DataTable.Title>Duration</DataTable.Title>
            <DataTable.Title>Status</DataTable.Title>
          </DataTable.Header>

          {data.slice(from, to).map((item) => (
            <DataTable.Row key={item.id} onPress={() => showDialog(item)}>
              <DataTable.Cell>
                {item.clientName.split(" ")[0]}...
              </DataTable.Cell>

              <DataTable.Cell>₹{item.amount}</DataTable.Cell>

              <DataTable.Cell>{item.duration}</DataTable.Cell>

              <DataTable.Cell>
                <Chip
                  compact
                  style={{
                    backgroundColor:
                      item.status === "Pending"
                        ? "#fde047"
                        : item.status === "Completed"
                        ? "#86efac"
                        : "#fca5a5",
                  }}
                >
                  {item.status}
                </Chip>
              </DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(data.length / itemsPerPage)}
            onPageChange={setPage}
            label={`${from + 1}-${to} of ${data.length}`}
          />
        </DataTable>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Client Details</Dialog.Title>

            <Dialog.Content>
              {selectedRow && (
                <>
                  <Text>Name: {selectedRow.clientName}</Text>
                  <Text>Amount: ₹{selectedRow.amount}</Text>
                  <Text>Duration: {selectedRow.duration}</Text>
                  <Text>Status: {selectedRow.status}</Text>
                </>
              )}
            </Dialog.Content>

            <Dialog.Actions>
              <Button onPress={hideDialog}>Close</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
}
