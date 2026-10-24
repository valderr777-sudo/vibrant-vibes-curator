import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { submitRsvp } from "@/lib/forms.functions";

export function RsvpDialog({ eventTitle }: { eventTitle: string }) {
  const empty = { name: "", email: "", phone: "", guests: "1", note: "" };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitRsvp({ data: { ...form, eventTitle, guests: Number(form.guests) || 1 } });
      setStatus("done");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Dialog onOpenChange={(o) => !o && setStatus("idle")}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4">
          <Mail /> RSVP
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>RSVP: {eventTitle}</DialogTitle>
          <DialogDescription>You will receive a confirmation email.</DialogDescription>
        </DialogHeader>
        {status === "done" ? (
          <p className="text-foreground">Thank you! Your RSVP was sent. Check your inbox for a confirmation.</p>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-3">
            <Input required maxLength={100} placeholder="Full name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Input required type="email" maxLength={255} placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Input type="tel" maxLength={30} placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <label className="text-sm text-muted-foreground">
              Number attending
              <Input type="number" min={1} max={20} value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="mt-1" />
            </label>
            <textarea maxLength={1000} placeholder="Note (optional)" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="min-h-20 rounded-md border border-input bg-background p-3 text-sm" />
            {status === "error" && (
              <p className="text-sm text-destructive">Sorry, your RSVP could not be sent. Please email Reservations@WORWF.org.</p>
            )}
            <Button type="submit" variant="cta" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send RSVP"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
