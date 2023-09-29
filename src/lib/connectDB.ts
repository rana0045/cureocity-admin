import mongoose, { Mongoose } from "mongoose";

export async function connect() {
   try {
      mongoose.connect(process.env.MONOGO_URI!);

      const connection = mongoose.connection;
      connection.on("connected", () => {
         console.log("connected");
      });

      connection.on("error", (error: any) => {
         console.log(error.message);
      });
   } catch (error: any) {
      console.log(error.message);
   }
}
