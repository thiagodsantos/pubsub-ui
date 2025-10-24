import { Table, Flex, Button } from "@chakra-ui/react"


const eventSource = new EventSource('http://localhost:3000/sse');

eventSource.onmessage = function(event) {
  console.log('Mensagem recebida:', event.data);
};

eventSource.onerror = function(error) {
  console.error('Erro no SSE:', error);
};

function App() {
  return (
    <Flex direction="row" p={10} gap="2">
      <Button ></Button>
      <Table.Root size="sm" width={"25%"} interactive>
        <Table.Header>
          <Table.Row bg="gray.100">
            <Table.ColumnHeader fontWeight="bold">Topics</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Table.Root size="sm" width={"100%"} interactive>
        <Table.Header>
          <Table.Row bg="gray.100">
            <Table.ColumnHeader fontWeight="bold">Message</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight="bold">Actions</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell width={"100px"}><Button variant="subtle" size="sm" colorPalette={"blue"}>Ack</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  )
}

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
]

export default App;
