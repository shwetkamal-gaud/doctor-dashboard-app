import { store } from "@/store/store";
import { Stack, Slot } from "expo-router";
import { Provider } from 'react-redux';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
