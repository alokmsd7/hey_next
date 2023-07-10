import connectMongoDB from "@/libs/mongodb";
import Topics from "@/models/topics";
import { NextResponse, Request } from "next/server";

export async function PUT(request: Request, { params }: any) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Topics.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request: Request, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topics.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}

export async function POST(request: Request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topics.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function DELETE(request: Request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topics.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
