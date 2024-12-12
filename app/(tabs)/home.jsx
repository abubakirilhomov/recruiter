import React from "react";
import { View, ScrollView } from "react-native";
import { TextInput, Button, Text, RadioButton, Checkbox, Switch } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";

const CreateVacancy = () => {
  const initialValues = {
    title: "",
    specialization: "",
    cities: "",
    plan: "",
    employmentType: "",
    workSchedule: "",
    hoursPerDay: "",
    workFormat: "",
    salaryFrom: "",
    salaryTo: "",
    isNet: false,
    address: "",
    experience: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    specialization: Yup.string().required("Specialization is required"),
    cities: Yup.string().required("Please specify at least one city"),
    plan: Yup.number()
      .typeError("Must be a number")
      .required("Plan is required"),
    employmentType: Yup.string().required("Employment type is required"),
    workSchedule: Yup.string().required("Work schedule is required"),
    hoursPerDay: Yup.number()
      .typeError("Must be a number")
      .required("Work hours are required"),
    salaryFrom: Yup.number()
      .typeError("Must be a number")
      .required("Minimum salary is required"),
    salaryTo: Yup.number()
      .typeError("Must be a number")
      .required("Maximum salary is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = (values) => {
    console.log("Vacancy created:", values);
    // Submit the form values to your backend or state management system
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text variant="headlineMedium" style={{ marginBottom: 16 }}>
        Create New Vacancy
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View>
            <TextInput
              label="Title"
              value={values.title}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              error={touched.title && errors.title}
              mode="outlined"
              style={{ marginBottom: 16 }}
            />
            {touched.title && errors.title && (
              <Text style={{ color: "red", marginBottom: 8 }}>{errors.title}</Text>
            )}

            <TextInput
              label="Specialization"
              value={values.specialization}
              onChangeText={handleChange("specialization")}
              onBlur={handleBlur("specialization")}
              error={touched.specialization && errors.specialization}
              mode="outlined"
              style={{ marginBottom: 16 }}
            />
            {touched.specialization && errors.specialization && (
              <Text style={{ color: "red", marginBottom: 8 }}>{errors.specialization}</Text>
            )}

            <TextInput
              label="Cities (comma separated)"
              value={values.cities}
              onChangeText={handleChange("cities")}
              onBlur={handleBlur("cities")}
              error={touched.cities && errors.cities}
              mode="outlined"
              style={{ marginBottom: 16 }}
            />
            {touched.cities && errors.cities && (
              <Text style={{ color: "red", marginBottom: 8 }}>{errors.cities}</Text>
            )}

            <TextInput
              label="Plan (number of employees)"
              value={values.plan}
              onChangeText={handleChange("plan")}
              onBlur={handleBlur("plan")}
              error={touched.plan && errors.plan}
              mode="outlined"
              keyboardType="numeric"
              style={{ marginBottom: 16 }}
            />
            {touched.plan && errors.plan && (
              <Text style={{ color: "red", marginBottom: 8 }}>{errors.plan}</Text>
            )}

            <Text>Employment Type</Text>
            <RadioButton.Group
              onValueChange={handleChange("employmentType")}
              value={values.employmentType}
            >
              <RadioButton.Item label="Full-time" value="Full-time" />
              <RadioButton.Item label="Part-time" value="Part-time" />
              <RadioButton.Item label="Project-based" value="Project-based" />
              <RadioButton.Item label="Internship" value="Internship" />
            </RadioButton.Group>

            <TextInput
              label="Work Schedule"
              value={values.workSchedule}
              onChangeText={handleChange("workSchedule")}
              onBlur={handleBlur("workSchedule")}
              error={touched.workSchedule && errors.workSchedule}
              mode="outlined"
              style={{ marginBottom: 16 }}
            />
            {touched.workSchedule && errors.workSchedule && (
              <Text style={{ color: "red", marginBottom: 8 }}>{errors.workSchedule}</Text>
            )}

            <TextInput
              label="Work Hours Per Day"
              value={values.hoursPerDay}
              onChangeText={handleChange("hoursPerDay")}
              onBlur={handleBlur("hoursPerDay")}
              error={touched.hoursPerDay && errors.hoursPerDay}
              mode="outlined"
              keyboardType="numeric"
              style={{ marginBottom: 16 }}
            />
            {touched.hoursPerDay && errors.hoursPerDay && (
              <Text style={{ color: "red", marginBottom: 8 }}>{errors.hoursPerDay}</Text>
            )}

            <TextInput
              label="Work Format"
              value={values.workFormat}
              onChangeText={handleChange("workFormat")}
              onBlur={handleBlur("workFormat")}
              error={touched.workFormat && errors.workFormat}
              mode="outlined"
              style={{ marginBottom: 16 }}
            />

            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
              <Switch
                value={values.isNet}
                onValueChange={(value) => setFieldValue("isNet", value)}
              />
              <Text style={{ marginLeft: 8 }}>Net Salary</Text>
            </View>

            <TextInput
              label="Salary From"
              value={values.salaryFrom}
              onChangeText={handleChange("salaryFrom")}
              onBlur={handleBlur("salaryFrom")}
              error={touched.salaryFrom && errors.salaryFrom}
              mode="outlined"
              keyboardType="numeric"
              style={{ marginBottom: 16 }}
            />
            {touched.salaryFrom && errors.salaryFrom && (
              <Text style={{ color: "red", marginBottom: 8 }}>{errors.salaryFrom}</Text>
            )}

            <TextInput
              label="Salary To"
              value={values.salaryTo}
              onChangeText={handleChange("salaryTo")}
              onBlur={handleBlur("salaryTo")}
              error={touched.salaryTo && errors.salaryTo}
              mode="outlined"
              keyboardType="numeric"
              style={{ marginBottom: 16 }}
            />
            {touched.salaryTo && errors.salaryTo && (
              <Text style={{ color: "red", marginBottom: 8 }}>{errors.salaryTo}</Text>
            )}

            <TextInput
              label="Experience"
              value={values.experience}
              onChangeText={handleChange("experience")}
              onBlur={handleBlur("experience")}
              error={touched.experience && errors.experience}
              mode="outlined"
              style={{ marginBottom: 16 }}
            />
            {touched.experience && errors.experience && (
              <Text style={{ color: "red", marginBottom: 8 }}>{errors.experience}</Text>
            )}

            <TextInput
              label="Description"
              value={values.description}
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              error={touched.description && errors.description}
              mode="outlined"
              multiline
              numberOfLines={4}
              style={{ marginBottom: 16 }}
            />
            {touched.description && errors.description && (
              <Text style={{ color: "red", marginBottom: 8 }}>{errors.description}</Text>
            )}

            <Button mode="contained" onPress={handleSubmit} style={{ marginTop: 16 }}>
              Submit
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default CreateVacancy;
