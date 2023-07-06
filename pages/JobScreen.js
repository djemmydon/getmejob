import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import JobComponent from "../components/Job/JobComponent";

function JobScreen() {
  return (
    <ScrollView style={{paddingVertical: 40, backgroundColor:"#FAFAFF"}}>
    <SafeAreaView>
      
        <JobComponent />
    
      </SafeAreaView>
      </ScrollView>
  );
}

export default JobScreen;
