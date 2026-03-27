import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wrvgibapwgwrnxrtuwoc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndydmdpYmFwd2d3cm54cnR1d29jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4OTY3NjcsImV4cCI6MjA4OTQ3Mjc2N30.T7qPjue5IgylfzPsO5QN-_vvWZnagtgtIftlgmhaM-g'

export const supabase = createClient(supabaseUrl, supabaseKey)