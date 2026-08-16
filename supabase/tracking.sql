-- Safe to run on an existing project (SQL Editor in Supabase).

alter table contact_messages add column if not exists notes text;

create table if not exists phone_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  requester_name text not null,
  requester_email text not null,
  organization text,
  page text
);

alter table phone_requests enable row level security;

drop policy if exists "Allow public to insert phone requests" on phone_requests;
create policy "Allow public to insert phone requests" on phone_requests for insert with check (true);
