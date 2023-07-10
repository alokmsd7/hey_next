import connectMongoDB from "@/libs/mongodb";
 import Topics from "@/models/topics";
import { NextResponse } from "next/server";
export async function PUT(request: { json: () => PromiseLike<{ newTitle: any; newDescription: any; }> | { newTitle: any; newDescription: any; }; }, { params }: any) {
   const { id } = params;
  const { newTitle: title, newDescription: description } = await request. json();
  await connectMongoDB();
  await Topics.findByIdAndUpdate(id,{ title, description });
   return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}
export async function GET(request: any,{ params }: any) {
    const { id } = params;
    await connectMongoDB();
    const topic=await Topics.findOne({_id: id});
  return NextResponse.json({topic},{status:200});
}