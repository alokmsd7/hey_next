import connectMongoDB from "@/libs/mongodb";
import Topics from "@/models/topics";
import { NextApiResponse } from "next";

export async function POST(request: { json: () => PromiseLike<{ title: any; description: any; }> | { title: any; description: any; }; }) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topics.create({ title, description });
  return NextApiResponse.json({ message: "Topic Created" }, { status: 201 });
} 

export async function GET() {
  await connectMongoDB();
  const topics = await Topics.find();
  return NextApiResponse.json({ topics });
}

export async function DELETE(request: { nextUrl: { searchParams: { get: (arg0: string) => any; }; }; }) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topics.findByIdAndDelete(id);
  return NextApiResponse.json({ message: "Topic deleted" }, { status: 200 });
}
