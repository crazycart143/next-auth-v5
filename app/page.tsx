import { Button } from "@/components/ui/button";
import { send } from "./actions";

export default function Home() {
  return (
    <main>
      <form action={send}>
        <Button>Click Me</Button>
      </form>
    </main>
  );
}
