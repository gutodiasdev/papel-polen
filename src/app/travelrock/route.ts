import { PrismaClient } from '@prisma/client'
import { NextResponse } from "next/server"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

//adjust
export async function POST(request: Request) {
    const body = await request.json()
    try {
        await prisma.travelRockBarilocheCampaign.create({
            data: {
                registered: {
                    toJSON: body
                }
            }
        })
        return NextResponse.json('registered')
    } catch (error: any) {
        return NextResponse.json(error.message)
    }
}