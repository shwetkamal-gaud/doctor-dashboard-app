import { login } from "@/store/slices/user";
import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (name.trim() && password.trim()) {
      dispatch(login({name, password}));
      router.replace('/appointments/index');
    }
  };


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:'12px',
        padding: 30,
        shadowOpacity: 10
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Doctor Login</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button onPress={handleLogin} >Login</Button>
    </View>
  );
}
