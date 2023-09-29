import { connect } from "@/lib/connectDB";
import { NextRequest } from "next/dist/server/web/spec-extension/request";
import { NextResponse } from "next/server";
import User from "@/models/User";
import { writeFile } from "fs/promises";
import bcryptjs from "bcryptjs";

async function processAndSaveFile(filed: File | null, directory: String) {
   if (filed) {
      const bytes = await filed.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const path = `public/${directory}/${filed.name}`;
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
      const Stringdate = ["firstname", "lastname", "email", "password", "username", "gender", "address", "date_of_birth", "Mobile"];

      const extraxtedData: Record<string, string | File | any> = {};

      for (const filed of Stringdate) {
         extraxtedData[filed] = data.get(filed);
      }
      const { firstname, lastname, username, email, password, gender, address, date_of_birth, Mobile } = extraxtedData;

      const UserExist = await User.findOne({ email });
      const mobileexist = await User.findOne({ Mobile });
      if (UserExist) {
         return NextResponse.json({ error: "email exist user diffrent email address" }, { status: 400 });
      }
      if (mobileexist) {
         return NextResponse.json({ error: "MObile num exist use diffrent Mobile number" }, { status: 400 });
      }
      const File_path = await processAndSaveFile(file, "files/Users");
      const Profile_path = await processAndSaveFile(profile, "uploads/Users");
      const hashpassword = await bcryptjs.hash(password, 10);

      const user = new User({
         firstname,
         lastname,
         username,
         email,
         Mobile,
         date_of_birth,
         gender,
         address,
         AddiotionalFile: File_path,
         imageUrl: Profile_path,
         subscriptions: [],
      });

      const SavedUser = await user.save();
      return NextResponse.json({ success: true, SavedUser, message: "user created" });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function GET(request: NextRequest) {
   connect();
   try {
      const reqBody = await request.json();
      if (!reqBody) {
         return NextResponse.json({ error: "reqboy not" }, { status: 400 });
      }
      const email = reqBody;
      console.log(email);

      const user = await User.findOne({ email });
      return NextResponse.json({ success: true, user }, { status: 200 });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
