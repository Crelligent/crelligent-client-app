import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EngagementCodeEmail } from '@/components/emails/EngagementCodeEmail';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);

// We need the service role key to insert into engagement_codes bypassing RLS
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { email, tenantName, role = 'executive' } = await request.json();

    if (!email || !tenantName) {
      return NextResponse.json(
        { error: 'Email and Tenant Name are required' },
        { status: 400 }
      );
    }

    // 1. Generate a random secure Engagement Code (e.g., CR-8F4X-92V2)
    const randomPart1 = Math.random().toString(36).substring(2, 6).toUpperCase();
    const randomPart2 = Math.random().toString(36).substring(2, 6).toUpperCase();
    const engagementCode = `CR-${randomPart1}-${randomPart2}`;

    // 2. Create the Tenant in the database (or get it if it exists)
    // For simplicity in this demo, we'll just insert and get the ID.
    // In a real production app, you might want an upsert or to select from an existing list.
    const { data: tenant, error: tenantError } = await supabase
      .from('tenants')
      .insert([{ name: tenantName }])
      .select('id')
      .single();

    if (tenantError) {
      console.error('Error creating tenant:', tenantError);
      return NextResponse.json({ error: 'Failed to create tenant' }, { status: 500 });
    }

    // 3. Save the Engagement Code to the database
    const { error: codeError } = await supabase
      .from('engagement_codes')
      .insert([{ code: engagementCode, tenant_id: tenant.id }]);

    if (codeError) {
      console.error('Error creating code:', codeError);
      return NextResponse.json({ error: 'Failed to generate code' }, { status: 500 });
    }

    // 4. Send the beautifully designed HTML email
    const { data, error: emailError } = await resend.emails.send({
      from: 'Crelligent <onboarding@client.crelligent.com>',
      to: [email],
      subject: `Your ESRE OS Access Code: ${tenantName}`,
      react: EngagementCodeEmail({ tenantName, engagementCode }) as React.ReactElement,
    });

    if (emailError) {
      return NextResponse.json({ error: emailError }, { status: 400 });
    }

    return NextResponse.json(
      { message: 'Engagement Code generated and email sent successfully.', engagementCode },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
