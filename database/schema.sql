-- Create the Tenants table (represents an Enterprise Client)
CREATE TABLE public.tenants (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the Profiles table (links Supabase Auth users to a Tenant)
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    tenant_id UUID REFERENCES public.tenants(id) ON DELETE SET NULL,
    full_name TEXT,
    role TEXT DEFAULT 'executive',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the Engagement Codes table (used during Onboarding)
CREATE TABLE public.engagement_codes (
    code TEXT PRIMARY KEY,
    tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE,
    is_used BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.engagement_codes ENABLE ROW LEVEL SECURITY;

-- Create Policies
-- Users can read their own profile
CREATE POLICY "Users can view own profile" 
    ON public.profiles FOR SELECT 
    USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" 
    ON public.profiles FOR UPDATE 
    USING (auth.uid() = id);

-- Users can view their own tenant's data
CREATE POLICY "Users can view their tenant" 
    ON public.tenants FOR SELECT 
    USING (
        id IN (SELECT tenant_id FROM public.profiles WHERE profiles.id = auth.uid())
    );

-- Allow anyone to check if an engagement code exists (needed for signup validation)
CREATE POLICY "Anyone can verify an engagement code" 
    ON public.engagement_codes FOR SELECT 
    USING (true);

-- Allow updates to engagement codes (to mark them as used)
CREATE POLICY "Users can mark code as used"
    ON public.engagement_codes FOR UPDATE
    USING (true);

-- Insert a test tenant and test code for local prototyping
INSERT INTO public.tenants (name) VALUES ('Apex Logistics') RETURNING id;

-- Remember to grab the generated Tenant ID and insert an engagement code for testing!
-- INSERT INTO public.engagement_codes (code, tenant_id) VALUES ('CR-8X92-V2', 'THE-UUID-FROM-ABOVE');
