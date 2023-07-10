import connectMongoDB from "@/libs/mongodb";
import Topics from "@/models/topics";
import { NextApiResponse } from "next";

export async function POST(request: NextApiRequest) {
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

export async function DELETE(request: NextApiRequest) {
  const id = request.query.id as string;
  await connectMongoDB();
  await Topics.findByIdAndDelete(id);
  return NextApiResponse.json({ message: "Topic deleted" }, { status: 200 });
}
