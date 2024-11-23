import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

async function getClasses() {
  // This is a mock function. In a real application, you'd fetch this data from your database.
  return [
    { id: 1, name: "Mathematics 101", teacher: "John Doe" },
    { id: 2, name: "English Literature", teacher: "Jane Smith" },
    { id: 3, name: "Physics", teacher: "Bob Johnson" },
  ]
}

export default async function ClassesPage() {
  const classes = await getClasses()

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Classes</h1>
        <Button>Add Class</Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Teacher</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classes.map((class_) => (
              <TableRow key={class_.id}>
                <TableCell className="font-medium">{class_.id}</TableCell>
                <TableCell>{class_.name}</TableCell>
                <TableCell>{class_.teacher}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

