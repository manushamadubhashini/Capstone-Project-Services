module.exports = {
  apps : [
    {
      name: "student-service",
      script: "java",
      args: "-jar ./Student-Service/target/Student-Service-1.0.0.jar",
      log_file: "./logs/Student-Service.log",
      instances: 2
    },
    {
      name: "program-service",
      script: "java",
      args: "-jar ./Program-Service/target/Program-Service-1.0.0.jar",
      log_file: "./logs/Program-Service.log",
      instances: 2
    },
    {
      name: "enrollment-service",
      script: "java",
      args: "-jar ./Enrollment-Service/target/Enrollment-Service-1.0.0.jar",
      log_file: "./logs/Enrollment-Service.log",
      instances: 2
    }

  ]
}
