import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import JobDetails from "../components/Job/details/JobDetails";

function JobDetailsScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <JobDetails />
      </ScrollView>
    </SafeAreaView>
  );
}

export default JobDetailsScreen;
