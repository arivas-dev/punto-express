import Home from "./Home";
import { Providers } from "./context";

export default function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
