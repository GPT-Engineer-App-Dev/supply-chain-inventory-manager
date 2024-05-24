import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card.jsx";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.jsx";
import "./App.css";

function App() {
  const [inventoryData, setInventoryData] = useState([
    { id: 1, item: "T-Shirt", quantity: 100, price: "$20" },
    { id: 2, item: "Jeans", quantity: 50, price: "$40" },
    { id: 3, item: "Jacket", quantity: 30, price: "$60" },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Inventory Management Dashboard</h1>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">180</div>
                <CardDescription>Items in stock</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$5000</div>
                <CardDescription>Total inventory value</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Low Stock</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <CardDescription>Items with low stock</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Out of Stock</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <CardDescription>Items out of stock</CardDescription>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="inventory">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.item}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
