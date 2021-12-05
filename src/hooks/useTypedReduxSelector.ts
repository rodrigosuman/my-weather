import { TypedUseSelectorHook, useSelector } from "react-redux";
import { store } from "../redux";

type RootState = ReturnType<typeof store.getState>;

const useTypedReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedReduxSelector;
