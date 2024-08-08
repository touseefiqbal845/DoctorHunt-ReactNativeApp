import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MainApp from './MainApp'; 
import SplashScreen from './src/Pages/SplashScreen/SplashScreen';
import DiagnosticScreen from './src/Pages/DiagnosticScreen/DiagnosticScreen';
import PatientEmpty from './src/Pages/DiagnosticScreen/PatientEmpty';
import MedicalRecordOne from './src/Pages/MedicalRecords/MedicalRecordOne';
import MedicalOrderOne from './src/Pages/Medical-Order/MedicalOrderOne';
import LocationScreen from './src/Pages/LocationScreen/LocationScreen';
import OnboardingOne from './src/Pages/OnboardingOne/OnboardingOne';
import OnboardingTwo from './src/Pages/OnboardingOne/OnboardingTwo';
import OnboardingThree from './src/Pages/OnboardingOne/OnboardingThree';
import SignUp from './src/Pages/SignupAndLoginScreen/SignUp';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); 
  }, []);

  return (
    <View style={styles.container}>
      {/* {isLoading ? <SplashScreen /> : <MainApp />} */}
      {/* <DiagnosticScreen/> */}
      {/* <PatientEmpty/> */}
      {/* <MedicalRecordOne/> */}
      {/* <MedicalOrderOne/> */}
      {/* <LocationScreen/> */}

      {/* <OnboardingOne/> */}
      {/* <OnboardingTwo/> */}
      {/* <OnboardingThree/> */}
      <SignUp/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
