import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullname, email, message } = await req.json();

  console.log('Nombre:', fullname);
  console.log('Correo:', email);
  console.log('Mensaje:', message);

  return NextResponse.json({ msg: ['hi from  contact  backend']})
}