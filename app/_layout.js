import { Stack } from "expo-router";
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { setOnUnauthorizedCallback } from '@utils/navigationService';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('@assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('@assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('@assets/fonts/DMSans-Regular.ttf'),
    })
    const router = useRouter();

    useEffect(() => {
      const handleUnauthorized = () => {
        router.push('/');
      };
  
      setOnUnauthorizedCallback(handleUnauthorized);

    }, [router]);
    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])
    if (!fontsLoaded) return null;
    return <Stack 
      screenOptions={{
        // Hide the header for all other routes.
        headerShown: false,
      }}
      onLayout={onLayoutRootView} />;
}

export default Layout;