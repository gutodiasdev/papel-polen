import { PrismaClient } from '@prisma/client'
import { NextResponse } from "next/server"

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function POST(request: Request) {
    const body = await request.json() as { name: string, email: string, phone: string, businessName: string }
    try {
        const user = await prisma.suzanoPapelPolenCampaign.findFirst({
            where: { email: body.email }
        })
        if (user) return NextResponse.json('Already registered')
        await prisma.suzanoPapelPolenCampaign.create({
            data: {
                name: body.name,
                email: body.email,
                phone: body.phone,
                businessName: body.businessName
            }
        })
        return NextResponse.json('registered')
    } catch (error: any) {
        return NextResponse.json(error.message)
    }
}