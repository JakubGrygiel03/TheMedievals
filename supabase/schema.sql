create extension if not exists "uuid-ossp";

create table contact_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  sender_name text not null,
  email text not null,
  phone text,
  event_type text not null check (event_type in ('concert', 'historical_event', 'fair', 'wedding', 'corporate', 'workshop', 'other')),
  event_date date,
  location text,
  message text not null,
  status text default 'new' check (status in ('new', 'contacted', 'confirmed', 'archived')),
  is_read boolean default false not null,
  notes text
);

create table phone_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  requester_name text not null,
  requester_email text not null,
  organization text,
  page text
);

create table concerts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  event_name text not null,
  city text not null,
  venue text,
  event_date timestamp with time zone not null,
  ticket_link text,
  is_published boolean default true
);

create table system_pings (
  id uuid default gen_random_uuid() primary key,
  pinged_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table contact_messages enable row level security;
alter table concerts enable row level security;
alter table system_pings enable row level security;
alter table phone_requests enable row level security;

create policy "Allow public to insert contact messages" on contact_messages for insert with check (true);
create policy "Allow public read published concerts" on concerts for select using (is_published = true);
create policy "Allow public to insert pings" on system_pings for insert with check (true);
create policy "Allow public to insert phone requests" on phone_requests for insert with check (true);
