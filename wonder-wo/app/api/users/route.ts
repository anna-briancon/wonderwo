import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(req: Request) {
  const body = await req.json()
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password, // à hasher évidemment
    },
  })
  return NextResponse.json(user)
}
