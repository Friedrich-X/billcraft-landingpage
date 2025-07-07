import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/utils/supabaseClient';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: 'Ungültige E-Mail.' }, { status: 400 });
    }
    const { data, error } = await supabase
      .from('notify_emails')
      .insert([{ email }]);
    if (error) {
      if (error.code === '23505') {
        // Unique violation
        return NextResponse.json({ error: 'E-Mail ist bereits eingetragen.' }, { status: 409 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Serverfehler.' }, { status: 500 });
  }
} 