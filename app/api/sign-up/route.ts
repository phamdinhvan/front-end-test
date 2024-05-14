import { NextResponse } from 'next/server';

const isEmailRegistered = async (email: string): Promise<boolean> => {
  const registeredEmails = ["test@gmail.com", "user@gmail.com"];
  return registeredEmails.includes(email);
};

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const emailExists = await isEmailRegistered(email);

  if (emailExists) {
    return NextResponse.json({ error: 'Email is already registered' }, { status: 400 });
  }

  return NextResponse.json({ message: 'Email is available' });
}

