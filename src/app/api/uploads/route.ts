import { connect } from "@/lib/connectDB";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/Admin";
import bcryptjs from "bcryptjs";
export async function POST(request: NextRequest) {
   try {
      connect();
      const data = await request.formData();
      const file: File | null = data.get("file") as unknown as File;
      const email: string | null = data.get("email") as string;
      const password: string | null = data.get("password") as string;
      const username: string | null = data.get("username") as string;

      if (!file) {
         return NextResponse.json({ success: false });
      }

      const user = await User.findOne({ email });

      if (user) {
         return NextResponse.json({ error: "user a diffrent enmail" }, { status: 400 });
      }

      const HashPashword = await bcryptjs.hash(password, 10);
      const bytes = await file.arrayBuffer();
      const buffer = await Buffer.from(bytes);

      // With the file data in the buffer, you can do whatever you want with it.
      // For this, we'll just write it to the filesystem in a new location
      const path = `public/uploads/admin/${file.name}`;
      await writeFile(path, buffer);

      const SavedUser = new User({
         email,
         username,
         password: HashPashword,
         imageUrl: path,
      });

      const Created = await SavedUser.save();

      return NextResponse.json({ success: true, Created }, { status: 200 });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
