import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@base-ui/components/ui/card"
import { Button } from "@base-ui/components/ui/button"
import { Label } from "@base-ui/components/ui/label"

interface UserCardProps {
  name: string
  email: string
  role: string
  onEdit?: () => void
  onDelete?: () => void
}

export function UserCard({ name, email, role, onEdit, onDelete }: UserCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{email}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center space-x-2">
          <Label htmlFor="role">Role:</Label>
          <span className="text-sm font-medium">{role}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="status">Status:</Label>
          <span className="text-sm text-green-600">Active</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="destructive" onClick={onDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}