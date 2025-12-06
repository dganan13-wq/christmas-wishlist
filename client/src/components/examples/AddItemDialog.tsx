import { AddItemDialog } from "../AddItemDialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AddItemDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Add Item Dialog</Button>
      <AddItemDialog
        open={open}
        onOpenChange={setOpen}
        onSubmit={(data) => {
          console.log("Submitted:", data);
        }}
      />
    </div>
  );
}
