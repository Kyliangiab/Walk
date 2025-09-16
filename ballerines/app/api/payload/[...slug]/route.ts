import { getPayload } from 'payload'
import config from '../../../../payload.config'
import { NextRequest } from 'next/server'

export const GET = async (request: NextRequest) => {
  const payload = await getPayload({ config })
  return payload.requestHandler(request)
}

export const POST = async (request: NextRequest) => {
  const payload = await getPayload({ config })
  return payload.requestHandler(request)
}

export const PUT = async (request: NextRequest) => {
  const payload = await getPayload({ config })
  return payload.requestHandler(request)
}

export const PATCH = async (request: NextRequest) => {
  const payload = await getPayload({ config })
  return payload.requestHandler(request)
}

export const DELETE = async (request: NextRequest) => {
  const payload = await getPayload({ config })
  return payload.requestHandler(request)
}
