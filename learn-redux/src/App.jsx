import "./App.css";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/countersSlice";
import Posts from "./components/Posts";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (counterId) => {
    // i can only send one parameter in this function creator. If i have multiple parameter then i'll have to use a object and in that key value pairs.
    dispatch(increment(counterId)); // counterId is working as the the payload im getting in the redux file accessed as action.payload.
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  return (
    <div>
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}

        <Stats totalCount={totalCount} />
        <Posts />
      </div>
    </div>
  );
}

export default App;
