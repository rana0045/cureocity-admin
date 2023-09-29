import { connect } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import bcryptjs from "bcryptjs";
import Doctor from "@/models/Doctor";

async function processAndSaveFile(field: File | null, directory: string) {
   if (field) {
      const bytes = await field.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const path = `public/${directory}/${field.name}`;
      await writeFile(path, buffer);
      return path;
   }
   return null;
}

export async function POST(request: NextRequest) {
   connect();
   try {
      const data = await request.formData();
      const file: File | null = data.get("file") as unknown as File;
      const profile: File | null = data.get("profile") as unknown as File;
      const timeslot: Array<{ time: any; day: any }> = [];

      const fieldsToExtractAsString = ["firstname", "lastname", "email", "password", "username", "gender", "address", "date_of_birth", "professionDetails", "Mobile"];
      const extractedData: Record<string, string | File | any> = {};

      for (const field of fieldsToExtractAsString) {
         extractedData[field] = data.get(field);
      }

      const { firstname, lastname, email, password, username, gender, address, date_of_birth, professionDetails, Mobile } = extractedData;

      //time slot

      const timeslotData = data.getAll("Timeslot");
      const obj = JSON.parse(timeslotData[0].toString());
      console.log(obj);

      for (let i = 0; i < obj.length; i++) {
         const data = obj[0];
         const time = data.time;

         const day = data.day;
         timeslot.push({ time, day });
      }

      const File_path = await processAndSaveFile(file, "files/Doctors");
      const profile_Path = await processAndSaveFile(profile, "uploads/Doctors");
      const hashPass = await bcryptjs.hash(password, 10);
      const user = await Doctor.findOne({ email });
      if (user) {
         return NextResponse.json({ error: "email already exist" }, { status: 400 });
      }

      const doc = new Doctor({
         firstname,
         lastname,
         email,
         password: hashPass,
         username,
         gender,
         address,
         date_of_birth,
         professionDetails,
         Mobile,
         AddiotionalFile: File_path,
         imageUrl: profile_Path,
         timeslot,
      });

      const SaveDoc = await doc.save();

      return NextResponse.json({ success: true, message: "Docter Created", SaveDoc });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
