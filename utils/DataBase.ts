import { MongoClient } from "mongoClient";

export async function getCollection() {
  const client = new MongoClient();
  try {
    await client.connect("mongodb://root:password@st-mongo:27017");
  } catch (error) {
    console.log("Error connection MongoDB and retry:" + error);
    await client.connect("mongodb://root:password@st-mongo:27017");
  }
  const db = client.database("Dev");
  return db.collection("SystemMap");
}
