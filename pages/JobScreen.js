import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import JobComponent from "../components/Job/JobComponent";

function JobScreen() {
  return (
    <ScrollView style={{marginVertical: 40}}>
    <SafeAreaView>
      
        <JobComponent />
    
      </SafeAreaView>
      </ScrollView>
  );
}

export default JobScreen;
