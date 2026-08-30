const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ss0960446_db_user:cohort12345@cohort-cluster.vues5sb.mongodb.net/?appName=cohort-cluster",
    );
    console.log("mongodb is connected");
  } catch (error) {
    console.log("error while connecting db", error);
  }
};

module.exports = connectDb;
